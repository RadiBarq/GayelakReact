
import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner } from './gestalt';
import "./App.css";
import testImage from './items_images/IMG_0098.jpg'
import { Slide } from 'react-slideshow-image';
import testAvatar from './images/face_1.jpg'
import { width, height } from 'window-size';
import { runInThisContext } from 'vm';
import grayBackground from './images/gray_background.svg'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { ENGINE_METHOD_DIGESTS } from 'constants';
import default_profile from './images/default_profile.jpg'
import * as animationDataA from './like.json'
import Lottie from 'react-lottie';
var firebase = require("firebase");

class ItemContent extends React.Component {

    constructor(props) {

        super(props)
        this.renderSlideImages = this.renderSlideImages.bind(this)
        this.state = {

            userImageReady: false,
            userImageUrl: "",
            itemImageReady: false,
            itemImagesUrl: [],
            showSpinner: false,
            isStopped: true,
            isPaused: false,
            speed: 1,
            direction: 1,
            isLike: false ,
            itemFavourties: this.props.item.favourites,
            showFavourites: false
        }

        this.onClickDownload = this.onClickDownload.bind(this)
        this.checkFavourite = this.checkFavourite.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentWillMount()
    { 
        var currentUser = firebase.auth().currentUser 

        if (currentUser == null)
        {
            this.setState({
                showFavourites: true    
        })

        }

        else if (currentUser.uid != this.props.item.itemUserId)
        {
            this.setState({
                    showFavourites: true    
            })
        }

        //this.checkFavourite()       
    }

    checkFavourite()
    {  
        var currentUser = firebase.auth().currentUser
        var userId = currentUser.uid
        var self = this
        firebase.database().ref().child("Users").child(userId).child("favourites").once('value', 
            function(snapshot){
                
                if (snapshot.hasChild(self.props.item.itemUserId))
                {
                    self.setState({isStopped: false, isLike: true});
                }

            })
    }


    componentDidMount() {

        var storageRef = firebase.storage().ref()
        var self = this


        var ref = storageRef.child('Profile_Pictures/' + self.props.item.itemUserId + '/Profile.jpg')
        if (ref == null)
        {
            console.log("there is no image available")
        }

        else
        {

        storageRef.child('Profile_Pictures/' + self.props.item.itemUserId + '/Profile.jpg').getDownloadURL().then(function (url) {

            self.setState({
                userImageUrl: url,
                userImageReady: true
            });

        }).catch(function (error) {
            
            self.setState({

                userImageUrl: default_profile,
                userImageReady: true
            });

        })
     }

        var counter = 0
        for (var i = 0; i < self.props.item.imagesCount; i++) {

            var images = []
            const imageNumber = i + 1

            storageRef.child('Items_Photos/' + self.props.itemId + '/' + imageNumber + '.jpeg').getDownloadURL().then(function (url) {

                images[counter] = url
                console.log(counter)

                if (counter == self.props.item.imagesCount - 1) {

                    self.setState({

                        itemImageReady: true,
                        itemImagesUrl: images

                    })


                 }  

                counter = counter + 1

            }).catch(function (error) {

                console.log(error.errorMessage)
            });
        }
    }

    renderDistanceUnit() {

        return(
        <Box right={true} position="absolute" marginRight={9}>
            <h3 style={{ color: "black", weight: "bold", textAlign: "right" }}> </h3>
        </Box>)
    }

    renderSlideImages() {

        if (this.state.itemImageReady) {

            var images = []
            for (var i = 0; i < this.props.item.imagesCount; i++) {
                images.push(<img style={{ width: "100%", height: "100%" }} src={this.state.itemImagesUrl[i]} />)
            }

            return (
                <Box marginLeft={2} marginRight={2} >
                    <AliceCarousel infinite={false}>
                        {images}
                    </AliceCarousel>
                </Box>
            )
        }

        else {
            return (
                <Box marginLeft={2} marginRight={2} >
                        <Spinner show={true} accessibilityLabel="Loading Spinner" />
                </Box>

           )
        }
    }

    renderUserImage() {
        if (this.state.userImageReady) {
            return (
                <Avatar src={this.state.userImageUrl} />)
        }
        else {

            return (

                <Avatar src={grayBackground} size="md" />)

        }
    }

     clickHandler (){
        var currentFavourites = this.state.itemFavourties
        const { isStopped, isPaused, direction, speed, isLike } = this.state;


        if (!isStopped) {
          this.setState({ direction: direction * -1 });
        }

        if (isLike == true)
        {

            var currentUser = firebase.auth().currentUser
            var userId = currentUser.uid
            var self = this

            firebase.database().ref().child("Users").child(userId).child("favourites").child(this.props.itemId).remove()

            firebase.database().ref().child("items").child(this.props.itemId).update({
                favourites: currentFavourites - 1
    
            })
            this.setState({itemFavourties: currentFavourites - 1})
        }

        else
        {
            console.log("like")
            var currentFavourites = this.props.item.favourites

            var currentUser = firebase.auth().currentUser
            var userId = currentUser.uid
            var self = this
            var ts = Math.round((new Date()).getTime() / 1000);
            firebase.database().ref().child("Users").child(userId).child("favourites").update({[this.props.itemId]: ""})

            firebase.database().ref().child("Users").child(this.props.item.itemUserId).child("notifications").child(userId + this.props.itemId).set({

                itemId: this.props.itemId,
                notificationId: userId + this.props.itemId,
                reccent: "false",
                timestamp: ts,
                type: "favourite",
                userId: userId,
                userName: currentUser.displayName

            })


            firebase.database().ref().child("items").child(this.props.itemId).update({
                favourites: currentFavourites + 1
            })

            this.setState({itemFavourties: currentFavourites + 1})
        }
        
        this.setState({ isStopped: false, isLike: !isLike });

      };

    onClickDownload()
    {
        this.props.onDismissImage();
        this.props.showDownloadModal()
    }

    render() {
        
          const defaultOptions = { animationData: animationDataA, loop: false, autoplay: false };
          const { isStopped, isPaused, direction, speed, isLike } = this.state;
          const centerStyle = {
            display: 'block',
            margin: '10px auto',
            textAlign: 'center',
            border: 'none',
            background: 'none'
          };

          

          var eventListeners=[
            {
              eventName: 'complete',
              callback: () =>{
                console.log("animation completed")
              }
              ,

            },
          ]

        return (
            <div className="imageModal">
                <Modal
                    accessibilityCloseLabel="close"
                    accessibilityModalLabel="View default padding and styling"
                    heading={<h5 style={{ color: "black", weight: "bold" }}>{this.props.item.title}</h5>}
                    onDismiss={this.props.onDismissImage}
                    footer={
                        <Box display="flex" direction="row" justifyContent="center">
                            <label onClick = {this.onClickDownload}  style={{ color: "rgb(52, 127, 251)", fontWeight: "bold", float: "center", fontSize: "14pt" }}>حمل التطبيق لتواصل مع البائع</label>
                        </Box>
                    }
                    size="lg"
                >

                    <Box padding={2}>

                        {
                            this.renderSlideImages()
                        }

                        <Box display="flex" direction="row" flex="grow" >
                            <Box marginLeft={3} column={2} mdColumn={1} left={true}>
                                {this.renderUserImage()}
                            </Box>
                            <Box right={true} position="absolute" marginRight={3}>
                                <h3 style={{ color: "black", weight: "bold", textAlign: "right" }}>{this.props.distanceUnit + " " + this.props.distance}</h3>
                            </Box>
                            <Box right={true} position="absolute" marginRight={3} marginTop = {12}>

                            {this.state.showFavourites && (
                                 <div>

                                 <button style={centerStyle} onClick={this.clickHandler}> <Lottie
                                 options={defaultOptions}
                                 height={50}
                                 width={50}
                                 isStopped={isStopped}
                                 isPaused={isPaused}
                                 speed={speed}
                                 direction={direction}
                                 /></button>
                                 </div>
                            )}
                           
                            </Box>
                            {
                                this.renderDistanceUnit()
                            }
                        </Box>
                        <Box>
                            <Box column={2} mdColumn={1} marginLeft={3} >

                                <h3 style={{ color: "black", weight: "bold" }}>{this.props.item.price}</h3>

                            </Box>

                            <Box>
                                <p style={{ color: "black", fontWeight: "bold", textAlign: "right", fontSize: "13pt" }}>
                                    {this.props.item.description}
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </div>
        )
    }
}

export default ItemContent