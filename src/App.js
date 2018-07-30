import React, { Component } from 'react';
import { Box, Column, Divider, Modal, Button, Text, Masonry, Spinner } from './gestalt';
import Navigation from './Navigation';
import './App.css';
import Heading from './Heading.js';
import './Heading.css'
import { slide as Menu } from 'react-burger-menu'
import MobileStoreButton from 'react-mobile-store-button'
import instagramLogo from './images/instagram-logo.svg';
import facebookLogo from './images/facebook-logo.svg';
import twitterLogo from './images/twitter-logo.svg';
import { isAndroid, isIOS, BrowserView, MobileView, isMobile, isBrowser, isTablet, isSmartTV } from 'react-device-detect';
import ItemComponent from './GridItem';
import StackGrid, { transitions } from "react-stack-grid";
import GridItem from './GridItem';
import ItemContent from './ItemContent'
import SmallGridItem from './SmallGridItem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUsContent from './AboutUsContent';
import Geofire from 'geofire';
import GeoLocation from './GeoLocation'
import { geolocated } from 'react-geolocated';

type Props = {|
  children?: React.Node,
|};

const { scaleUp, scaleDown } = transitions;
var firebase = require("firebase");
//var GeoFire = require('geofire');

class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {

      isDownloadModalOpen: false,
      isSideMenuOpen: false,
      gridItemsChanged: true,
      isImageClicked: false,
      clickedImageId: 0,
      aboutUsClicked: false,
      itemsKey: [],
      distances: [],
      areItemsReady: false,
      items: [],
      distUnits: [],
      isLocationAvailable: true,
      currentRadius: 0.2,
      carCategoryArray: [],
      phoneCategoryArray: [],
      apartmentCategoryArray: [],
      homeCategoryArrry: [],
      dogCategoryArray: [],
      sportCategroyArray: [],
      clothesCategoryArray: [],
      kidsCategoryArray: [],
      booksCategoryArray: [],
      otherCategoryArray: [],
      itemsCurrentSize: 0,
      maxRadius: 15,
      lat: 0,
      long: 0,
      enableBottomScrolling: false,
      currentItems: [],
      finalArray: [],
      bottomLoader: false,
      clickedCategory: 0

    };

    var config = {

      apiKey: "AIzaSyAB128CfHuYPGkJdsWbJMMBr52b2__GQDg",
      authDomain: "chottky.firebaseapp.com",
      databaseURL: "https://chottky.firebaseio.com",
      projectId: "chottky",
      storageBucket: "chottky.appspot.com",
      messagingSenderId: "90082227758"

    };

    firebase.initializeApp(config)
    this.onDismiss = this.onDismiss.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.isMenuOpen = this.isMenuOpen.bind(this);
    this.onClickSocial = this.onClickSocial.bind(this);
    this.onTouchHeader = this.onTouchHeader.bind(this);
    this.onDismissImage = this.onDismissImage.bind(this);
    this.onDismissAboutUs = this.onDismissAboutUs.bind(this);
    this.getItems = this.getItems.bind(this);
    this.itemsReady = this.itemsReady.bind(this);
    this.renderLargeGrid = this.renderLargeGrid.bind(this);
    this.onClickDownloadFromItem = this.onClickDownloadFromItem.bind(this)
    this.setLocationEnabled = this.setLocationEnabled.bind(this)
    this.setLocationDisabled = this.setLocationDisabled.bind(this)
    this.handleScroll = this.handleScroll.bind(this);
    this.onClickCategory = this.onClickCategory.bind(this);

  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {

    window.removeEventListener("scroll", this.handleScroll);
  }

  itemsReady(keys, dist, distUnits, lat, long) {

    var databaseRef = firebase.database()
    var counter = 0
    var self = this
    var itms = []


    if (keys.length == 0)
    {
      self.setState({

        items: self.state.items.concat(itms),
        finalArray: self.state.finalArray.concat(keys),
        areItemsReady: true,
        bottomLoader: false,
        distances: dist,
        distUnits: distUnits,
        itemsCurrentSize: keys.length + self.state.finalArray.length,
        lat: lat,
        long: long,
        enableBottomScrolling: true

      });
    }


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

          self.setState({

            items: self.state.items.concat(itms),
            finalArray: self.state.finalArray.concat(keys),
            areItemsReady: true,
            bottomLoader: false,
            distances: dist,
            distUnits: distUnits,
            itemsCurrentSize: keys.length + self.state.finalArray.length,
            lat: lat,
            long: long,
            enableBottomScrolling: true

          });
        }
        
        counter = counter + 1

      });
    }
  }


  onClickSearchItem()
  {

    console.log("search item clicked")


  }

  getItems(lat, long) {

    var firebaseRef = firebase.database().ref()
    var categoryHash = {10:"category-others" , 9:"category-sports", 8:"category-books", 7:"category-kids" ,6:"category-clothes" , 5:"category-dog", 4:"cateogry-home", 3:"category-aparment", 2:"phone-category", 1:"category-car"}
    console.log(this.state.clickedCategory)
    console.log(this.state.items)

    if (this.state.clickedCategory == 0)
    {
       firebaseRef = firebaseRef.child("items-location")
    }

    else
    {
      firebaseRef = firebaseRef.child("categories-location").child(categoryHash[this.state.clickedCategory])
    }

    var geoFire = new Geofire(firebaseRef)
    var itmKey = []
    var dist = []
    var distUnits = []
    var self = this

    var geoQuery = geoFire.query({

      center: [lat, long],
      radius: this.state.currentRadius

    })

    var onKeyEnteredRegistration = geoQuery.on("key_entered", function (key, location, distance) {

      if (distance < 1) {

        distance = (distance.toFixed(1) * 100).toString()
        self.state.distUnits.push("متر")

      }

      else {

        distance = distance.toFixed(2).toString()
        self.state.distUnits.push("كلم")

      }

      self.state.itemsKey.push(key)
      self.state.distances.push(distance)
      dist.push(distance)

    });

    var onReadyRegistration = geoQuery.on("ready", function () {

      if (self.state.currentRadius > self.state.maxRadius) {

        var uncommonArray = self.state.itemsKey.filter(function (obj) { return self.state.finalArray.indexOf(obj) == -1; });
        self.itemsReady(uncommonArray, self.state.distances, self.state.distUnits, lat, long)

      }

      else if (self.state.itemsKey.length - self.state.itemsCurrentSize < 10) {

        self.setState({

          distUnits: [],
          distances: [],
          itemsKey: [],
          currentRadius: self.state.currentRadius + 0.5

        } ,  () => {

          self.getItems(self.state.lat, self.state.long)
      });

      }

      else {

        var uncommonArray = self.state.itemsKey.filter(function (obj) { return self.state.finalArray.indexOf(obj) == -1; });
        self.itemsReady(uncommonArray, self.state.distances, self.state.distUnits, lat, long)

      }
    });
  }

  onDismissAboutUs() {

    this.setState({
      aboutUsClicked: !this.state.aboutUsClicked
    })

  }

  onDismiss = () => {

    this.setState({
      isDownloadModalOpen: !this.state.isDownloadModalOpen
    });

  }

  onClickSideMenuItem(itemId) {

    if (itemId == 0) {
      toast("يمكنك التواصل معنا حاليا عبر وسائل التواصل الاجتماعي المتوافرة في اعلى القائمة", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )
    }

    else if (itemId == 1) {

      this.onDismissMenu()
      this.setState({
        aboutUsClicked: true
      })
    }

    else if (itemId == 2) {
      this.onDismissMenu()
      toast("!عذرا لا تتوفر وظائف شاغرة حاليا     ", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )
    }

    else if (itemId == 3) {

      this.onDismissMenu()
      toast("!عذرا لا تتوفر سياسة الخصوصية حاليا     ", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )
    }

    else {

      this.onDismissMenu()
      toast("!عذرا شروط الاستخدام غير متوفرة حاليا      ", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )
    }
  }

  onClickDownloadFromItem() {

    this.onDismissImage()
    this.onDismiss()

  }

  onDismissImage(imageId) {

    this.setState({

      isImageClicked: !this.state.isImageClicked,
      clickedImageId: imageId

    });
  }

  onTouchHeader(event) {
    event.stopPropagation()
  }

  onClickSocial = (socialNetwork) => {

    if (socialNetwork == "facebook") {
      if (isAndroid) {

        window.open("fb://page/158716608106681")
      }

      else if (isIOS) {
        window.open("fb://profile/158716608106681")
      }

      else {
        window.open("https://www.facebook.com/Gayelak/")
      }
    }

    else if (socialNetwork == "twitter") {

      // window.open("twitter://user?username=Gayelak")
      window.open("https://www.twitter.com/Gayelak/")

    }

    else if (socialNetwork == "instagram") {
      // window.open("twitter://user?username=Gayelak")
      window.open("https://www.instagram.com/gayelak/")
    }
  }


  onClickMenu = () => {

    this.setState({
      isSideMenuOpen: true,
      gridItemsChanged: false
    });
  }

  isMenuOpen = function (state) {
    this.setState({
      
      isSideMenuOpen: state.isOpen,
      gridItemsChanged: false

    });
  };

  renderHeader() {
    return (
      <Column span={12} mdSpan={2}>
        <div className="fixed" onTouchMove={e => this.onTouchHeader(e)}>
          <Heading onDismiss={this.onDismiss} onClickMenu={this.onClickMenu} />
        </div>
        <Navigation onClickCategory = {this.onClickCategory}/>
      </Column>
    )
  }

  handleStateChange(state) {

    this.setState({ isSideMenuOpen: state.isOpen })

  }

  onDismissMenu = () => {

    this.setState({
      isSideMenuOpen: false
    });
  }

  renderLargeGrid() {

    const gridStyle = {
      marginTop: "50px"
    }

    if (isBrowser || isSmartTV) {

      var gridItems = []
      for (var i = 0; i < this.state.finalArray.length; i++) {

        const itemId = i
        gridItems.push(<GridItem price={this.state.items[i].price} itemId={i} imageId={this.state.finalArray[i]} onDismissImage={() => this.onDismissImage(itemId)} />)

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

          <Box marginTop={2} marginBottom={2}>
            <Spinner show={this.state.bottomLoader} accessibilityLabel="Loading Spinner" />
          </Box>
        </div>

      )
    }

    else {

      var gridItems = []
      for (var i = 0; i < this.state.finalArray.length; i++) {

        const itemId = i
        gridItems.push(<SmallGridItem price={this.state.items[i].price} itemId={i} imageId={this.state.finalArray[i]} onDismissImage={() => this.onDismissImage(itemId)} />)
      }

      return (<div>

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

        <Box marginTop={2}>
          <Spinner show={this.state.bottomLoader} accessibilityLabel="Loading Spinner" />
        </Box>

      </div>
      )
    }
  }

  renderSideMenu() {

    const socialMediaLogosStyle = {
      width: "20px",
      padding: "10px"
    };

    const menuItemsLabelStyle = {
      marginTop: "20px",
      fontSize: "12pt",
      textAlign: "right",
      fontWeight: "bold"
    };

    return (

      <Menu
        isOpen={this.state.isSideMenuOpen}
        right
        width={'280px'}
        customBurgerIcon={false}
        onStateChange={(state) => this.handleStateChange(state)}
      >

        <Box display="block" marginTop={-7} marginLeft={-4}>
          <img onClick style={socialMediaLogosStyle}
            src={instagramLogo} onClick={() => this.onClickSocial("instagram")}
          />
          <img style={socialMediaLogosStyle}
            src={twitterLogo} onClick={() => this.onClickSocial("twitter")}
          />

          <img onClick={() => this.onClickSocial("facebook")} style={socialMediaLogosStyle}
            src={facebookLogo}
          />
        </Box>

        <Box paddingY={0} paddingX={0} display="flex" flex="grow" marginTop={4} marginLeft={-2}
        >
          <label className="brandLabel">GAYELAK</label>
        </Box>

        <Box position="absolute" paddingY={0} marginTop={-2} marginRight={6} right={true} direction="column" display="flex" >

          <label onClick={() => this.onClickSideMenuItem(0)} style={menuItemsLabelStyle}>
            تواصل معنا
                 </label>
          <label onClick={() => this.onClickSideMenuItem(1)} style={menuItemsLabelStyle}>
            عن جايلك</label>
          <label onClick={() => this.onClickSideMenuItem(2)} style={menuItemsLabelStyle}>
            وظائف</label>
          <label onClick={() => this.onClickSideMenuItem(3)} style={menuItemsLabelStyle}>
            سياسة الخصوصية</label>
          <label onClick={() => this.onClickSideMenuItem(4)} style={menuItemsLabelStyle}>
            شروط الاستخدام</label>

        </Box>
      </Menu>
    )
  }

  onClickCategory(key)
  {

    window.scrollTo(0, 0)   
    console.log(key)

    this.setState({

      clickedCategory: key,
      currentRadius: 0.2,
      distUnits: [],
      distances: [],
      itemsKey: [],
      areItemsReady: false,
      finalArray: [],
      items: [],
      currentItems: [],
      itemsCurrentSize: 0,
      bottomLoader: false,
      enableBottomScrolling: false

    },  () => {

      this.getItems(this.state.lat, this.state.long)
  });

}

  setLocationEnabled() {
    this.setState(
      {
        isLocationAvailable: true
      }
    )
  }

  setLocationDisabled() {
    this.setState(
      {
        isLocationAvailable: false
      }
    )
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

  handleScroll() {

    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight && this.state.enableBottomScrolling) {

      if (this.state.currentRadius < this.state.maxRadius) {

        this.setState({

          enableBottomScrolling: false,
          currentRadius: this.state.currentRadius + 0.5,
          distUnits: [],
          distances: [],
          itemsKey: [],
          bottomLoader: true

        },  () => {

        this.getItems(this.state.lat, this.state.long)

    });

      } else {

      }
    }

    else {

      // not the bottom
    }
  }

  render() {

    const { children } = this.props;
    const { isDownloadModalOpen } = this.state;
    const { isMenuOpen } = this.state;

    const downloadLabelStyle = {
      color: 'black',
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "right"
    };

    const sideMenuDonwloadLabelStyle = {

      fontWeight: "bold",
      color: "black",
      fontSize: "16pt",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "right"

    };

    return (

      <Box minHeight="100vh" onScroll={this.handleScroll}>

        <Box marginTop={0} mdDisplay="flex" direction="row"
        >
          <ToastContainer hideProgressBar={true} />
          {this.state.isSideMenuOpen && (
            this.renderSideMenu()
          )}

          <GeoLocation setLocationDisabled={this.setLocationDisabled} setLocationEnabled={this.setLocationEnabled} getItems={this.getItems} />

          {this.state.isImageClicked && (

            <ItemContent onClickDownload={this.onClickDownloadFromItem} distanceUnit={this.state.distUnits[this.state.clickedImageId]} distance={this.state.distances[this.state.clickedImageId]} itemId={this.state.finalArray[this.state.clickedImageId]} item={this.state.items[this.state.clickedImageId]} onDismissImage={this.onDismissImage} />

          )}

          {this.state.aboutUsClicked &&

            (<AboutUsContent onDismissAboutUs={this.onDismissAboutUs} />)
          }

          {isDownloadModalOpen && (

            this.renderDownloadModal()
          )

          }
          {
            this.renderHeader()
          }

          <div className="content"   >
            {
              this.state.areItemsReady && (
                this.renderLargeGrid()
              )}
              
            <Box marginTop={12}>

              <Spinner show={!this.state.areItemsReady} accessibilityLabel="Loading Spinner" />
              {!this.state.isLocationAvailable && (
                <h3 style={{ marginLeft: "30%", marginRight: "30%", textAlign: "center" }}> !الرجاء تفعيل خدمة المواقع في المتصفح</h3>
              )}

            </Box>
          </div>

        </Box>
      </Box>
    );
  }

}
export default App

