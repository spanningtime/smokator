import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import BottomNavigation from 'material-ui/BottomNavigation';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Paper from 'material-ui/Paper';
import React from 'react';
import { withRouter } from 'react-router';
import LoginButtons from 'components/LoginButtons';
import StatusButtons from 'components/StatusButtons';

const App = React.createClass({
  getInitialState() {
    return {
      isLoggedIn: true,
    }
  },

  render() {

    const styleMenu = {
      iconStyle: {
        width: 48,
        height: 48,
        paddingBottom: 0,
        display: this.state.isLoggedIn ? 'inline-block' : 'none'
      },
      style: {
        width: 64,
        height: 64,
        padding: 0
      }
    };

    const stylePaper = {
      backgroundColor: '#e5f3e9'
    };


    const styleContainer = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'space-around',
      alignItems: 'center',
      marginTop: '0px',
      marginLeft: '10px',
      justifyContent: 'space-between'
    };

    const styleTitle = {
      fontSize: '35px',
      color: '#ff7f66'
    };

    const styleTagline = {
      fontSize: '13px',
      fontWeight: '400',
      marginTop: '0px',
      marginLeft: '0px',
      color: 'black'
    };

    const styleFooter = {
      backgroundColor: '#e5f3e9'
    };

    const styleImage = {
      display: 'inlineBlock',
      width: '30%',
      marginBottom: '-35px',
      marginLeft: '10px',
      marginTop: '-30px'
    };

    return <div >
      <Paper style={stylePaper}
        >
        <div style={styleContainer}>
          <div style={styleTitle}>
            smokator
            <img style={styleImage} src={'./images/cigarette.svg'} />
            <h1 style={styleTagline}>Connecting drunk smokers since 1776</h1>
          </div>
          <IconButton
            iconStyle={styleMenu.iconStyle}
            style={styleMenu.style}
          >
            <NavigationMenu color={'#ff7f66'}/>
          </IconButton>
        </div>
      </Paper>

      {this.props.children}
    </div>
  }
});

export default withRouter(App);
