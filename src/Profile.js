
import React from 'react'
import { Box, Column, Divider, Modal, Button, Text, Masonry, Heading, Avatar, Label, Spinner, Tabs } from './gestalt';
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
import Rating from 'react-rating';
import GridItem from './GridItem';
import SmallGridItem from './SmallGridItem'
import { isAndroid, isIOS, BrowserView, MobileView, isMobile, isBrowser, isTablet, isSmartTV } from 'react-device-detect';


const { scaleUp, scaleDown } = transitions;


class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            soldArray: [],
            sellingArray: [],
            favouriteArray: [],
            finalArray: []
        };

        this.handleChange = this._handleChange.bind(this);
        this.renderLargeGrid = this.renderLargeGrid.bind(this);
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


    renderLargeGrid() {

        const gridStyle = {
            marginTop: "50px"
        }

        if (isBrowser || isSmartTV) {

            var gridItems = []

            for (var i = 0; i < 100; i++) {
                const itemId = i

                gridItems.push(<GridItem price={"200"} itemId={i} imageId={"https://rukminim1.flixcart.com/image/832/832/gamingconsole/f/q/q/playstation-4-ps4-pro-1-sony-na-original-imaer7uyef5xpc48.jpeg?q=70"} />)

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

            for (var i = 0; i < 100; i++) {
                const itemId = i
                gridItems.push(<SmallGridItem price={"200"} itemId={i} imageId={"https://rukminim1.flixcart.com/image/832/832/gamingconsole/f/q/q/playstation-4-ps4-pro-1-sony-na-original-imaer7uyef5xpc48.jpeg?q=70"} />)

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

    render() {
        var profileImageStyle = {


            width: "110px",
            height: "110px",
            borderRadius: "10px"

        }

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

            <div>
                <Box display="flex"
                    flex="grow"
                    justifyContent="end"
                    alignItems="stretch"
                    alignSelf="end" paddingY={12} paddingX={6} mdPaddingX={12} lgPaddingX={12} smPaddingX={6}>

                    <box display="flex"
                        flex="grow"
                        justifyContent="start"
                        alignItems="stretch">
                        <label style={userNameLabelStyle}>Radi Barq</label>

                        <Rating
                            emptySymbol={<img src={starImage} className="icon" />}
                            fullSymbol={<img src={starImage} className="icon" />}
                            initialRating={2.3}
                            readonly />
                        <label style={ratingStyle}>(5)</label>

                        <label style={cityLabelStyle}>ramallah</label>


                    </box>


                    <img style={profileImageStyle} src={profileImage}></img>

                </Box>


                <Box display="flex"
                    flex="grow"
                    justifyContent="end"
                    alignItems="stretch"
                    alignSelf="end" paddingX={6} mdPaddingX={12} lgPaddingX={12} smPaddingX={6}>

                </Box>

                <Box display="flex"
                    flex="grow"
                    justifyContent="center"
                    alignItems="stretch"
                    alignSelf="center"
                >

                    <Tabs
                        tabs={[
                            {
                                text: "تم بيعهم",
                                href: "#"
                            },
                            {
                                text: "للبيع",
                                href: "#"
                            },
                            {
                                text: "التقييمات",
                                href: "#"
                            }
                        ]}
                        activeTabIndex={this.state.activeIndex}
                        onChange={this.handleChange}
                    />

                </Box>

                <Box display="flex"
                    flex="grow"
                    justifyContent="center"
                    alignItems="stretch"
                    alignSelf="center"
                >
                    {
                        this.renderLargeGrid()
                    }

                </Box>

            </div>

        )
    }

}

export default Profile 