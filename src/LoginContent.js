import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner, TextField } from './gestalt';
import "./App.css";
import testImage from './items_images/IMG_0098.jpg'
import { Slide } from 'react-slideshow-image';
import testAvatar from './images/face_1.jpg'
import { width } from 'window-size';
import image from './images/about-us-image.jpg'
import { FacebookLoginButton } from "react-social-login-buttons";
import { createButton } from "react-social-login-buttons";

const config = {
    text: "Continue With Facebook",
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
};

const MyFacebookLoginButton = createButton(config);

class LoginContent extends React.Component {

    constructor(props) {
        super(props)
        this.handleEmailChange = this._handleEmailChange.bind(this)
        this.handlePasswordChange = this._handlePasswordChange.bind(this)
        this.onClickSignIn = this._onClickSignIn.bind(this)

        this.state = {

            eamilValue: " ",
            passwordValue: " ",
            auth: this.props.firebase.auth(),
            showSpinner: false,
            showErrorToast: false,
            showErrorText: " ",
            unsubscribe: null

        }

    }

    componentWillUnmount()
    {
        if (this.state.unsubscribe != null)
        {
            this.state.unsubscribe()
        }

    }  


    _onClickSignIn()
    {

             var self = this
            self.state.auth.signInWithEmailAndPassword(self.state.emailValue, self.state.passwordValue).catch(function(error) {
            // Handle Errors here.

            if (error != null)
            {
                var errorCode = error.code;
                var errorMessage = error.message;

                self.setState({

                    showSpinner: false,
                    showErrorText: errorMessage,
                    showErrorToast: true

                })
            }

            else{
                
              
            }

            // ...
          });

    }

    _handleEmailChange({ value }) {
        this.setState({ emailValue: value });
    }

    _handlePasswordChange({ value }) {

        this.setState({ passwordValue: value });

    }

    render() {
        return (

            <div className="aboutUsModal">

                <Modal
                    accessibilityCloseLabel="close"
                    accessibilityModalLabel="View random images"
                    onDismiss={this.props.onDismissAboutUs}
                    heading={"تسجيل الدخول"}
                    size="md"
                >

                    <Box paddingY={6} paddingX={6}>
                     
                        <Box paddingX = {6}>
                            <FacebookLoginButton text="Continue With Facebook" />
                        </Box>

                        <Box display="flex"
                            flex="grow"
                            justifyContent="center"
                            alignItems="stretch"
                            alignSelf="center"
                            marginTop={6}

                        >
                            <Text color="darkGray" size="xl">او</Text>
                        </Box>

                        <Box marginTop={4}>
                            <Box marginBottom={2}>
                                <Label htmlFor="email">
                                    <Text size="lg" align="right">البريد الالكتروني</Text>
                                </Label>
                            </Box>
                            <TextField
                                id="email"
                                onChange={this.handleEmailChange}
                                placeholder=""
                                value={this.state.emailValue}
                                type="email"
                            />
                        </Box>

                        <Box marginTop={4}>
                            <Box marginBottom={2}>
                                <Label htmlFor="email">
                                    <Text size="lg" align="right">كلمة المرور</Text>
                                </Label>
                            </Box>
                            <TextField
                                id="password"
                                onChange={this.handlePasswordChange}
                                placeholder=""
                                value={this.state.passwordValue}
                                type="password"
                            />
                        </Box>

                         <Box marginTop={12} paddingX = {12} size = "md">
                             <Box paddingX = {12}>
                             {!this.state.showSpinner && (

                               <Button onClick = {this.onClickSignIn} color="blue" text="تسجيل الدخول" type="submit" />
                             )}

                              {this.state.showSpinner && (
                                  <Spinner show={this.state.showSpinner} accessibilityLabel="loading spinner" />)}


                            </Box>
                         </Box>

                          <Box marginTop={4}>
                            {this.state.showErrorText && (

                                <Label htmlFor="errorLabel">
                                    <Text color="red" size="md" align="center">{this.state.showErrorText}</Text>
                                </Label>
                            )}

                        </Box>

                    </Box>

                </Modal>
            </div>

        )
    }

}

export default LoginContent;