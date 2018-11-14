
import React from 'react'
import itemImage from './items_images/IMG_0123.jpg'
import "./GridItem.css"
import { Box, Column, Divider, Modal, Button, Text, Masonry } from './gestalt';
import MobileStoreButton from 'react-mobile-store-button'
import grayBackground from './images/gray_background.svg'
var firebase = require("firebase");

class GridItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            imageReady: false,
            imageUrl: ""
        }
    }

    renderImage() {

        const imageStyle = {

            width: "230px",
            height: "470px",
            transition: ".5s ease",
            backfacevVisibility: "hidden",
            opacity: "1",
            objectFit: "cover",
            borderRadius: "15px"
        }

        const tempImageStyle = {

            width: "230px",
            height: "470px",
            opacity: "1",
            transition: ".5s ease",
            objectFit: "cover",
            borderRadius: "15px"  

        }


        if (this.state.imageReady) {

            return (
                    <div className="image" onClick={() => this.props.onDismissImage(this.props.itemId)} >
                        {/* <img className = "gridImage" style = {imageStyle} src={randomImages[Math.floor(Math.random()*randomImages.length)]}/> */}
                        {
                            <img className="gridImage" style={imageStyle} src={this.state.imageUrl} />
                        }

                        <div className="middle">
                            <div className="text">{this.props.price}</div>
                        </div>
                    </div>
            )
        }

        else {
            return (
                <div className="image" >
                    {/* <img className = "gridImage" style = {imageStyle} src={randomImages[Math.floor(Math.random()*randomImages.length)]}/> */}
                    {   
                        <img className="gridImage" style={tempImageStyle} src = {grayBackground} />
                    }
                </div>
            )
        }
    }

    render() {


        var storageRef = firebase.storage().ref();

        // this is for testing
        // var randomImages = [

        //     require('./items_images/IMG_0094.jpg'),
        //     require('./items_images/IMG_0095.jpg'),
        //     require('./items_images/IMG_0096.jpg'),
        //     require('./items_images/IMG_0097.jpg'),
        //     require('./items_images/IMG_0098.jpg'),
        //     require('./items_images/IMG_0099.jpg'),
        //     require('./items_images/IMG_0100.jpg'),
        //     require('./items_images/IMG_0101.jpg'),
        //     require('./items_images/IMG_0102.jpg'),
        //     require('./items_images/IMG_0103.jpg'),
        //     require('./items_images/IMG_0104.jpg'),
        //     require('./items_images/IMG_0105.jpg'),
        //     require('./items_images/IMG_0106.jpg'),
        //     require('./items_images/IMG_0107.jpg'),
        //     require('./items_images/IMG_0108.jpg'),
        //     require('./items_images/IMG_0109.jpg'),
        //     require('./items_images/IMG_0110.jpg'),
        //     require('./items_images/IMG_0111.jpg'),
        //     require('./items_images/IMG_0112.jpg'),
        //     require('./items_images/IMG_0113.jpg'),
        //     require('./items_images/IMG_0114.jpg'),
        //     require('./items_images/IMG_0115.jpg'),
        //     require('./items_images/IMG_0116.jpg'),
        //     require('./items_images/IMG_0117.jpg'),
        //     require('./items_images/IMG_0118.jpg'),
        //     require('./items_images/IMG_0119.jpg'),
        //     require('./items_images/IMG_0120.jpg'),
        //     require('./items_images/IMG_0121.jpg'),
        //     require('./items_images/IMG_0122.jpg'),
        //     require('./items_images/IMG_0123.jpg'),
        //     require('./items_images/IMG_0124.jpg'),
        //     require('./items_images/IMG_0125.jpg'),
        //     require('./items_images/IMG_0126.jpg'),
        //     require('./items_images/IMG_0127.jpg'),
        //     require('./items_images/IMG_0128.jpg'),
        //     require('./items_images/IMG_0129.jpg'),
        //     require('./items_images/IMG_0130.jpg'),
        //     require('./items_images/IMG_0131.jpg'),
        //     require('./items_images/IMG_0132.jpg'),
        // ]

            var self = this
            storageRef.child('Items_Photos/' + this.props.imageId + '/1.jpeg').getDownloadURL().then(function (url) {

                self.setState({

                    imageUrl: url,
                    imageReady: true
                });

            }).catch(function (error) {
                console.log(error)
            });

        return (

            <div>
                {
                    this.renderImage()
                }
            </div>
        )
    }
}

export default GridItem;