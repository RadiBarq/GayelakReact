import React from 'react'
import { Box, Column, Text, Icon as GestaltLink, SearchField, IconButton, Label, Modal, Button, Devider, Avatar} from './gestalt';
import { slide as Menu } from 'react-burger-menu'
import MobileStoreButton from 'react-mobile-store-button'
import instagramLogo from './images/instagram-logo.svg';
import facebookLogo from './images/facebook-logo.svg';
import twitterLogo from './images/twitter-logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import AboutUsContent from './AboutUsContent';
import { isAndroid, isIOS, BrowserView, MobileView, isMobile, isBrowser, isTablet, isSmartTV } from 'react-device-detect';
import LoginContent from './LoginContent';
import { HashRouter, Route, Switch, HashRouter as Router, NavLink} from 'react-router-dom';
import Profile from './Profile'
import SignUpContent from './SignUpContent';
import UploadFileModal from './UploadFileModal'
import Logo from './images/gayelak-svg.svg'
import Notifications from './Notifications'
import AboutUs from './AboutUs'
import GeoLocation from './GeoLocation'
import App from './App'
import './Heading.css'

var config = {

    apiKey: "AIzaSyAB128CfHuYPGkJdsWbJMMBr52b2__GQDg",
    authDomain: "chottky.firebaseapp.com",
    databaseURL: "https://chottky.firebaseio.com",
    projectId: "chottky",
    storageBucket: "chottky.appspot.com",
    messagingSenderId: "90082227758"
  };

  
var firebase = require("firebase");

class Heading extends React.Component {

    constructor(props) {

          super(props);
          this.state = {searchValue: '',
          photoURL: null,
          userSignedIn: false,
          isSideMenuOpen: false,
          loginClicked: false,
          aboutUsClicked: false,
          signUpClicked: false,
          isDownloadModalOpen: false,
          currentNavigationItem: 0,
          searchButtonClicked: false,
          uploadFileClicked: false,
          userId: "",
          userName: "",
          searchClicked: false
        }

        this.onClickMenu = this.onClickMenu.bind(this);
        this.isMenuOpen = this.isMenuOpen.bind(this);
        this.onDismissMenu = this.onDismissMenu.bind(this);
        this.renderSideMenu = this.renderSideMenu.bind(this);
        this.onClickSideMenuItem = this.onClickSideMenuItem.bind(this);
        this.onClickSocial = this.onClickSocial.bind(this)
        this.renderLoggedInSideMenu = this.renderLoggedInSideMenu.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.onDismissLogin = this.onDismissLogin.bind(this)
        this.onDismissSignUp = this.onDismissSignUp.bind(this)
        this.onDismissAboutUs = this.onDismissAboutUs.bind(this)
        this.renderDownloadModal = this.renderDownloadModal.bind(this)
        this.navigationClicked = this.navigationClicked.bind(this)
        this.onSearchClicked = this.onSearchClicked.bind(this)
        this.onDismissUploadFile = this.onDismissUploadFile.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this)
      
