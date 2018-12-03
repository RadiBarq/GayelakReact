import React from 'react'
import { Box, Column, Divider, Modal, TextField, Button, Text, Masonry, Heading, Avatar, Label, Spinner, Icon, Image } from './gestalt';
import "./App.css";
import Dropzone from 'react-dropzone'
import { func } from 'prop-types';
import Geofire from 'geofire';
import GeoLocation from './GeoLocation'
import { geolocated } from 'react-geolocated';
import IMAGENET_CLASSES from './IMAGENET_CLASSES.js'
import * as tf from '@tensorflow/tfjs';
import Lottie from 'react-lottie';
import * as animationData from './simple_tick-w80-h80.json'


var firebase = require("firebase");

class UploadFileModal extends React.Component {
    constructor(props) {

        super(props)
        this.state = {

            accepted: [],
            rejected: [],
            uploadingError: false,
            errorString: "",
            uploadedItemId: "",
            isLocationAvailable: false,
            lat: 0,
            long: 0,
            model: null,
            tensors: [],
            uploading: false,
            uploadingFinished: false,
            price: "",
            animationLoading: false,
            itemKey: ""

        }

        this.dropFinished = this.dropFinished.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
        this.setLocationDisabled = this.setLocationDisabled.bind(this)
        this.setLocationEnabled = this.setLocationEnabled.bind(this)
        this.getLocation = this.getLocation.bind(this)

        this.loadModel = this.loadModel.bind(this)
        this.processImage = this.processImage.bind(this)
        this.processImages = this.processImages.bind(this)
        this.uploadLabels = this.uploadLabels.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.onClickAddPrice = this.onClickAddPrice.bind(this)

    }

    getLocation(lat, long) {

        console.log("lat is: " + lat, "long is: " + long)

        this.setState({
            lat: lat,
            long: long

        })
    }

    componentDidMount() {

        this.loadModel()

    }

    dropFinished() {

        console.log("the items length  is" + this.state.accepted.length)
        console.log("items are" + this.state.accepted)
        if (this.state.rejected.length > 0) {
            this.setState({
                uploadingError: true,
                errorString: "احد الملفات المرفقة لا تنطبق عليه شروط الصور التي نقبلها"
            })
        }

        else if (this.state.accepted.length > 5) {
            this.setState({
                uploadingError: true,
                errorString: "الحد الاقصى للصور المسموح بها هو 5"
            })
        }

        else {
            console.log("no error you could upload")
        }
    }

    setLocationDisabled() {
        this.setState(
            {
                isLocationAvailable: false
            }
        )
    }

    setLocationEnabled() {
        this.setState(
            {
                isLocationAvailable: true
            }
        )
    }

    handlePriceChange({ value }) {
        this.setState({ price: value });
    }

    async loadModel() {

        var modelName = "mobilenet";
        this.state.model = null
        var currentModel = await tf.loadModel('https://gogul09.github.io/models/mobilenet/model.json');
        this.setState({ model: currentModel })

        if (this.state.model != null) {
            console.log("model loaded successfully")
        }

        else {

            console.log("model loading failed")
        }
    }

    processImage(modelName, accepted) {

        var counter = 0
        var tensors = []

        for (var i = 0; i < accepted.length; i++) {

            var reader = new FileReader();
            var image = accepted[i]
            console.log("accepted is " + accepted[i])
            var self = this

            reader.onload = async function (event) {

                var img_url = event.target.result;
                var address = "test-image-" + (counter + 1).toString()
                var element = document.getElementById(address)

                element.onload = async function () {

                    let tensor = tf.fromPixels(element)
                        .resizeNearestNeighbor([224, 224])
                        .toFloat();

                    if (modelName === undefined) {

                        return tensor.expandDims();
                    }

                    else if (modelName === "mobilenet") {

                        let offset = tf.scalar(127.5);
                        tensors.push(tensor.sub(offset)
                            .div(offset)
                            .expandDims())

                        console.log("counter is " + counter)
                        counter = counter + 1

                        if (counter == accepted.length) {

                            console.log("tensor is " + tensor)
                            await self.predictImages(tensors, accepted)

                        }

                        // console.log("offeset" + offset)
                    }
                    // else throw an error
                    else {

                        console.log("unkown model is detected here")
                    }
                }

                element.src = img_url;
            }

            reader.readAsDataURL(image);
        }
    }

