import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Profile = React.createClass({

  render() {

    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignContent: 'center',
      alignItems: 'center',
      height: '70vh'
    }

    const styleButton = {
      display: 'flex',
      width: '100px',
      marginTop: '20px',
      margin: '0 auto'
    };

    const styleAvatar = {
      maxHeight: '40px',
      display: 'inline'
    };

    const styleTitle = {
      textAlign: 'center',
      fontFamily: 'Mallanna',
      fontSize: '25px',
      fontWeight: '200',
      marginTop: '0px',
      marginBottom: '0px',
      marginRight: '10px',
      position: 'inline'
    };

    const styleDiv = {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '2px solid #ff7f66'
    };

    const styleBio = {
      textAlign: 'center',
      paddingLeft: '30px',
      paddingRight: '30px',
      marginLeft: '30px',
      marginRight: '30px',
      marginTop: '30px',
      marginBottom: '20px',
      fontFamily: 'Mallanna',
    };

    return <div style={flexContainer}>
      <div>
        <div style={styleDiv}>
          <h1 style={styleTitle}>Blaine</h1>
          <img src="images/burger.svg" style={styleAvatar}/>
        </div>
        <p style={styleBio}>I used to do drugs. I still do but I used to too. Gimme money at: www.venmo.com</p>
          <RaisedButton label="Chat" primary={true} style={styleButton} />
      </div>
    </div>
  }
});

export default Profile;
