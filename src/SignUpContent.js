import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner, TextField, Toast } from './gestalt';
import "./App.css";
import auth from './App'
import testImage from './items_images/IMG_0098.jpg'
import { Slide } from 'react-slideshow-image';
import testAvatar from './images/face_1.jpg'
import { width } from 'window-size';
import image from './images/about-us-image.jpg'
import { FacebookLoginButton } from "react-social-login-buttons";
import { createButton } from "react-social-login-buttons";
import default_profile from './images/default_profile.jpg'

import GeoLocation from 'geofire'

class SignUpContent extends React.Component {

    constructor(props) {

        super(props)
        this.handleEmailChange = this._handleEmailChange.bind(this)
        this.handlePasswordChange = this._handlePasswordChange.bind(this)
        this.handleUserNameChange = this._handleUserNameChange.bind(this)
        this.onClickRegister = this._onClickRegister.bind(this)
        this.createFile = this.createFile.bind(this)

        this.state = {

            eamilValue: " ",
            userNameValue: " ",
            passwordValue: " ",
            auth: this.props.firebase.auth(),
            showSpinner: false,
            showErrorToast: false,
            unsubscribe: null,
            showErrorText: " "
        }

        var self = this
        
        console.log("this shit" +  default_profile)
        this.state.unsubscribe =  this.state.auth.onAuthStateChanged(function (user) {

            if(user)
            {
                   console.log("login succeeded")
            }

        })  

    }

    _handleEmailChange({ value }) {

        this.setState({ emailValue: value });

    }

    _handlePasswordChange({ value }) {

        this.setState({ passwordValue: value });
    }

    async createFile(){

        let response = await fetch('https://firebasestorage.googleapis.com/v0/b/chottky.appspot.com/o/Icons%2Fdefualt_profile.jpg?alt=media&token=7bf53860-d1ad-4723-9137-3ebe80850a0a');
        let data = await response.blob();
        let metadata = {
          contentType: 'image/jpeg'
        };
        let file = new File([data], "test.jpg", metadata);
        // ... do something with the file or return it
        return file
      }
      

    _handleUserNameChange({ value }) {

        this.setState({ userNameValue: value });

    }

    componentWillUnmount()
    {
        if (this.state.unsubscribe != null)
        {
            this.state.unsubscribe()

        }
      
        console.log("things canceled")
    }

     dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        if(typeof dataURI !== 'string'){
            throw new Error('Invalid argument: dataURI must be a string');
        }
        dataURI = dataURI.split(',');
        var type = dataURI[0].split(':')[1].split(';')[0],
            byteString = atob(dataURI[1]),
            byteStringLength = byteString.length,
            arrayBuffer = new ArrayBuffer(byteStringLength),
            intArray = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteStringLength; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }
        return new Blob([intArray], {
            type: type
        });
      
      }
    _onClickRegister() {

        var emailValue = this.state.emailValue
        var userNameValue = this.state.userNameValue
        var passwordValue = this.state.passwordValue

        var self = this

        this.setState({
            showSpinner: true
        })
        
        self.state.unsubscribe =  this.state.auth.onAuthStateChanged(function (user) {
           
            if (user && self.state.emailValue != " ") {

                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;

                user.updateProfile({

                    displayName: self.state.userNameValue,
                    photoURL: "https://firebasestorage.googleapis.com/v0/b/chottky.appspot.com/o/Icons%2Fdefualt_profile.jpg?alt=media&token=7bf53860-d1ad-4723-9137-3ebe80850a0a"

                }).then(function() {

                    console.log("image url is " + photoURL)
                    var database = self.props.firebase.database().ref('Users/' + uid).set({

                        Email: email,
                        UserId: uid,
                        UserName: self.state.userNameValue,
                        isFacebookVerified: false,
                        numberOfRaters: 0,
                        overallRating: 0,
                        city: "Nablus",
                        photoURL: "https://firebasestorage.googleapis.com/v0/b/chottky.appspot.com/o/Icons%2Fdefualt_profile.jpg?alt=media&token=7bf53860-d1ad-4723-9137-3ebe80850a0a"
                
                    }).then(function(error) {
                        
                        //     var storageRef = self.props.firebase.storage().ref().child("Profile_Pictures").child(uid).child("Profile.jpg").put(imageFile).then(function(error){

                        //         if (error == null)
                        //         {
                        //             console.log("yess")
                        //             self.setState({
    
                        //                 showSpinner: false
                        //            })
                        //          }
                                 
                        //          else
                        //          {
                        //             console.log(error.errorMessage)
                        //              self.setState({
    
                        //                 showSpinner: false
                        //            })
                        //          }
    
                        // })
                        // .catch(err => console.error(err));  

                        if (error == null)
                        {
                            self.setState({

                                showSpinner: false
                           })
    
                           self.props.onDismissAboutUs()
                           window.location.reload()
                        }

                        else
                        {
                            console.log(error.errorMessage)
                            self.setState({
                                showSpinner: false,
                                showErrorText: error.errorMessage,
                                showErrorToast: true
                        })
                    }

                    })

                },   function(error) {
                         // An error happened.
                         if (error != null)
                         {
                            console.log(error.errorMessage)
                            self.setState({
                                                showSpinner: false,
                                                showErrorText: error.errorMessage,
                                                showErrorToast: true
                                        })
                         }
                    }

                );

            } else {

            }
        });

        this.state.auth.createUserWithEmailAndPassword(emailValue, passwordValue).catch(function (error) {
            // Handle Errors here.

            if (error != null) {

                self.state.unsubscribe()
                var errorCode = error.code;
                var errorMessage = error.message;
                self.setState({

                    showSpinner: false,
                    showErrorText: errorMessage,
                    showErrorToast: true

                })
            }

            else {

                // no errore auth changed handler called
                self.state.unsubscribe()
            }
            // ...
        });
    }


    render() {

        const { showSpinner } = this.state.showSpinner

        return (

            <div className="aboutUsModal">

                <Modal
                    accessibilityCloseLabel="close"
                    accessibilityModalLabel="View random images"
                    onDismiss={this.props.onDismissAboutUs}
                    heading={"التسجيل"}
                    size="md"
                >

                    <Box paddingY={6} paddingX={6}>

                        <Box paddingX={6}>
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
                                <Label htmlFor="emailLabel">
                                    <Text size="lg" align="right">البريد الالكتروني</Text>
                                </Label>
                            </Box>
                            <TextField
                                id="emailField"
                                onChange={this.handleEmailChange}
                                placeholder=""
                                value={this.state.emailValue}
                                type="email"
                            />
                        </Box>

                        <Box marginTop={4}>
                            <Box marginBottom={2}>
                                <Label htmlFor="passwordLabel">
                                    <Text size="lg" align="right">كلمة المرور</Text>
                                </Label>
                            </Box>
                            <TextField
                                id="passwordField"
                                onChange={this.handlePasswordChange}
                                placeholder=""
                                value={this.state.passwordValue}
                                type="password"
                            />
                        </Box>

                        <Box marginTop={4}>
                            <Box marginBottom={2}>
                                <Label htmlFor="userNameLabel">
                                    <Text size="lg" align="right">اسم المستخدم</Text>
                                </Label>
                            </Box>
                            <TextField

                                id="userNameField"
                                onChange={this.handleUserNameChange}
                                placeholder=""
                                value={this.state.userNameValue}
                                type="text"
                            />
                        </Box>

                        <Box marginTop={10} paddingX={12} size="md">
                            <Box paddingX={12}>

                                {!this.state.showSpinner && (

                                    <Button color="blue" text="التسجيل" type="submit" onClick={this.onClickRegister} />
                                )}

                                {this.state.showSpinner && (
                                    <Spinner show={this.state.showSpinner} accessibilityLabel="loading spinner" />)}
                            </Box>

                        </Box>

                        <Box marginTop={4}>
                            {this.state.showErrorText && (

                                <Label htmlFor="userNameLabel">
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

export default SignUpContent;