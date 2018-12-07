
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
            showSpinner: false

        }
    }

    componentDidMount() {
        var storageRef = firebase.storage().ref()
        var self = this
        var counter = 0
       

        for (var i = 0; i < self.props.item.imagesCount; i++) {

            var images = []
            const imageNumber = i + 1

            storageRef.child('Items_Photos/' + self.props.itemId + '/' + imageNumber + '.jpeg').getDownloadURL().then(function (url) {

                images[counter] = url
                console.log(counter)

                if (counter == self.props.item.imagesCount - 1) {
                    
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
                            userImageReady: true,
                            itemImagesUrl: images,
                            itemImageReady: true

                        });

                    }).catch(function (error) {
                        
                        self.setState({

                            userImageUrl: default_profile ,
                            userImageReady: true,
                            itemImagesUrl: images,
                            itemImageReady: true

                        });

                    })
                 }
             }

                counter = counter + 1

            }).catch(function (error) {
                console.log(error)
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

    render() {

        return (
            <div className="imageModal">

                <Modal
                    accessibilityCloseLabel="close"
                    accessibilityModalLabel="View default padding and styling"
                    heading={<h5 style={{ color: "black", weight: "bold" }}>{this.props.item.title}</h5>}
                    onDismiss={this.props.onDismissImage}
                    footer={
                        <Box display="flex" direction="row" justifyContent="center">
                            <label onClick = { this.props.onClickDownload}  style={{ color: "rgb(52, 127, 251)", fontWeight: "bold", float: "center", fontSize: "14pt" }}>حمل التطبيق لتواصل مع البائع</label>
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