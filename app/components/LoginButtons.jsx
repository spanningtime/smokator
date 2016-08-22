import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const LoginButtons = React.createClass({

  render() {

    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: '70vh'
    }

    const styleButton = {
      display: 'flex',
      width: '100px',
      marginBottom: '10px'
    };

    return <div style={flexContainer}>
      <Link to="/login" style={{textDecoration: 'none'}}>
        <RaisedButton label="Login" primary={true} style={styleButton} />
      </Link>
      <Link to="/register" style={{textDecoration: 'none'}}>
        <RaisedButton label="Register" primary={true} style={styleButton} />
      </Link>
    </div>
  }
});

export default LoginButtons;
