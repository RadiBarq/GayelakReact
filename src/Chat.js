import React from 'react'
import {Launcher} from 'react-chat-window'
import {render} from 'react-dom'


class Chat extends React.Component{


    constructor(props)
    {
        super(props)
        this.state = {
            messageList: [],
            
          };

    }


    openModal() {
      this.setState({
        showModal: true,
      });
    }
  
    closeModal() {
      this.setState({
        showModal: false,
        error: null
      });
    }
    
    onLoginSuccess(method, response) {
      console.log('logged successfully with ' + method);
    }
  
    onLoginFail(method, response) {
      console.log('logging failed with ' + method);
      this.setState({
        error: response
      })
    }
  
    startLoading() {
      this.setState({
        loading: true
      })
    }
  
    finishLoading() {
      this.setState({
        loading: false
      })
    }
  
    afterTabsChange() {
      this.setState({
        error: null
      });
    }


    _onMessageWasSent(message) {
        this.setState({
          messageList: [...this.state.messageList, message]
        })
      }

      _sendMessage(text) {
        if (text.length > 0) {
          this.setState({
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text }
            }]
          })
        }
      }

    render()
    {
        return(
            <div>
             <Launcher
            agentProfile={{
             teamName: 'react-live-chat',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
            }}
            onMessageWasSent={this._onMessageWasSent.bind(this)}
            messageList={this.state.messageList}
            showEmoji
         />
        </div>
        )
    }
}
 
export default Chat