import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner, Icon, Image } from './gestalt';
import "./App.css";
import Dropzone from 'react-dropzone'
import { func } from 'prop-types';
import Geofire from 'geofire';
import GeoLocation from './GeoLocation'
import { geolocated } from 'react-geolocated';
import IMAGENET_CLASSES from './IMAGENET_CLASSES.js'
import * as tf from '@tensorflow/tfjs';
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
            uploading: false
        }

        this.dropFinished = this.dropFinished.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
        this.setLocationDisabled = this.setLocationDisabled.bind(this)
        this.setLocationEnabled = this.setLocationEnabled.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.getTitles = this.getTitles.bind(this)
        this.loadModel = this.loadModel.bind(this)
        this.processImage = this.processImage.bind(this)

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
            console.log("accepted is " +  accepted[i])
            var self = this

            reader.onload =  async function (event) {
 
                var img_url = event.target.result;
                var address = "test-image-" + (counter + 1).toString()

                var element = document.getElementById(address)
                element.onload = function() { }
            
                element.src = img_url;

                console.log("element source is " + element.src)
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
                        await self.predictImages(tensors)
                    }

                    // console.log("offeset" + offset)
                }
                // else throw an error
                else {

                    console.log("unkown model is detected here")
                }

            }

            reader.readAsDataURL(image);
        }
    }

    async predictImages(tensors) {

        if (this.state.model == null) {

            console.log("please load the model first")
        }

        else {

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
            }
        }
    }

    getTitles() {

    }

     uploadFiles(accepted) {

         this.processImage("mobilenet", accepted)

        // var user = firebase.auth().currentUser
        // var firebaseRef = firebase.database().ref().child("items-location")
        // var ts = Math.round((new Date()).getTime() / 1000);
        // var self = this
        // console.log(accepted)
        // console.log(ts)
        // var geoFire = new Geofire(firebaseRef)
        // var ref = firebase.database().ref().child('items').push()

        // if (this.state.lat == 0 || this.state.long == 0)
        // {
        //     self.setState({
        //         uploadingError: true,
        //         errorString: "الرجاء تفعيل خدمة الموقع من إعدادات المتصفح"
        //     })
        // }

        // ref.set({

        //     category: "category-others",
        //     description: "",
        //     currency: "USD",
        //     displayName: user.displayName,
        //     favourites: 0,
        //     imagesCount: accepted.length,
        //     price: "غير محدد",
        //     timestamp: ts,
        //     title: "dog maltese shitty",
        //     userId: user.uid

        // }).then(function (error) {

        //     if (error == null) {

        //         console.log("ref is " + ref.key)
        //         geoFire.set(ref.key, [self.state.lat, self.state.long]).then(function () {
        //             var storageRef = firebase.storage().ref().child("Items_Photos").child(ref.key)
        //             for (var i = 0; i < accepted.length; i++) {
        //                 var file = accepted[i]
        //                 storageRef.child(i + 1 + ".jpeg").put(file)
        //             }
        //         }, function (error) {
        //             console.log("Error: " + error);
        //         });
        //     }

        //     else {
        //         self.setState({
        //             uploadingError: true,
        //             errorString: error.message
        //         })
        //     }
        // })
    }

    render() {

        return (

            <div className="aboutUsModal">
                <img id='test-image-1' style={{ width: "250px", height: "250px"}} />
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

                                    this.uploadFiles(accepted)

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
                </Modal>
            </div>

        )
    }
}

export default UploadFileModal
