
import React from 'react'
import {render} from 'react-dom'
import { Box, Column, Divider, ModalText, Masonry, Heading, Avatar, Label, Spinner, Tabs, IconButton, TextField, Container } from './gestalt';

import { Page, Toolbar, Button, List, ListHeader, ListItem} from 'react-onsenui'

class Notifications extends React.Component {
    
    constructor(props) {
        
        super(props)   
        this.renderHeader = this.renderHeader.bind(this)
        this.renderFooter = this.renderFooter.bind(this)

        this.state = {

            data: ["1", "2", "3", "4", "5", "6", "7", "8"]

        }


    }

    render()
    {   
        return (

            <div style={{ paddingTop: "110px" }}>

                    <Box display="flex"
                        flex="grow"
                        justifyContent="center"
                        alignItems="stretch"
                        alignSelf="center" marginBottom={2} paddingX={2} mdPaddingX={6} lgPaddingX={6} smPaddingX={2}
                    >
            <List
            dataSource={this.state.data}
            renderHeader={this.renderHeader}
           renderRow={(row, idx) => (
                 <ListItem>
                 <div style = {{float:"left"}} className="left">
                 </div>
                 <div style = {{float:"center"}} className="center">Center</div>
                 <div  style = {{float:"right"}} className="right">Right</div>
                 </ListItem>
           )}
         />
         </Box>
         </div>
        )
    }


    renderHeader()
    {
       return(
       <ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> )

    }
    
    renderFooter()
    {



    }

}


export default Notifications