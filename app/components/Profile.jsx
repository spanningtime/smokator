import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Profile = React.createClass({
  handleTouchTap() {
    this.props.createChat(this.props.params.userId);
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

    let user;

    if (this.props.user.id === Number.parseInt(this.props.params.userId)) {
      user = this.props.user;
    }

    else {
      const thisGiverArr = this.props.givers.filter((giver) => {
        return giver.userId === Number.parseInt(this.props.params.userId);
      });
      user = thisGiverArr[0];
    }

    return <div style={flexContainer}>
      <div>
        <div style={styleDiv}>
          <h1 style={styleTitle}>{user.firstName}</h1>
          <h1 style={styleTitle}>{thisGiver.firstName}</h1>

        </div>
        <p style={styleBio}>{user.aboutMe}</p>

        <RaisedButton
          label="Chat"
          onTouchTap={this.handleTouchTap}
          primary={true}
          style={styleButton}
        />
      </div>
    </div>
  }
});

export default Profile;
