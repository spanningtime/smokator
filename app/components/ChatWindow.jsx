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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      // border: '2px solid black',
      height: '55vh'
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
      boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
      maxWidth: '200px'
    }

    const styleGiver = {
      backgroundColor: '#e5f3e9',
      padding: '5px',
      borderRadius: '5px',
      marginLeft: '5px',
      marginBottom: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
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



    return <div style={flexContainer}>
      <div>
        <div style={styleDiv}>
          <h1 style={styleTitle}>Blaine</h1>
        </div>

        <div style={styleChatFrame}>
          <ol style={styleOl}>
            <div style={styleScroll}>

              <li style={styleMessageContainer}>
                <div style={styleBummer}>
                  <p>Hey are you still here becauseh yeah wooooooo oh yeah wooo?</p>
                </div>
              </li>

              <li>
                <div style={styleGiver}>
                  <p>Yeah wooo wejlakjf yasdofjsdalkf wioeru kjsfdl jlskdjf</p>
                </div>
              </li>

              <li>
                <div style={styleGiver}>
                  <p>Got Virginia Slims</p>
                </div>
              </li>

              <li style={styleMessageContainer}>
                <div style={styleBummer}>
                  <p>Hey are you still here?</p>
                </div>
              </li>

              <li>
                <div style={styleGiver}>
                  <p>Yeah</p>
                </div>
              </li>

              <li>
                <div style={styleGiver}>
                  <p>Got Virginia Slims</p>
                </div>
              </li>

              <li style={styleMessageContainer}>
                <div style={styleBummer}>
                  <p>Hey are you still here?</p>
                </div>
              </li>

              <li>
                <div style={styleGiver}>
                  <p>Yeah</p>
                </div>
              </li>

              <li>
                <div style={styleGiver}>
                  <p>Got Virginia Slims</p>
                </div>
              </li>
            </div>
          </ol>
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
