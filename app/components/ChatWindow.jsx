import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const ChatWindow = React.createClass({

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
      border: '2px solid black',
      overflow: 'none',
      position: 'relative',
      height: '55vh'
    }

    const styleBummer = {
      overflow: 'auto',
      position: 'absolute',
      bottom: '0',
      maxHeight: '55vh'
    }

    const styleGiver = {
      overflow: 'auto',
      position: 'absolute',
      bottom: '0',
      maxHeight: '55'
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
      margin: '0 auto'
    }



    return <div style={flexContainer}>
      <div>
        <div style={styleDiv}>
          <h1 style={styleTitle}>Blaine</h1>
        </div>

        <div style={styleChatFrame}>

          <div style={styleBummer}>
            <p>Hey are you still here?</p>
          </div>

          <div style={styleGiver}>
            <p>Yeah</p>
          </div>

        </div>

        <div style={styleChatInput}>
          <TextField
            name="message"
            multiLine={true}
            rows={1}
            style={styleChatInput.underlineStyle}
          />
          <div style={styleButton}>
            <RaisedButton
            label="Send"
            primary={true}
            />
          </div>
        </div>

      </div>
    </div>
  }
});

export default ChatWindow;
