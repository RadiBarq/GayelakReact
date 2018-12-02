
import React, { Component } from 'react';
import { Box, Heading, Image } from './gestalt';
import Markdown from './Markdown';
import headerImage from './images/about-us-image.jpg'


class AboutUs extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ paddingTop: "110px" }}>
                <Box marginRight={6} marginLeft={6}>
                <Box>
                    <h1 style = {{textAlign: "right", marginRight: "20px"}}>عن جايلك</h1>
                </Box>
                    <img style = {{height: "500px", width: "100%", objectFit: "cover"}} src={headerImage}/>
                    <Box right={true}  width="100%" paddingX = {6} >
                        <p style={{ marginRight: "5px", textAlign: "right", fontWeight: "bold", fontSize: "14pt" }}>يهدف جايلك ومنذ انشائة الى التسهيل على الاشخاص بيع اغراضهم المستعملة و الجديدة مع جيرانهم وسكان مدينتهم، وايضا يسهل على الاشخاص الذين يبحثون عن منتجات مستعملة وجديدة بسعر جيد وبمسافة قريبة منهم</p>
                    </Box>

                
                    <Box>




                    </Box>

                    </Box>
            </div>
            
        )

    }
}


export default AboutUs