    uploadLabels(labels, key) {
        var labelsArray = labels.split(' ')
        var ref = firebase.database().ref().child("tags")

        console.log("labels are " + labelsArray)


        for (var i = 0; i < labelsArray.length; i++) {
            var label = labelsArray[i]
            console.log("label is " + label)
            ref.child(label).set({ [key]: " " })
        }
    }

    async predictImages(tensors, accepted) {

        if (this.state.model == null) {

            console.log("please load the model first")
        }

        else {

            var titles = ""

            for (var j = 0; j < tensors.length; j++) {

                let tensor = tensors[j]

                // console.log("tensor is " + tensor)
                let predictions = await this.state.model.predict(tensor).data();


                let results = Array.from(predictions)

                    .map(function (p, i) {
                        return {
                            probability: p,
                            className: IMAGENET_CLASSES[i]
                        };

                    }).sort(function (a, b) {
                        return b.probability - a.probability;
                    }).slice(0, 5);

                console.log("results are " + results[0].className)
                var currentTitles = results[0].className.split(" ")

                for (var i = 0; i < currentTitles.length; i++) {

                    if (i == currentTitles.length - 1) {
                        titles = titles + currentTitles[i]

                    }
                    else {
                        titles = titles + currentTitles[i] + " "
                    }


                }
            }

            this.uploadFiles(titles, accepted)

        }
    }

    onClickAddPrice()
    {

        var self = this
        firebase.database().ref().child("items").child(this.state.itemKey).update({

            price: this.state.price
        }).then(function (error) {

            if (error == null)
            {
                self.props.onDismissUploadFile()
            }

            else{
                console.log(error.message)
            }
        })

    }

