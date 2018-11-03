
import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner } from './gestalt';
import "./App.css";
import testImage from './items_images/IMG_0098.jpg'
import { Slide } from 'react-slideshow-image';
import testAvatar from './images/face_1.jpg'
import { width } from 'window-size';
import image from './images/about-us-image.jpg'
import profileImage from './images/face_1.jpg';
import starImage from  "./images/star_full.png"
import Rating from 'react-rating';

class Profile extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render()
    {
        var profileImageStyle = {

            
            width: "120px",
            height: "120px",
            borderRadius: "10px"

        }

        var userNameLabelStyle = {

            fontSize: "18pt",
            fontWeight: "bold",
            marginRight: "92px",
            display: "block",
        }

        var ratingStyle = {
            marginRight: "92px",
            display: "block"
        }

        return(

            <Box  display="flex"
            flex="grow"
            justifyContent="end"
            alignItems="stretch"
            alignSelf="end" paddingY = {12} paddingX = {6}  mdPaddingX = {12} lgPaddingX = {12} smPaddingX = {6}> 

               <box>
                    <label style = {userNameLabelStyle}>Radi Barq</label>
                    <Rating
                     emptySymbol={<img src={starImage} className="icon" />}
                     fullSymbol={<img src={starImage} className="icon" />}
                     initialRating={0}
                   readonly
/>
                </box>

               
                <img style = {profileImageStyle} src = {profileImage}></img>
       


            </Box>

        )
    }

}

export default Profile