import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import weakKey from 'weak-key';

const ChatWindow = React.createClass({
  getInitialState() {
    return {
      chatMessages: [],
      messageText: ''
    }
  },

  componentWillMount() {
    this.props.socket.on('post message', (data) => {

      const nextChatMessages = this.state.chatMessages.concat(data);

      this.setState({ chatMessages: nextChatMessages });
    });

    this.props.joinChat(this.props.params.chatId);
  },

  componentDidMount() {
    const scroll = document.getElementById('scroll');
    scroll.scrollTop = scroll.scrollHeight;

    axios.get(`/api/chats/${this.props.params.chatId}`)
      .then((res) => {
        this.setState({ chatMessages: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  handleChange(event) {
    this.setState({ messageText: event.target.value });
  },

  sendMessage() {
    const message = {
      chatId: this.props.params.chatId,
      messageText: this.state.messageText,
      userId: cookie.load('userId')
    }

    this.props.socket.emit('chat message', message)

    axios.post(`/api/chats/${this.props.params.chatId}`, message)
      .then((res) => {
        console.log('message saved');
      })
      .catch((err) => {
        console.error('message not saved');
      });

    this.setState({ messageText: '' });
  },

  render() {

    const flexContainer = {
      display: 'relative'
      // flexDirection: 'column',
      // flexWrap: 'wrap',
      // alignContent: 'center',
      // alignItems: 'center',
      // height: '70vh'
    }

    const styleButton = {
      marginLeft: '15px'
      // width: '100px',
      // marginTop: '20px',
      // margin: '0 auto'
    };

    const styleTitle = {
      textAlign: 'center',
      fontFamily: 'Mallanna',
      fontSize: '25px',
      fontWeight: '200',
      marginTop: '0px',
      marginBottom: '0px',
      marginRight: '10px',
      position: 'block',
    };

    const styleChatFrame = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      // border: '2px solid black',
      height: '55vh',
    }

    const styleScroll = {
      overflow: 'scroll',
      height: '50vh'
    }

    const styleBummer = {
      backgroundColor: '#ff7f66',
      padding: '5px',
      borderRadius: '5px',
      marginRight: '5px',
      marginBottom: '10px',
      maxWidth: '200px'
    }

    const styleGiver = {
      backgroundColor: '#e5f3e9',
      padding: '5px',
      marginLeft: '5px',
      marginBottom: '10px',
      maxWidth: '200px'
    }

    const styleDiv = {
      marginTop: '10px',
      borderBottom: '2px solid #ff7f66',

    };


    const styleChatInput = {
      paddingRight: '10px',
      paddingLeft: '10px',
      paddingTop: '10px',
      paddingBottom: '0px',
      display: 'flex',
      overflow: 'scroll',
      height: '10vh',
      margin: '0 auto',
    };

    const styleMessageContainer = {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'flex-end',
      alignItems: 'flex-end'
    };

    const styleOl = {
      paddingLeft: '0px'
    };

    return <div style={flexContainer}>
      <div>
        <div style={styleDiv}>
          <h1 style={styleTitle}>Mitch</h1>
        </div>

        <div style={styleChatFrame}>
          <ol style={styleOl}>
            <div id="scroll" style={styleScroll}>

            {this.state.chatMessages.map((message) => {
              if (message.userId === cookie.load('userId')) {
                return <li key={weakKey(message)} style={styleMessageContainer}>
                  <div style={styleBummer}>
                    <p>{message.messageText}</p>
                  </div>
                </li>
              }

              return <li key={weakKey(message)}>
                <div style={styleGiver}>
                  <p>{message.messageText}</p>
                </div>
              </li>
            })}

            </div>
          </ol>
        </div>


        <div style={styleChatInput}>
          <TextField
            multiLine={true}
            name="message"
            onChange={this.handleChange}
            rows={1}
            style={styleChatInput.underlineStyle}
            value={this.state.messageText}
          />
          <div style={styleButton}>
            <RaisedButton
            label="Send"
            onTouchTap={this.sendMessage}
            primary={true}
            />
          </div>
        </div>

      </div>
    </div>
  }
});

export default ChatWindow;