    uploadFiles(titles, accepted) {

        var user = firebase.auth().currentUser
        var firebaseRef = firebase.database().ref().child("items-location")
        var ts = Math.round((new Date()).getTime() / 1000);
        var self = this
        console.log(accepted)
        console.log(ts)
        var geoFire = new Geofire(firebaseRef)
        var ref = firebase.database().ref().child('items').push()

        if (this.state.lat == 0 || this.state.long == 0) {
            self.setState({
                uploadingError: true,
                errorString: "الرجاء تفعيل خدمة الموقع من إعدادات المتصفح",
                uploading: false
            })
        }

        else{

        ref.set({

            category: "category-others",
            description: "",
            currency: "USD",
            displayName: user.displayName,
            favourites: 0,
            imagesCount: accepted.length,
            price: "غير محدد",
            timestamp: ts,
            title: titles,
            userId: user.uid

        }).then(function (error) {

            if (error == null) {

                self.uploadLabels(titles, ref.key)

                geoFire.set(ref.key, [self.state.lat, self.state.long]).then(function () {
                    var storageRef = firebase.storage().ref().child("Items_Photos").child(ref.key)
                    var counter = 0
                    for (var i = 0; i < accepted.length; i++) {
                        var file = accepted[i]
                        storageRef.child(i + 1 + ".jpeg").put(file).then(function () {
                            counter = counter + 1
                            if (counter == accepted.length) {
                                self.setState({ uploading: false, itemKey: ref.key, animationLoading: true })
                            }

                        })
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }

            else {
                self.setState({
                    uploadingError: true,
                    errorString: error.message,
                    uploading: false
                })
            }
        })
    }

    }

    processImages(accepted) {

        this.setState({ uploading: true })
        this.processImage("mobilenet", accepted)
    }

    render() {

        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: animationData,

            
            
          };

          var eventListeners=[
            {
              eventName: 'complete',
              callback: () => this.setState({animationLoading: false, uploadingFinished: true}),

            },
          ]


        return (
            <div className="aboutUsModal">

                <img id='test-image-1' style={{ width: "250px", height: "250px", visibility: "hidden" }} />
                <img id='test-image-2' style={{ width: "250px", height: "250px", visibility: "hidden" }} />
                <img id='test-image-3' style={{ width: "250px", height: "250px", visibility: "hidden" }} />
                <img id='test-image-4' style={{ width: "250px", height: "250px", visibility: "hidden" }} />
                <img id='test-image-5' style={{ width: "250px", height: "250px", visibility: "hidden" }} />

                <GeoLocation setLocationDisabled={this.setLocationDisabled} setLocationEnabled={this.setLocationEnabled} getItems={this.getLocation} />
                <Modal
                    accessibilityCloseLabel="close"
                    accessibilityModalLabel="View random images"
                    onDismiss={this.props.onDismissUploadFile}
                    size="sm"
                >

                    {this.state.uploadingFinished == false && this.state.animationLoading == false  && (
                        <div>
                            <Box>
                                <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "16pt" }}>ماذا تريد ان تبيع؟</p>
                            </Box>

                            <Box
                                display="flex"
                                flex="grow"
                                alignItems="stretch"
                                justifyContent="center"
                                marginBottom={10}
                            >

                                <Dropzone
                                    onDrop={(accepted, rejected) => {

                                        this.setState({ accepted, rejected });

                                        if (rejected.length > 0) {
                                            this.setState({
                                                uploadingError: true,
                                                errorString: "احد الملفات المرفقة لا تنطبق عليه شروط الصور التي نقبلها"
                                            })
                                        }

                                        else if (accepted.length > 5) {
                                            this.setState({
                                                uploadingError: true,
                                                errorString: "الحد الاقصى للصور المسموح بها هو 5"
                                            })
                                        }

                                        else {

                                            this.processImages(accepted)

                                        }
                                    }}
                                    accept="image/jpeg, image/png"
                                    maxSize={5000000}
                                >

                                    <Box
                                        marginTop={12}
                                    >
                                        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "12pt" }} >اسحب و الصق او تفصح</p>
                                        <p style={{ textAlign: "center", fontWeight: "", fontSize: "10pt", marginTop: "-10px" }}>الحد الاقصى لعدد الصور هو 5 وحجم الصورة اقل من 5 ميجا بايت</p>

                                        <Box display="flex"
                                            flex="grow"
                                            alignItems="stretch"
                                            justifyContent="center"
                                        >
                                            <Icon icon="add" accessibilityLabel="Pin" color="darkGray" size={25} />
                                        </Box>

                                    </Box>
                                </Dropzone>
                            </Box>
                            <Box display="flex"
                                flex="grow"
                                alignItems="stretch"
                                justifyContent="center"
                                marginBottom={10}>
                                {this.state.uploadingError &&
                                    (<p style={{ textAlign: "center", fontWeight: "bold", fontSize: "12pt", color: "red" }} >{this.state.errorString}</p>)}

                                {this.state.uploading && (
                                    <Box marginTop={2} marginBottom={2}>
                                        <Spinner show={this.state.uploading} accessibilityLabel="Loading Spinner" />
                                    </Box>
                                )}

                            </Box>
                        </div>
                    )}

                    {this.state.uploadingFinished == true && this.state.animationLoading == false && (
                        <div>

                            <Box>
                                <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "16pt" }}>تريد ان تضيف السعر؟</p>
                            </Box>
                            <Box
                                display="flex"
                                flex="grow"
                                alignItems="stretch"
                                justifyContent="center"
                                marginBottom={10}

                            >
                                <Box marginTop={4}>

                                    <TextField
                                        id="price"
                                        onChange={this.handlePriceChange}
                                        placeholder=""
                                        value={this.state.price}
                                        type="email"
                                    />
                                </Box>
                            </Box>

                            <Box marginTop={0} marginBottom = {6} paddingX = {12} size = "md">
                                <Box paddingX = {12}>
                                  <Button onClick = {this.onClickAddPrice} color="darkGray" text="موافق" type="submit" />
                                  </Box>
                            </Box>

                        </div>
                    )}

                        {this.state.animationLoading == true && this.state.uploadingFinished == false && (
                        <div>
                            <Box>
                                <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "16pt" }}>!تم اضافك منتجك بنجاح</p>
                            </Box>
                            <Box
                                display="flex"
                                flex="grow"
                                alignItems="stretch"
                                justifyContent="center"
                            >
                                  <Lottie options={defaultOptions}
                                  height={100}
                                  width={100}
                                  eventListeners = {eventListeners}
                                  />
                            </Box>
                        </div>
                    )}

                </Modal>
            </div>

        )
    }
}

export default UploadFileModal
