import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner, TextField } from './gestalt';
import "./App.css";
import testImage from './items_images/IMG_0098.jpg'
import { Slide } from 'react-slideshow-image';
import testAvatar from './images/face_1.jpg'
import { width } from 'window-size';
import image from './images/about-us-image.jpg'
import { FacebookLoginButton } from "react-social-login-buttons";
import {createButton} from "react-social-login-buttons";

const config = {
    text: "Continue With Facebook",
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
  };

const MyFacebookLoginButton = createButton(config);

class LoginContent extends React.Component {

    constructor(props) {
        super(props)

        this.handleChange = this._handleChange.bind(this)

        this.state = {

            value: ""
        }
    }

    _handleChange({ value }) {
        this.setState({ value });
      }

    render()
    {
        return (

         <div className = "aboutUsModal">

            <Modal
                accessibilityCloseLabel="close"
                accessibilityModalLabel="View random images"
                onDismiss={this.props.onDismissAboutUs}
                heading = {"تسجيل الدخول"}
                size="md"
                
            >            

            <Box  paddingY= {12} paddingX = {6}>
                <Box display="flex"
                 flex="grow"
                 justifyContent = "center"
                 alignItems="stretch"
                 alignSelf = "center"
                >

                <FacebookLoginButton text = "Continue With Facebook"/>

                </Box>

              <Box display="flex"
                 flex="grow"
                 justifyContent = "center"
                 alignItems="stretch"
                 alignSelf = "center"
                 marginTop = {4}
                >
                <Text color = "darkGray" size = "xl">او</Text>
            </Box>

             <Box marginTop = {4}>
                <Box marginBottom={2}>
                    <Label htmlFor="email">
                        <Text size = "lg" align = "right">البريد الالكتروني</Text>
                    </Label>
                </Box>
                <TextField
                     id="email"
                      onChange={this.handleChange}
                      placeholder=""
                      value={this.state.value}
                      type="email"
                    />
            </Box>

            <Box marginTop = {4}>
                <Box marginBottom={2}>
                    <Label htmlFor="email">
                        <Text size = "lg" align = "right">كلمة المرور</Text>
                    </Label>
                </Box>
                <TextField
                     id="email"
                      onChange={this.handleChange}
                      placeholder=""
                      value={this.state.value}
                      type="password"
                    />
          </Box>
            </Box>
              
            </Modal>
            </div>

        )
    }

}

export default LoginContent;