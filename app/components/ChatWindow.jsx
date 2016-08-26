/* eslint-disable sort-imports */
import axios from 'axios';
import cookie from 'react-cookie';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import weakKey from 'weak-key';

/* eslint-enable sort-imports */

const ChatWindow = React.createClass({
  getInitialState() {
    return {
      typing: false,
      chatMessages: [],
      messageText: ''
    };
  },

  /* eslint-disable eqeqeq */
  componentWillMount() {
    this.props.socket.on('post message', (data) => {
      const nextChatMessages = this.state.chatMessages.concat(data);

      this.setState({ chatMessages: nextChatMessages });
      const scroll = document.getElementById('scroll');

      scroll.scrollTop = scroll.scrollHeight;
    });

    this.props.socket.on('typing', (userId) => {
      if (userId != cookie.load('userId')) {
        this.setState({ typing: true });
      }
    });

    this.props.socket.on('end typing', (userId) => {
      if (userId != cookie.load('userId')) {
        this.setState({ typing: false });
      }
    });

    this.props.joinChat(this.props.params.chatId);
  },

  /* eslint-enable eqeqeq */

  /* eslint-disable no-console */
  componentDidMount() {
    axios.get(`/api/chats/${this.props.params.chatId}`)
      .then((res) => {
        this.setState({ chatMessages: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  /* eslint-enable no-console */

  /* eslint-disable no-negated-condition */
  handleChange(event) {
    this.setState({ messageText: event.target.value });
    const socket = this.props.socket;
    const chatId = this.props.params.chatId;

    if (event.target.value !== '') {
      socket.emit('typing', chatId, cookie.load('userId'));
    }
    else {
      socket.emit('end typing', chatId, cookie.load('userId'));
    }
  },

  /* eslint-enable no-negated-condition */

  handleSendMessage() {
    const socket = this.props.socket;
    const chatId = this.props.params.chatId;

    if (this.state.messageText.trim() === '') {
      return;
    }

    const message = {
      chatId: this.props.params.chatId,
      messageText: this.state.messageText,
      userId: cookie.load('userId')
    };

    socket.emit('end typing', chatId, cookie.load('userId'));

    socket.emit('chat message', message);

    axios.post(`/api/chats/${chatId}`, message)
      .then(() => {
        return;
      })
      .catch(() => {
        return;
      });

    this.setState({ messageText: '' });
  },

  /* eslint-disable max-statements */
  render() {
    const flexContainer = {
      display: 'relative'
    };

    const styleButton = {
      marginLeft: '15px'
    };

    const styleTitle = {
      textAlign: 'center',
      fontFamily: 'Mallanna',
      fontSize: '25px',
      fontWeight: '200',
      marginTop: '0px',
      marginBottom: '0px',
      marginRight: '10px',
      position: 'block'
    };

    const styleChatFrame = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '55vh'
    };

    const styleScroll = {
      overflow: 'scroll',
      height: '50vh'
    };

    const styleBummer = {
      backgroundColor: '#ff7f66',
      padding: '5px',
      borderRadius: '5px',
      marginRight: '5px',
      marginBottom: '10px',
      maxWidth: '200px'
    };

    const styleGiver = {
      backgroundColor: '#e5f3e9',
      padding: '5px',
      borderRadius: '5px',
      marginLeft: '5px',
      marginBottom: '10px',
      maxWidth: '200px'
    };

    const styleDiv = {
      marginTop: '10px',
      borderBottom: '2px solid #ff7f66'
    };

    const styleChatInput = {
      paddingRight: '10px',
      paddingLeft: '10px',
      paddingTop: '10px',
      paddingBottom: '0px',
      display: 'flex',
      overflow: 'scroll',
      height: '10vh',
      margin: '0 auto'
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

    const styleTyping = {
      display: 'block',
      fontFamily: 'Mallanna',
      fontSize: '25px',
      color: '#ff7f66',
      marginLeft: '5px'
    };

    if (this.state.typing) {
      styleTyping.display = 'inline';
    }
    else {
      styleTyping.display = 'none';
    }

    let contact;

    const { chatMembers } = this.props;

    if (this.props.user.id === chatMembers.bummerId) {
      contact = chatMembers.giverName;
    }
    else {
      contact = chatMembers.bummerName;
    }

    return <div style={flexContainer}>
      <div>
        <div style={styleDiv}>
          <h1 style={styleTitle}>
            {contact}
            <span style={styleTyping}>is typing</span>
          </h1>
        </div>

        <div style={styleChatFrame}>
          <ol style={styleOl} >
            <div id="scroll" style={styleScroll} >

            {this.state.chatMessages.map((message) => {
              if (message.userId === cookie.load('userId')) {
                return <li key={weakKey(message)} style={styleMessageContainer}>
                  <div style={styleBummer}>
                    <p>{message.messageText}</p>
                  </div>
                </li>;
              }

              return <li key={weakKey(message)} style={{ display: 'flex' }}>
                <div style={styleGiver}>
                  <p>{message.messageText}</p>
                </div>
              </li>;
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
              onTouchTap={this.handleSendMessage}
              primary={true}
            />
          </div>

        </div>

      </div>
    </div>;
  }

  /* eslint-enable max-statements */
});

export default ChatWindow;
