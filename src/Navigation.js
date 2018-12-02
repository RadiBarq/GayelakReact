
import React from 'react';
import { Box, Divider } from './gestalt';
import NavLink from './NavLink';
import routes from './routes';
import './Navigation.css';
import ReactList from 'react-list';
import { isAndroid, isIOS, BrowserView, MobileView, isMobile, isBrowser, isTablet, isSmartTV } from 'react-device-detect';
//import './Header.css';
const components = Object.keys(routes);

class Navigation extends React.Component {

  componentDidMount() {

  }

  constructor(props) {

    super(props)
    this.state = {

      navigationItems: ["جميع المنتجات", "سيارات", "الكترونيات", "شقق و اراضي", "البيت و الحديقة", "حيوانات", "ملابس و اكسسوارات", "الاطفال", "افلام، كتب و اغاني", "الرياضة و الالعاب", "اغراض اخرى"],
      clickedItem: 0

    }

    this.renderItem = this.renderItem.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
    this.scrollSomewhere = this.scrollSomewhere.bind(this);
  }

  scrollSomewhere() {

    this.list.scrollTo(0)

  }

  onClickItem(key) {

    this.setState({
      clickedItem: key
    })

    this.props.onClickCategory(key)
  }

  renderItem(index, key) {

    if (isMobile) {

      var menuItemsSmallLabelStyle = {}

      if (index === this.state.clickedItem) {

        menuItemsSmallLabelStyle = {

          fontSize: "10pt",
          fontWeight: "bold",
          marginRight: "7.5px",
          marginLeft: "7.5px",
          color: "rgb(52, 127, 251)"

        }
      }

      else {
        
        menuItemsSmallLabelStyle = {

          fontSize: "10pt",
          fontWeight: "bold",
          marginRight: "7.5px",
          marginLeft: "7.5px"

        }
      }

      return <label onClick={() => this.onClickItem(key)} style={menuItemsSmallLabelStyle} key={key}>{this.state.navigationItems[index]}</label>

    }

    else {

      var menuItemsLabelStyle = {}

      if (this.state.clickedItem == index) {

        menuItemsLabelStyle = {

          fontSize: "10.5pt",
          fontWeight: "bold",
          marginRight: "19px",
          marginLeft: "19px",
          color: "rgb(52, 127, 251)"
        }

      }

      else {

        menuItemsLabelStyle = {

          fontSize: "10.5pt",
          fontWeight: "bold",
          marginRight: "19px",
          marginLeft: "19px"

        }
      }

      return <label onClick={() => this.onClickItem(key)} style={menuItemsLabelStyle} key={key}>{this.state.navigationItems[index]}</label>;

    }
  }

  renderNavigation() {

    if (isMobile && !isTablet) {
      return (

        <div className="fixedBlockMobile">
          <Box
            display="flex"
            position="absolute"
            width="100%"
            paddingY={0}
            direction="row"
            overflow="auto"
            height={36}
            color="white"
          >
          
            <Box
              display="flex"
              overflow="auto"
              color="white"
              height={36}
              wrap={true}
            >

              <Box role="listitem" flex="none" >

                <ReactList
                  itemRenderer={this.renderItem}
                  type='simple'
                  length={this.state.navigationItems.length}
                  initialIndex = {10}
                  axis = "x"
                />

                <Box marginTop={4} position="absolute" width="100%">
                  <Divider />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider />
        </div>
      )
    }

    else {
      return (
        <div className="fixedBlock">
          <Box
            display="flex"
            position="absolute"
            width="100%"
            paddingY={0}
            direction="row"
            height={37}
            color="white"
            alignContent="center"
            justifyContent="around"
          >
            <Box
              display="flex"
              overflow="auto"
              color="white"
              overflow="auto"
              height={37}
              wrap={true}
            >

              <Box role="listitem" flex="none" >

                <ReactList
                  itemRenderer={this.renderItem}
                  length={this.state.navigationItems.length}
                  type='simple'
                  initialIndex = {10}
                  axis = "x"
                />

                <Box marginTop={4} position="fixed" width="100%" alignSelf="stretch" color="white">
                  <Divider />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider />
        </div>
      )
    }
  }

  render() {

    const menuItemsLabelStyle = {

      marginTop: "8px",
      fontSize: "10pt",
      textAlign: "right",
      fontWeight: "bold",
      marginTop: "25px"

    };

    var settings = {
      speed: 500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    const navigationItems = ["الرياضة و الالعاب", "اغراض اخرى", "افلام، كتب و اغاني", "الاطفال", "ملابس و اكسسوارات", "حيوانات", "البيت و الحديقة", "شقق و اراضي", "الكترونيات", "سيارات"]

    const menuItemsSmallLabelStyle = {
      
      fontSize: "6pt",
      fontWeight: "bold",
      marginRight: "7.5px",
      marginLeft: "7.5px",
    }

    return (

      <div className="navigation">
        <Box
          paddingY={0}
        >
          {
            this.renderNavigation()
          }

        </Box>
      </div>
    );
  }
}


export default Navigation
