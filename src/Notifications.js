
import React from 'react'
import {render} from 'react-dom'
import { Box, Column, Divider, ModalText, Masonry, Heading, Avatar, Label, Spinner, Tabs, IconButton, TextField, Container, Text} from './gestalt';
import { Page, Toolbar, Button, List, ListHeader, ListItem} from 'react-onsenui'
import userProfile from './images/face_1.jpg';
import itemImage from './items_images/IMG_0096.jpg'

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
                        
                        justifyContent="end"
                      
                        alignSelf="end" marginBottom={2} paddingY = {4} paddingX={2} mdPaddingX={6} lgPaddingX={6} smPaddingX={2}
                    >
    
            <List
            dataSource={this.state.data}
            renderHeader={this.renderHeader}
            renderRow={(row, idx) => (
                 <ListItem>

                <Box width = "100%" display="flex"
                        justifyContent="center" mdPaddingX={4} lgPaddingX={8} smPaddingX={6} marginBottom = {6}
                    >

                   <Box   display = "inlineBlock" height = "75px" width = "75px" mdMarginRight  = {10} lgMarginRight  = {12} smMarginRight = {4}  marginRight = {4}>
                    <img style = {{borderRadius: "10px",  width: "100%", 
                            height: "100%"}} src = {userProfile} src = {itemImage} />
                    </Box>

                    <Box paddingY = {4} marginLeft = {4} marginRight = {4} mdMarginRight  = {6} lgMarginRight  = {10} smMarginRight = {4} display= "inlineBlock">
                        <Label htmlFor="switchExample">
                            <Text lgSize = "lg"  smSize = "sm" mdSize = "md" align = "right">تم الاعجاب بمنتجك من قبل علي تسيير</Text>
                        </Label>

                        <Label htmlFor="switchExample">
                            <Text  lgSize = "lg"  smSize = "sm" mdSize = "lg" align = "right">١٢/٦/٢٠١٧</Text>
                        </Label>

                    </Box>

                    <Box    height = "75px" width = "75px"  display= "inlineBlock">
                    <img style = {{borderRadius: "37.5px",  width: "100%", 
                            height: "100%"}} src = {userProfile} />
                    </Box>
               </Box>
                               
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
       <ListHeader style={{fontSize: 30, textAlign: "right", float: "right", marginBottom:"30px", fontWeight: "bold"}} className="testClass"> الاشعارات</ListHeader> )
    }

    renderFooter()
    {


    }


    

}


export default Notifications