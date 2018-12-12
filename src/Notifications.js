
import React from 'react'
import { render } from 'react-dom'
import { Box, Column, Divider, ModalText, Masonry, Heading, Avatar, Label, Spinner, Tabs, IconButton, TextField, Container, Text } from './gestalt';
import { Page, Toolbar, Button, List, ListHeader, ListItem } from 'react-onsenui'
import userProfile from './images/face_1.jpg';
import itemImage from './items_images/IMG_0096.jpg'

var firebase = require("firebase");

class Notifications extends React.Component {

    constructor(props) {

        super(props)
        this.renderHeader = this.renderHeader.bind(this)
        this.getNotifications = this.getNotifications.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.timeConverter = this.timeConverter.bind(this)

        this.state = {

            data: [],
            showSpinner: true,
            itemsReady: true,
            items: [],
            itemsURL: [],
            usersURL: []
        }
        this.getNotifications()
    }

    timeConverter(UNIX_timestamp) {

        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        // var month = months[a.getMonth()];
        var month = a.getMonth()
        var date = a.getDate();
        var day = a.getDay();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = year + "." + month + "." + day
        return time;

    }

    getNotifications() {

        var currentUser = firebase.auth().currentUser
        var userId = currentUser.uid
        var self = this

        // self.setState({
        //     items: [],
        //     showSpinner: true
        // })

        firebase.database().ref().child("Users").child(userId).child("notifications").once('value').then(function (snapshot) {

            var currentItems = []
            var itemsURL = []
            var usersURL = []

            snapshot.forEach(function (childSnapshot) {

                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                currentItems.push(childData);
                // ...
            });


            var itemsCount = currentItems.length

            for (var i = 0; i < currentItems.length; i++) {
                var counter = 0
                var item = currentItems[i]
                var itemId = item.itemId


                console.log(itemId)
                var itemStorageRef = firebase.storage();
                var userId = item.userId
                console.log(userId)
                var itemImageUrl = ""


                itemStorageRef.ref().child("Items_Photos").child(itemId).child("1.jpeg").getDownloadURL().then(function (itemURL) {

                    itemsURL.push(itemURL)

                    var type = currentItems[counter].type

                    if (type == "favourite") {

                        itemStorageRef.ref().child("Profile_Pictures").child(userId).child("Profile.jpg").getDownloadURL().then(function (userURL) {

                             console.log(type)
                            usersURL.push(userURL)
                            counter = counter + 1

                            if (counter == itemsCount) {
                                self.setState({

                                    showSpinner: false,
                                    items: currentItems,
                                    itemsReady: true,
                                    itemsURL: itemsURL,
                                    usersURL: usersURL
                                })

                            }

                        }).catch(function (error) {
                            

                            console.log(type)
                            usersURL.push("https://firebasestorage.googleapis.com/v0/b/chottky.appspot.com/o/Icons%2Fdefualt_profile.jpg?alt=media&token=7bf53860-d1ad-4723-9137-3ebe80850a0a")
                            counter = counter + 1

                            if (counter == itemsCount) {
                                self.setState({

                                    showSpinner: false,
                                    items: currentItems,
                                    itemsReady: true,
                                    itemsURL: itemsURL,
                                    usersURL: usersURL
                                })

                            }

                            console.log(error)
                        });
                    }
        
                }).catch(function (error) {

                    console.log(error.messaage)
                });
            }
        });
    }

    render() {

        return (

            <div style={{ paddingTop: "110px" }}>

                <Box marginTop={2} marginBottom={2}>
                    <Spinner show={this.state.showSpinner} accessibilityLabel="Loading Spinner" />
                </Box>

                <Box display="flex"
                    justifyContent="end"
                    alignSelf="end" marginBottom={2} paddingY={4} paddingX={2} mdPaddingX={6} lgPaddingX={6} smPaddingX={2}
                >
                    <List
                        dataSource={this.state.items}
                        renderHeader={this.renderHeader}
                        renderRow={(row, idx) => this.renderItem(row, idx)}
                    />
                </Box>
            </div>
        )
    }

    renderHeader() {
        return (
            <ListHeader style={{ fontSize: 30, textAlign: "right", float: "right", marginBottom: "30px", fontWeight: "bold" }} className="testClass"> الاشعارات</ListHeader>)
    }

    renderItem(row, idx) {

        var itemId = row.itemId
        var recent = row.recent
        var type = row.type
        var userId = row.userId
        var userName = row.userName
        var timestamp = row.timestamp

         var date = this.timeConverter(timestamp)
         var itemImageURL = this.state.itemsURL[idx]
         var userImageURL = this.state.usersURL[idx]


        var contentText = "الاشعار غير متوفر في الوقت الحالي"
        console.log(date)

        if (type == "favourite") {
            contentText = userName + " " + "تم الاعجاب بمنتجك من قبل"
          
        }

        else if (type == "discarded") {

            userImageURL = "https://firebasestorage.googleapis.com/v0/b/chottky.appspot.com/o/Icons%2Fdiscarded_notification.png?alt=media&token=05151832-3d9d-40d9-ab44-610c34170275"
            contentText = "تم حذف المنتج الخاص بك لعدم مطابقة الصورة للمواصفات، الرجاء اعد المحاولة"

        }

        return (
            <ListItem>

                <Box width="100%" display="flex"
                    justifyContent="center" mdPaddingX={4} lgPaddingX={8} smPaddingX={6} marginBottom={6}
                >
                    <Box display="inlineBlock" height="75px" width="75px" mdMarginRight={10} lgMarginRight={12} smMarginRight={4} marginRight={4}>
                        <img style={{
                            borderRadius: "10px", width: "100%",
                            height: "100%"
                        }} src={itemImageURL} />
                    </Box>

                    <Box maxWidth="200px" paddingY={4} marginLeft={4} marginRight={4} mdMarginRight={6} lgMarginRight={10} smMarginRight={4} display="inlineBlock">
                        <Label htmlFor="switchExample">
                            <Text color="darkGray" lgSize="lg" smSize="sm" mdSize="md" align="right">{contentText}</Text>
                        </Label>

                        <Label htmlFor="switchExample">
                            <Text lgSize="md" smSize="sm" mdSize="md" align="right">{date}</Text>
                        </Label>
                    </Box>
                    <Box height="75px" width="75px" display="inlineBlock">
                        <img style={{
                            borderRadius: "37.5px", width: "100%",
                            height: "100%"
                        }} src={userImageURL} />
                    </Box>
                </Box>

            </ListItem>
        )
    }
}

export default Notifications