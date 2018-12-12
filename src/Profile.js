
import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner, Tabs, IconButton, TextField, Container, Icon} from './gestalt';
import "./App.css";
import testImage from './items_images/IMG_0098.jpg'
import { Slide } from 'react-slideshow-image';
import testAvatar from './images/face_1.jpg'
import { width } from 'window-size';
import image from './images/about-us-image.jpg'
import profileImage from './images/face_1.jpg';
import starImage from "./images/star_full.png"
import StackGrid, { transitions } from "react-stack-grid";
import emptyImage from './images/star-empty.png'
import MobileStoreButton from 'react-mobile-store-button'
import Rating from 'react-rating';
import GridItem from './GridItem';
import ItemContent from './ItemContent'
import SmallGridItem from './SmallGridItem'
import Dropzone from 'react-dropzone'
import { HashRouter, Route, Switch, HashRouter as Router, NavLink } from 'react-router-dom';
import { isAndroid, isIOS, BrowserView, MobileView, isMobile, isBrowser, isTablet, isSmartTV } from 'react-device-detect';
import './Profile.css'
import { func } from 'prop-types';

const { scaleUp, scaleDown } = transitions;
var firebase = require('firebase')

class Profile extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

            activeIndex: 0,
            selectedIndex: 0,
            sellingItemsReady: false,
            soldItemsReady: false,
            favouritesItemsReady: false,
            soldArray: [],
            sellingArray: [],
            favouriteArray: [],
            finalArray: [],
            isImageClicked: false,
            clickedImageId: 0,
            isDownloadModalOpen: false,
            sellingItemsContent: [],
            userDataRady: false,
            soldItemsContent: [],
            favouriteItemsContent: [],
            userCity: "",
            userSettingsClicked: false,
            numberOfRaters: 0.0,
            userRating: 0.0,
            changeEmailValue: "",
            changeEmailClicked: "",
            changeUserName: "",
            showConfirmationMessage: false,
            confirmationLabel: "",
            accepted: [],
            rejected: [],
            uploadingError: false,
            errorString: "",
            uploading: false    
        };

        this.handleChange = this._handleChange.bind(this);
        this.renderLargeGrid = this.renderLargeGrid.bind(this);
        this.getItems = this.getItems.bind(this);
        this.getSoldItems = this.getSoldItems.bind(this)
        this.getFavouriteItems = this.getFavouriteItems.bind(this)
        this.getItems = this.getItems.bind(this);
        this.onTabChanged = this.onTabChanged.bind(this)
        this.onDismissImage = this.onDismissImage.bind(this)
        this.onClickDownloadFromItem = this.onClickDownloadFromItem.bind(this)
        this.onDismiss = this.onDismiss.bind(this)
        this.getUserData = this.getUserData.bind(this)
        this.renderDownloadModal = this.renderDownloadModal.bind(this)
        this.getItemsContent = this.getItemsContent.bind(this)
        this.renderItemClicked = this.renderItemClicked.bind(this)
        this.renderUserSettings = this.renderUserSettings.bind(this)
        this.userSettingsClicked = this.userSettingsClicked.bind(this)
        this.onClickChangeEmail = this.onClickChangeEmail.bind(this)
        this.onClickChangePassowrd = this.onClickChangePassowrd.bind(this)
        this.onClickChangeUserName = this.onClickChangeUserName.bind(this)
        this.onClickChangePicture = this.onClickChangePicture.bind(this)
        this.renderTabs = this.renderTabs.bind(this)
        this.renderChangeEmail = this.renderChangeEmail.bind(this)
        this.renderChangeUserName = this.renderChangeUserName.bind(this)
        this.renderChangePassword = this.renderChangePassword.bind(this)
        this.renderChangePicture = this.renderChangePicture.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeUserName = this.handleChangeUserName.bind(this)
        this.processImages = this.processImages.bind(this)
        this.getItems()
        this.getSoldItems()
        this.getFavouriteItems()
        this.getUserData()
    }

    _handleChange({ activeTabIndex, event }) {

        const gridStyle = {
            marginTop: "50px"
        }

        event.preventDefault();
        this.setState({
            activeIndex: activeTabIndex
        });
    }

    processImages(accepted)
    {  

        this.setState({uploading:true})
        var image = accepted[0]
        var self = this
        var user = firebase.auth().currentUser
        var uid = user.uid
        firebase.storage().ref().child("Profile_Pictures").child(uid).child("Profile.jpg").put(image).then(snapshot => 
        {
            return snapshot.ref.getDownloadURL();
        }).then(downloadURL => {
            
            user.updateProfile({

                photoURL: downloadURL

            }).then(function(){

                self.setState({
                uploading: false})

            }).catch(function(error){

                if(error != null)
                {
                  self.setState({
    
                        showConfirmationMessage: true,
                        confirmationLabel: error.message
                    })
                }
            }) 
         }).catch(function(error){

            if(error != null)
            {
              self.setState({

                    showConfirmationMessage: true,
                    confirmationLabel: error.message
                })
            }       
        })

    }

    userSettingsClicked() {

        this.setState({
            userSettingsCliked: !this.state.userSettingsClicked
        })

    }

    renderUserSettings() {
        const downloadLabelStyle = {

            color: 'black',
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "right"

        };

        return (
            <div className="downloadModal">
                <Modal

                    onDismiss={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked })}
                    footer={

                        <Box
                            display="flex"
                            flex="grow"
                            alignItems="stretch"
                            justifyContent="end"
                            paddingY={3}
                        >

                            <Box padding={0}
                                marginRight={5}
                                marginLeft={3}
                            >

                                <Box padding={0}
                                >
                                    <Button
                                        size="md"
                                        text="اغلاق"
                                        onClick={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked })}
                                    />
                                </Box>
                            </Box>

                        </Box>
                    }

                    role="alertdialog"
                    size="sm"
                >
                    <Box paddingX={0} paddingY={1} >

                        {/* <Box
                            display="flex"
                            flex="grow"
                            alignItems="stretch"
                            justifyContent="end"
                            paddingY={3}
                        >

                            <Box padding={0}
                                marginRight={5}
                                marginLeft={3}
                            >

                                <Box padding={0}
                                >
                                    <Label>
                                        <Text bold={true} size="xl">اعدادات الحساب</Text>

                                    </Label>
                                </Box>
                            </Box>

                        </Box> */}


                        <Box marginBottom={2}>

                            <NavLink to="/profile">
                                <Button onClick={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked, showConfirmationMessage: false, confirmationLabel: "" })} text="الصفحة الشخصية" /></NavLink>
                        </Box>
                        <Box marginBottom={2}>
                            <NavLink to="/profile/email">
                                <Button onClick={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked, showConfirmationMessage: false, confirmationLabel: "" })} text="تغيير البريد الالكتروني" /></NavLink>
                        </Box>
                        <Box marginBottom={2}>
                            <NavLink to="/profile/username">
                                <Button onClick={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked, showConfirmationMessage: false, confirmationLabel: "" })} text="تغيير اسم المستخدم" /></NavLink>
                        </Box>

                        <Box marginBottom={2}>
                            <NavLink to="/profile/password">
                                <Button onClick={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked, showConfirmationMessage: false, confirmationLabel: "" })} text="تغيير كلمة السر" /></NavLink>
                        </Box>

                        <Box marginBottom = {2}>
                            <NavLink to="/profile/picture">
                                <Button onClick={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked, showConfirmationMessage: false, confirmationLabel: "" })} text="تغيير الصورة الشخصية" /></NavLink>
                        </Box>

                    </Box>
                </Modal>
            </div>
        )
    }

    onClickChangeEmail() {

        var user = firebase.auth().currentUser
        var newEmail = this.state.changeEmailValue
        var self = this

        user.updateEmail(newEmail).then(function () {

            firebase.database().ref().child("Users").child(user.uid).child("UserName").set(newEmail).then(function () {

                self.setState({

                    showConfirmationMessage: true,
                    confirmationLabel: "تم تغيير البريد الالكتروني بنجاح"

                })

            }).catch(function (error) {

                self.setState({

                    showConfirmationMessage: true,
                    confirmationLabel: error.message
                })

            });

        }).catch(function (error) {

            self.setState({

                showConfirmationMessage: true,
                confirmationLabel: error.message,
                changeEmailValue: " "
                
            })

        });
    }

    onClickChangePassowrd() {

        var currentEmail = firebase.auth().currentUser.email
        var auth = firebase.auth();
        var self = this

        auth.sendPasswordResetEmail(currentEmail).then(function() {
            self.setState({

                showConfirmationMessage: true,
                confirmationLabel: "تم ارسال رسالة لبريدك الالكتروني لتغيير كلمة السر"
            })

          }).catch(function(error) {
            self.setState({

                showConfirmationMessage: true,
                confirmationLabel: error.message
            })
          });
    }

    onClickChangeUserName() {

        var user = firebase.auth().currentUser
        var newUserName = this.state.changeUserName
        var self = this

        user.updateProfile({
            displayName: newUserName
        }).then(function () {

            firebase.database().ref().child("Users").child(user.uid).child("UserName").set(newUserName).then(function () {


                self.setState({

                    showConfirmationMessage: true,
                    confirmationLabel: "تم تغيير اسم المستخدم بنجاح",
                    changeUserName: " "


                })

            }).catch(function (error) {


                self.setState({

                    showConfirmationMessage: true,
                    confirmationLabel: error.message
                })
            });

        }).catch(function (error) {
            // An error happened.
            self.setState({
                showConfirmationMessage: true,
                confirmationLabel: error.message
            })
        });
    }

    onClickChangePicture() {


    }

    onClickDownloadFromItem() {

        this.onDismissImage()
        this.onDismiss()
    }

    onDismiss = () => {

        this.setState({
            isDownloadModalOpen: !this.state.isDownloadModalOpen
        });
    }

    renderItemClicked() {

        if (this.state.activeIndex == 0) {
            return (
                <ItemContent onClickDownload={this.onClickDownloadFromItem} distanceUnit={"km"} distance={"200"} itemId={this.state.sellingArray[this.state.clickedImageId]} item={this.state.sellingItemsContent[this.state.clickedImageId]} onDismissImage={this.onDismissImage} />)
        }

        else if (this.state.sellingItemsReady == 1) {
            return (
                <ItemContent onClickDownload={this.onClickDownloadFromItem} distanceUnit={"km"} distance={"200"} itemId={this.state.soldArray[this.state.clickedImageId]} item={this.state.soldItemsContent[this.state.clickedImageId]} onDismissImage={this.onDismissImage} />)
        }

        else {
            return (
                <ItemContent onClickDownload={this.onClickDownloadFromItem} distanceUnit={"km"} distance={"200"} itemId={this.state.favouriteArray[this.state.clickedImageId]} item={this.state.favouriteItemsContent[this.state.clickedImageId]} onDismissImage={this.onDismissImage} />)
        }
        
    }

    getUserData() {
        var userId = firebase.auth().currentUser.uid
        var self = this
        firebase.database().ref('/Users/' + userId).once('value').then(function (snapshot) {

            var numberOfRaters = snapshot.val().numberOfRaters
            var overallRating = snapshot.val().overallRating

            var city = snapshot.val().city

            self.setState(
                {
                    numberOfRaters: numberOfRaters,
                    overallRating: overallRating,
                    city: city,
                    userDataReady: true
                }
            )
        })

    }

    renderLargeGrid() {

        var items = []
        var itemsContent = []

        if (this.state.activeIndex == 0) {
            items = this.state.sellingArray
            itemsContent = this.state.sellingItemsContent
        }

        else if (this.state.activeIndex == 1) {
            items = this.state.soldArray
            itemsContent = this.state.soldItemsContent
        }

        else {

            items = this.state.favouriteArray
            itemsContent = this.state.favouriteItemsContent
        }

        const gridStyle = {
            marginTop: "50px"
        }

        if (isBrowser || isSmartTV) {

            var gridItems = []

            for (var i = 0; i < items.length; i++) {

                const itemId = i
                gridItems.push(<GridItem price={itemsContent[i].price} itemId={i} imageId={items[i]} onDismissImage={() => this.onDismissImage(itemId)} />)
            }

            return (

                <div>

                    <StackGrid
                        gutterHeight={20}
                        gutterWidth={20}
                        appear={scaleUp.appear}
                        appeared={scaleUp.appeared}
                        enter={scaleUp.enter}
                        entered={scaleUp.entered}
                        style={
                            gridStyle
                        }
                        columnWidth={230}
                    >
                        {
                            gridItems
                        }
                    </StackGrid>

                </div>

            )

        }

        else {

            var gridItems = []
            for (var i = 0; i < items.length; i++) {

                const itemId = i
                gridItems.push(<SmallGridItem price={itemsContent[i].price} onDismissImage={() => this.onDismissImage(itemId)} price={" "} imageId={items[i]} itemId={i} />)

            }

            return (

                <div>

                    <StackGrid
                        appear={scaleDown.appear}
                        appeared={scaleDown.appeared}
                        enter={scaleDown.enter}
                        entered={scaleDown.entered}
                        leaved={scaleDown.leaved}
                        gutterWidth={15}
                        gutterHeight={15}
                        style={

                            gridStyle
                        }
                        columnWidth={175}
                    >
                        {
                            gridItems
                        }

                    </StackGrid>
                </div>

            )
        }
    }

    getItemsContent(keys, listId) {

        var databaseRef = firebase.database()
        var counter = 0
        var self = this
        var itms = []

        console.log("debugging")
        console.log(keys)

        for (var i = 0; i < keys.length; i++) {

            firebase.database().ref('/items/' + keys[i]).once('value').then(function (snapshot) {

                var price = snapshot.val().price

                if (price != "غير محدد") {
                    price = snapshot.val().price + snapshot.val().currency
                }

                var description = snapshot.val().description
                var displayName = snapshot.val().displayName
                var itemUserId = snapshot.val().userId
                var title = snapshot.val().title
                var imagesCount = snapshot.val().imagesCount


                itms.push({

                    price: price,
                    description: description,
                    displayName: displayName,
                    itemUserId: itemUserId,
                    title: title,
                    imagesCount: imagesCount
                })


                if (counter == keys.length - 1) {


                    if (listId == 0) {

                        self.setState({

                            sellingItemsContent: itms,
                            sellingItemsReady: true

                        });

                    }

                    else if (listId == 1) {
                        self.setState({

                            soldItemsContent: itms

                        });

                    }

                    else {
                        self.setState({

                            favouriteItemsContent: itms

                        });

                    }

                }

                counter = counter + 1

            });
        }

    }

    getItems() {

        var userId = firebase.auth().currentUser.uid
        var firebaseRef = firebase.database().ref().child("Users").child(userId).child("items")
        var self = this

        firebaseRef.once('value').then(function (snapshot) {

            snapshot.forEach(function (childSnapshot) {

                var childKey = childSnapshot.key;
                self.state.sellingArray.push(childKey)

            });

            self.getItemsContent(self.state.sellingArray, 0)

        })
    }

    onDismissImage(imageId) {

        this.setState({

            isImageClicked: !this.state.isImageClicked,
            clickedImageId: imageId

        });
    }

    onTabChanged({ activeTabIndex, event }) {

        event.preventDefault();
        if (this.state.activeIndex == 0) {
            this.setState({
                activeIndex: activeTabIndex,
                sellingItemsReady: true,
                soldItemsReady: false,
                favouritesItemsReady: false
            })
        }

        else if (this.state.activeIndex == 1) {
            this.setState({
                activeIndex: activeTabIndex,
                sellingItemsReady: false,
                soldItemsReady: true,
                favouritesItemsReady: false

            })
        }

        else if (this.state.activeIndex == 2) {
            this.setState({
                activeIndex: activeTabIndex,
                sellingItemsReady: false,
                soldItemsReady: false,
                favouritesItemsReady: true

            })
        }
    }

    getFavouriteItems() {

        var self = this
        var userId = firebase.auth().currentUser.uid
        var firebaseRef = firebase.database().ref().child("Users").child(userId).child("favourites")

        firebaseRef.once('value').then(function (snapshot) {

            snapshot.forEach(function (childSnapshot) {

                var childKey = childSnapshot.key;
                self.state.favouriteArray.push(childKey)

            });

            self.getItemsContent(self.state.favouriteArray, 2)

        })
    }

    getSoldItems() {

        var userId = firebase.auth().currentUser.uid
        var firebaseRef = firebase.database().ref().child("Users").child(userId).child("sold_items")
        var self = this

        firebaseRef.once('value').then(function (snapshot) {

            snapshot.forEach(function (childSnapshot) {

                var childKey = childSnapshot.key;
                self.state.soldArray.push(childKey)

            });

            self.getItemsContent(self.state.soldArray, 1)

        })
    }

    renderDownloadModal() {

        const downloadLabelStyle = {

            color: 'black',
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "right"

        };

        return (

            <div className="downloadModal">
                <Modal
                    onDismiss={this.onDismiss}
                    footer={

                        <Box
                                display="flex"
                                flex="grow"
                                alignItems="stretch"
                                justifyContent="center"
                            paddingY={3}

                        >
                            <Box padding={0}
                            >
                                <MobileStoreButton
                                    store="ios"
                                    url={"www.google.com"}
                                />

                            </Box>

                            <Box padding={0}
                                marginRight={5}
                                marginLeft={3}
                            >
                                <MobileStoreButton
                                    store="android"
                                    url={"www.google.com"}
                                />

                                <Box padding={0}
                                >
                                    <Button
                                        size="md"
                                        text="اغلاق"
                                        onClick={this.onDismiss}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    }

                    role="alertdialog"
                    size="sm"
                >
                    <Box paddingX={6} paddingY={1} >
                        <div style={downloadLabelStyle}>
                            جايلك يمكنك من بيع و شراء المنتجات بكل سهولة وبتجربة ممتعة حمل تطبيق جايلك الآن
               </div>
                    </Box>
                </Modal>
            </div>
        )
    }

    renderTabs() {

        return (
            <div>

                <Box display="flex"
                    flex="grow"
                    justifyContent="center"
                    alignItems="stretch"
                    alignSelf="center"
                >

                    <Tabs
                        tabs={[

                            {
                                text: "للبيع",

                            },

                            {
                                text: "تم بيعهم",

                            },

                            {
                                text: "المفضلة",

                            }
                        ]}

                        activeTabIndex={this.state.activeIndex}
                        onChange={this.onTabChanged}
                    />

                </Box>

                <div>

                    {
                        this.state.soldItemsReady && (
                            this.renderLargeGrid())
                    }

                    {
                        this.state.favouritesItemsReady && (
                            this.renderLargeGrid())
                    }

                    {
                        this.state.sellingItemsReady && (

                            this.renderLargeGrid())
                    }
                </div>
            </div>)
    }

    handleChangeEmail({ value }) {

        this.setState({ changeEmailValue: value });
    }

    handleChangeUserName({ value }) {

        this.setState({ changeUserName: value });

    }

    renderChangeUserName() {

        return (

            <Box paddingX={12} marginTop={4}>
                <Box paddingX={12}>
                    <Box marginBottom={2}>
                        <Label htmlFor="email">
                            <Text size="lg" align="right">اسم المستخدم الجديد</Text>
                        </Label>
                    </Box>

                    <TextField
                        id="username"
                        onChange={this.handleChangeUserName}
                        placeholder=""
                        value={this.state.changeUserName}
                        type="text"
                    />

                    <Box maxWidth="150px" width="100%" justifyContent="center" display="flex" marginTop={8}>
                        <Button onClick={this.onClickChangeUserName} color="blue" text="موافق" />
                    </Box>

                    <Box marginTop={4}>
                        {this.state.showConfirmationMessage && (
                            <Label htmlFor="confirmationLabel">
                                <Text color="black" size="xl" align="center">{this.state.confirmationLabel}</Text>
                            </Label>
                        )}
                    </Box>


                </Box>
            </Box>)

    }

    renderChangeEmail() {

        return (

            <Box paddingX={12} marginTop={4}>
                <Box paddingX={12}>
                    <Box marginBottom={2}>
                        <Label htmlFor="email">
                            <Text size="lg" align="right">البريد الالكتروني الجديد</Text>
                        </Label>
                    </Box>

                    <TextField
                        id="email"
                        onChange={this.handleChangeEmail}
                        placeholder=""
                        value={this.state.changeEmailValue}
                        type="email"
                    />


                    <Box maxWidth="100px" width="100%" justifyContent="center" display="flex" marginTop={8}>
                        <Button size="sm" onClick={this.onClickChangeEmail} color="blue" text="موافق" />
                    </Box>

                    <Box marginTop={4}>
                        {this.state.showConfirmationMessage && (
                            <Label htmlFor="confirmationLabel">
                                <Text color="black" size="xl" align="center">{this.state.confirmationLabel}</Text>
                            </Label>
                        )}

                    </Box>

                </Box>
            </Box>)

    }

    renderChangePassword() {

        return (
            <Container>
                <Box paddingX={12} marginTop={4}>
                <Box paddingX={12} marginTop={4}>

                    <Box paddingX={12}>
                        <Box width="100%" justifyContent="center" display="flex" marginTop={8}>
                            <Button  size="sm" onClick = {this.onClickChangePassowrd} color="gray" text="غير كلمة السر" />
                        </Box>
                    </Box>
                    </Box>

                       <Box marginTop={4}>
                        {this.state.showConfirmationMessage && (
                            <Label htmlFor="confirmationLabel">
                                <Text color="black" size="xl" align="center">{this.state.confirmationLabel}</Text>
                            </Label>
                        )}
                    </Box>
                </Box>
            </Container>
        )
    }

    renderChangePicture() {
        return(

        <Container>
                <Box paddingX={12} marginTop={4}>
                            <Box>
                                <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "16pt" }}>غير صورتك الشخصية؟</p>
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

                                        else if (accepted.length > 1) {
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
                                        <p style={{ textAlign: "center", fontWeight: "", fontSize: "10pt", marginTop: "-10px" }}>الحد الاقصى لعدد الصور هو 1 وحجم الصورة اقل من 5 ميجا بايت</p>

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
                                

                </Box>
            </Container>)
    }

    render() {

        var profileImageStyle = {

            width: "110px",
            height: "110px",
            borderRadius: "10px"

        }
        
        const { isDownloadModalOpen, isImageClicked, userSettingsClicked } = this.state;

        var userNameLabelStyle = {

            fontSize: "19pt",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            marginRight: "92px",
            display: "block",
            marginBottom: "10px",
            marginTop: "10px"
        }

        var ratingLableStyle = {

            fontSize: "8pt",
            fontFamily: "Helvetica",
            marginRight: "92px",

        }

        var ratingStyle = {
            marginRight: "92px",
            display: "inline"
        }

        var cityLabelStyle = {

            marginRight: "92px",
            display: "block",
            fontWeight: "bold",
            fontSize: "12pt",
            marginTop: "5px"
        }

        return (

            <Router>
                <div style={{ paddingTop: "110px" }}>

                    <Box display="flex"
                        flex="grow"
                        justifyContent="end"
                        alignItems="stretch"
                        alignSelf="end" marginBottom={2} paddingX={2} mdPaddingX={6} lgPaddingX={6} smPaddingX={2}
                    >

                        <IconButton
                            accessibilityLabel="userSettings"
                            bgColor="white"
                            onClick={() => this.setState({ userSettingsClicked: !this.state.userSettingsClicked })}
                            icon="ellipsis"
                            iconColor="darkGray"
                            size="lg"
                        />

                    </Box>

                    <Box display="flex"
                        flex="grow"
                        justifyContent="end"
                        alignItems="stretch"
                        alignSelf="end" marginBottom={12} paddingX={6} mdPaddingX={12} lgPaddingX={12} smPaddingX={6}>

                        {this.state.userDataReady && (
                            <box display="flex"
                                flex="grow"
                                justifyContent="start"
                                alignItems="stretch">
                                <label style={userNameLabelStyle}>{firebase.auth().currentUser.displayName}</label>
                            
                                <Rating
                                    emptySymbol={<img src={starImage} className="icon" />}
                                    fullSymbol={<img src={starImage} className="icon" />}
                                    placeholderRating={0}
                                    readonly />

                                <label style={ratingStyle}>({this.state.numberOfRaters})</label>
                                <label style={cityLabelStyle}>{this.state.userCity}</label>
                            </box>
                        )}

                        <img style={profileImageStyle} src={firebase.auth().currentUser.photoURL}></img>

                    </Box>

                    {isImageClicked && (

                        this.renderItemClicked()
                    )}

                    {isDownloadModalOpen && (

                        this.renderDownloadModal())
                    }

                    {
                        userSettingsClicked && (
                            this.renderUserSettings()
                        )
                    }

                    <Route exact path="/profile" component={this.renderTabs} />
                    <Route exact path="/profile/username" component={this.renderChangeUserName} />
                    <Route exact path="/profile/email" component={this.renderChangeEmail} />
                    <Route exact path="/profile/password" component={this.renderChangePassword} />
                    <Route exact path="/profile/picture" component={this.renderChangePicture} />


                </div>
            </Router>
        )
    }
}

export default Profile 
