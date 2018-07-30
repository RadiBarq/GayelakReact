import React from 'react'
import { Box, Text, Icon, Link as GestaltLink, SearchField, IconButton, Label, Link, Modal, Button, Devider } from './gestalt';
import NavLink from './NavLink';
import Logo from './images/gayelak-svg.svg'
import './Heading.css'

class Heading extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(e){

        if(e.keyCode == 13){
        console.log(this.state.value)
        }
        
     }

    onTouchMove(event) {

        return false
    }

    componentDidMount () {
        
    }

    keyPress(e){
        if(e.keyCode == 13){
          console.log(this.state.value)
           // put the login here
        }
     }

    render() {

        const brandLogoImage = {

        }

        return (<div className="header">
            <Box marginTop={0} color="white" shape="rounded" padding={1} display="flex" direction="row" alignItems="center">
                <Box paddingY={0} >
                    <img style = {brandLogoImage} className="brandLogo" 
                        src={Logo}
                    />
                </Box>

                <Box flex="grow" paddingX={2} onKeyDown={this.keyPress}>
                    <SearchField
                        accessibilityLabel="ابحث في جايلك"
                        id="searchField"
                      
                        onChange={({ value }) => this.setState({ value })}
                        value = {this.state.value}
                    />
                </Box>
                <Box paddingX={2}>
                    <Box paddingY={0} paddingX={1}>
                        <label onClick={ () => this.props.onDismiss()} className="downloadButton">
                            حمل التطبيق
                        </label>
                    </Box>
                </Box>
                <Box paddingX={0}>
                    <IconButton onClick ={() => this.props.onClickMenu()} className="moreIcon" accessibilityLabel="Profile" icon="ellipsis" size="md" iconColor="black" />
                </Box>
            </Box>
        </div>
        )
    }
}

export default Heading