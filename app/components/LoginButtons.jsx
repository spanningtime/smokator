import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

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
    };

    const styleButton = {
      display: 'flex',
      width: '100px',
      marginBottom: '30px'
    };

    return <div style={flexContainer}>

      <Link
        style={{ textDecoration: 'none' }}
        to="/login"
      >
        <RaisedButton
          label="Login"
          primary={true} style={styleButton}
        />
      </Link>

      <Link style={{ textDecoration: 'none' }} to="/register">
        <RaisedButton label="Register" primary={true} style={styleButton} />
      </Link>
    </div>;
  }
});

export default LoginButtons;
