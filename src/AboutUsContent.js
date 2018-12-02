
import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner } from './gestalt';
import "./App.css";
import testImage from './items_images/IMG_0098.jpg'
import { Slide } from 'react-slideshow-image';
import testAvatar from './images/face_1.jpg'
import { width } from 'window-size';
import image from './images/about-us-image.jpg'


class AboutUsContent extends React.Component {

    constructor(props) {

        super(props)   
    }
    
    render() {
        return (
            <div className = "aboutUsModal">
            
            <Modal
                accessibilityCloseLabel="close"
                accessibilityModalLabel="View random images"
                onDismiss={this.props.onDismissAboutUs}
                size="lg"
            >            
                <Box>
                    <img style = {{height: "500px", width: "100%", objectFit: "cover"}} src = {image}/>
                    <Box position = "absolute" right = {true} top={true} width = "75%" marginRight = {4} >
                        <p style = {{textAlign: "right", fontWeight: "bold", fontSize: "14pt"}}>جايلك يسهل  على الجيران التواصل فيما بينهم من اجل بيع وشراء المنتجات بكل سهولة وبتجربة آمنة</p>
                    </Box>
                </Box>
            </Modal>
            </div>
        )
    }
}

export default AboutUsContent