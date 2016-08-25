import React from 'react';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Menu = React.createClass({

  render() {

    const styleDrawer = {
      backgroundColor: '#fff7ec'
    };

    const styleDrawerCigContainer = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    };

    const styleDrawerCig = {
      width: '70%',
      marginTop: '-30px',
      marginBottom: '-30px',
      padding: '0',
    };

    const styleMenuItem = {
      textDecoration: 'none',
      textAlign: 'center'
    };

    const styleMenuAbout = {
      textAlign: 'center',
      textDecoration: 'none'
    };

    const styleMenuLogin = {
      textAlign: 'center',
      textDecoration: 'none'
    };

    if (!cookie.load('loggedIn')) {
      styleMenuItem.display = 'none';
      styleMenuLogin.display = 'block';
    }
    else {
      styleMenuLogin.display = 'none';
    }

    return <Drawer
      docked={false}
      width={200}
      openSecondary={true}
      open={this.props.open}
      onRequestChange={(open) => this.props.requestChange(open)}
      containerStyle={styleDrawer}
    >
      <MenuItem>
        <div style={styleDrawerCigContainer}>
          <img style={styleDrawerCig} src={'./images/cigarette.svg'} />
        </div>
      </MenuItem>

      <Link
        to="about"
        style={{textDecoration: 'none'}}
        >
        <MenuItem
          onTouchTap={this.props.handleClose}
          style={styleMenuAbout}
          >About
        </MenuItem>
      </Link>

      <Link to="/home" style={{textDecoration: 'none'}}>
        <MenuItem
          onTouchTap={this.props.handleClose}
          style={styleMenuItem}
          >New Bar
        </MenuItem>
      </Link>

      <Link
        to={`/profile/${cookie.load('userId')}`}
        style={{textDecoration: 'none'}}
        >
        <MenuItem
          onTouchTap={this.props.handleClose}
          style={styleMenuItem}
          >Profile
        </MenuItem>
      </Link>

      <MenuItem
        onTouchTap={this.props.logout}
        style={styleMenuItem}
        >Log Out
      </MenuItem>

      <Link
        to={'/'}
        style={{textDecoration: 'none'}}
      >
        <MenuItem
          onTouchTap={this.props.handleClose}
          style={styleMenuLogin}
          >Log In
        </MenuItem>
      </Link>

    </Drawer>

  }
});

export default Menu;
