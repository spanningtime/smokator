import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Profile = React.createClass({

  handleTouchTap(chatInfo) {
    this.props.createChat(chatInfo);
  },

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

    let profileOwner;

    if (this.props.user.id === Number.parseInt(this.props.params.userId)) {
      styleButton.display = 'none';
      profileOwner = this.props.user;
    }

    else {
      const thisGiverArr = this.props.givers.filter((giver) => {
        return giver.userId === Number.parseInt(this.props.params.userId);
      });
      profileOwner = thisGiverArr[0];

    }

    const chatInfo = {
      bummerId: this.props.user.id,
      bummerName: this.props.user.firstName,
      giverId: profileOwner.userId,
      giverName: profileOwner.firstName,
      phone: profileOwner.phone
    };

    return <div style={flexContainer}>
      <div>
        <div style={styleDiv}>
          <h1 style={styleTitle}>{profileOwner.firstName}</h1>
        </div>
        <p style={styleBio}>{profileOwner.aboutMe}</p>
        <RaisedButton
          label="Chat"
          onTouchTap={() => this.handleTouchTap(chatInfo)}
          primary={true}
          style={styleButton}
        />
      </div>
    </div>
  }
});

export default Profile;