        this.onDismiss = this.onDismiss.bind(this)
        var self = this
        this.keyPress = this.keyPress.bind(this);
        firebase.initializeApp(config);
        var unsubscribe = firebase.auth().onAuthStateChanged(function (user) {

            if(user)
            {
                  console.log("user signed in")
                  console.log(user.displayName)
                  console.log(user.photoURL)
                  self.setState({
                    userSignedIn: true,
                    photoURL: user.photoURL,
                    userId: user.uid,
                    userName: user.displayName
                  })
            }

            else
            {
              self.setState({
                userSignedIn: false
              })
            }
        })  
    }

    onDismiss = () => {

        this.setState({
          isDownloadModalOpen: !this.state.isDownloadModalOpen
        });

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

    onClickMenu(){

        console.log("hi every body")
        this.setState({
          isSideMenuOpen: true,
          gridItemsChanged: false
        }); 

      }

      onDismiss = () => {

        this.setState({
          isDownloadModalOpen: !this.state.isDownloadModalOpen
        });
    
      }

    onDismissUploadFile()
    {

      this.setState({
        uploadFileClicked: !this.state.uploadFileClicked
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

      isMenuOpen = function (state) {
        this.setState({
          isSideMenuOpen: state.isOpen,
          gridItemsChanged: false
        });
      };

      handleStateChange(state) {

        this.setState({isSideMenuOpen: state.isOpen })  

      }

    onSearchClicked(string)
      {
          // var searchKeys = string.toLowerCase().split(" ")
          this.child.onClickSearch(string) 

      }
      onDismissLogin()
        {
            this.setState({
                loginClicked: !this.state.loginClicked
              })
        }

        onDismissAboutUs() {

            this.setState({
              aboutUsClicked: !this.state.aboutUsClicked
            })
          }

          onDismissSignUp()
          {
            this.setState({
              signUpClicked: !this.state.signUpClicked
            })
          }

    onDismissMenu = () => {

        this.setState({
          isSideMenuOpen: false
        });
      }

      renderLoggedInSideMenu()

        {
          
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

    const userNameLabelStyle = {

      marginLeft: "10px",
      marginTop: "10px",
      fontSize: "16pt",
      textAlign: "left",
      fontWeight: "bold"
    }

    return (
    
      <div className = "fixed">
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
          <img style = {{widht: '80px', height: '80px' }} className="profileLogo" onClick ={this.onClickProfile}
                                 src={this.state.photoURL}/>
            <label onClick = {this.onClickProfile} style = {userNameLabelStyle}>{this.state.userName}</label>
        </Box>

        <Box position="absolute" paddingY={0} marginTop={-2} marginRight={6} right={true} direction="column" display="flex" >

          <label onClick = {this.onDismissMenu} style = {menuItemsLabelStyle}> <NavLink to = "/">تصفح</NavLink>
          </label>


          <label onClick={() => this.onClickSideMenuItem(1)} style={menuItemsLabelStyle}>
              بيع منتجاتك</label>

          <label onClick = {() => this.onClickSideMenuItem(2)} style = {menuItemsLabelStyle}>
             <NavLink to = "/notifications">الاشعارات</NavLink>
            </label>
          <label onClick={() => this.onClickSideMenuItem(3)} style={menuItemsLabelStyle}>
          الرسائل</label>
          <label  onClick={this.onDismissMenu} style={menuItemsLabelStyle}>
          <NavLink to = "/profile">الصفحة الشخصية</NavLink>
          </label>
          <label onClick={() => this.onClickSideMenuItem(5)} style={menuItemsLabelStyle}>
            تواصل معنا
                 </label>
          <label onClick={() => this.onClickSideMenuItem(6)} style={menuItemsLabelStyle}>
          <NavLink to = "/aboutus"> عن جايلك</NavLink></label>
          <label onClick={() => this.onClickSideMenuItem(7)} style={menuItemsLabelStyle}>
            وظائف</label>
          <label onClick={() => this.onClickSideMenuItem(8)} style={menuItemsLabelStyle}>
            سياسة الخصوصية</label>
          <label onClick={() => this.onClickSideMenuItem(9)} style={menuItemsLabelStyle}>
            شروط الاستخدام</label>
            <label onClick={() => this.onClickSideMenuItem(10)} style={menuItemsLabelStyle}>تسجيل الخروج</label>

        </Box>
      </Menu>
      </div>
    )

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
          <div className = "fixed">
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

              <label onClick = {() => this.onClickSideMenuItem(0)} style = {menuItemsLabelStyle}>تسجيل الدخول</label>
              <label onClick = {() => this.onClickSideMenuItem(1)} style = {menuItemsLabelStyle}>التسجيل</label>
              <label onClick={() => this.onClickSideMenuItem(2)} style={menuItemsLabelStyle}>
                تواصل معنا
                     </label>
              <label onClick={() => this.onClickSideMenuItem(3)} style={menuItemsLabelStyle}>
                عن جايلك</label>
              <label onClick={() => this.onClickSideMenuItem(4)} style={menuItemsLabelStyle}>
                وظائف</label>
              <label onClick={() => this.onClickSideMenuItem(5)} style={menuItemsLabelStyle}>
                سياسة الخصوصية</label>
              <label onClick={() => this.onClickSideMenuItem(6)} style={menuItemsLabelStyle}>
                شروط الاستخدام</label>
    
            </Box>
          </Menu>
          </div>
        )
      }


      onClickSideMenuItem(itemId) {

        if (this.state.userSignedIn == false)
         {
  
        if (itemId == 0) {
  
          this.onDismissMenu()
          this.setState({
            loginClicked: true
          })
       }
  
      else if (itemId == 1) {
  
        this.onDismissMenu()
          this.setState({
            signUpClicked: true
          })
      }
  
       else if (itemId ==2) {
        toast("يمكنك التواصل معنا حاليا عبر وسائل التواصل الاجتماعي المتوافرة في اعلى القائمة", {
          autoClose: 4000,
          bodyClassName: "toastBody",
        },
        )
      }
      else if (itemId == 3) {

        this.onDismissMenu()
        this.setState({
          aboutUsClicked: true
        })
      }
  
      else if (itemId == 4) {
        this.onDismissMenu()
        toast("!عذرا لا تتوفر وظائف شاغرة حاليا     ", {
          autoClose: 4000,
          bodyClassName: "toastBody",
        },
        )
      }
  
      else if (itemId == 5) {
  
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
  
    else{
  
      if (itemId == 0) {
  
       // onclick MainPage
      }


    else if (itemId == 1)
    {
      this.onDismissMenu()
      this.setState({
        uploadFileClicked: true
      })
    }
  
     else if (itemId == 2)
     {


  
     }
  
     else if (itemId == 3)
     {
  
  
     }
  
     else if (itemId == 4){
      
      // here profile clicked
      this.onClickProfile()

     }

    else if (itemId == 5)
     {

      toast("يمكنك التواصل معنا حاليا عبر وسائل التواصل الاجتماعي المتوافرة في اعلى القائمة", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )

     }
  
     else if (itemId == 6)
     {
      this.onDismissMenu()
      this.setState({
        aboutUsClicked: true
      })

     }
  
     else if (itemId == 7)
     {

      this.onDismissMenu()
      toast("!عذرا لا تتوفر وظائف شاغرة حاليا     ", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )

     }
  
     else if (itemId == 8)
     {
  
      this.onDismissMenu()
      toast("!عذرا لا تتوفر سياسة الخصوصية حاليا     ", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )
  
     }
  
     else if (itemId == 9)
     {
      this.onDismissMenu()
      toast("!عذرا شروط الاستخدام غير متوفرة حاليا      ", {
        autoClose: 4000,
        bodyClassName: "toastBody",
      },
      )
     }

     else if (itemId == 10)
     {
        firebase.auth().signOut()
        this.setState({
          isSideMenuOpen: false 
        })
     }

    }
  }

     navigationClicked(){

        return(
        <Switch>
            {this.state.navigationClicked == 0 &&( <Route path="/" render={()=><App showDownloadModal = {this.onDismiss} onRef={ref => (this.child = ref)}/>}/>)}
            {this.state.navigationClicked == 0 &&(<Route path = "/profile" render={() => <h1>Page Not Found</h1>}/>)}  
        </Switch>)
        
     }

    onTouchMove(event) {

        return false
    }

    onTouchHeader(event) {

        event.stopPropagation()
      }

    componentDidMount () {

    }

    keyPress(e){

        if(e.keyCode == 13){
           this.onSearchClicked(this.state.searchValue)
           this.setState({
            searchClicked: true
           })
        }
     }

     handleSearchChange({value})
     {

       this.setState({searchValue: value});
       if (this.state.searchClicked == true && value == "")
       {
         this.child.searchCanceled()
  
       }

     }
     
    render() {

        const brandLogoImage = {

        }

        const { isDownloadModalOpen } = this.state;
        return (

        <Router>

        <div>
        <div className="fixed">
        <div className="header">

         {this.state.isSideMenuOpen && !this.state.userSignedIn && (
            this.renderSideMenu()
          )}

           {this.state.isSideMenuOpen && this.state.userSignedIn && (
            this.renderLoggedInSideMenu()
          )}

           {this.state.aboutUsClicked &&
          
(<AboutUsContent onDismissAboutUs={this.onDismissAboutUs} />)
}



{this.state.uploadFileClicked && (
  <UploadFileModal onDismissUploadFile = {this.onDismissUploadFile} />
)}

{this.state.loginClicked &&

(<LoginContent firebase = {firebase} onDismissAboutUs={this.onDismissLogin} />)
}

{this.state.signUpClicked &&

(<SignUpContent firebase = {firebase} onDismissAboutUs={this.onDismissSignUp} />)
}

 {isDownloadModalOpen && (

        this.renderDownloadModal())

 }

            <Box marginTop={0} color="white" shape="rounded" padding={1} display="flex" direction="row" alignItems="center">

                <Box paddingY={0} >
                    <img style = {brandLogoImage} className="brandLogo" 
                    src={Logo}/>
                </Box>

                <Box flex="grow" paddingX={2} onKeyDown={this.keyPress}>
                    <SearchField
                        accessibilityLabel="ابحث في جايلك"
                        id="searchField"
                        onChange={this.handleSearchChange}
                        value = {this.state.searchValue}
                        
                    />
                </Box>
                <Box paddingX={2}>
                    <Box paddingY={0} paddingX={1}>
                        <label onClick={this.onDismiss} className="downloadButton">
                            حمل التطبيق
                        </label>
                    </Box>
                </Box>
                <Box paddingX={0}>
                {this.state.userSignedIn && (

                      <img style = {{widht: '40px', height: '40px' }} className="profileLogo"  onClick ={this.onClickMenu}
                                 src={this.state.photoURL}/>)}

                    {!this.state.userSignedIn && (

                        <IconButton onClick ={this.onClickMenu} className="moreIcon" accessibilityLabel="Profile" icon="ellipsis" size="md" iconColor="black" />)}

                </Box>
            </Box>

            </div>
            </div>

            <Box> 
              <Route  exact path="/" render={()=><App showDownloadModal = {this.onDismiss} onRef={ref => (this.child = ref)} />}>
              </Route>    
              <Route path = "/profile" component = {Profile}/>
              <Route path = "/notifications" component = {Notifications}/>
              <Route path = "/aboutus"  component = {AboutUs} />

              
              {/* <Route exact path="/profile/username" component={App} />
              <Route exact path="/profile/email" component={App} />
              <Route exact path="/profile/password" component={App} />
              <Route exact path="/profile/picture" component={App} /> */}
            </Box>
        </div>
        </Router>

        )
    }
}

export default Heading