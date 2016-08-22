import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const LoginForm = React.createClass({

  render() {
    const styleContainer = {
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const styleButton = {
      width: '100px',
      marginTop: '60px'
    };

    return <div style={styleContainer}>
      <TextField floatingLabelText="Email"></TextField>
      <TextField floatingLabelText="Password"></TextField>
      <RaisedButton style={styleButton} label="damnit"></RaisedButton>
    </div>
  }
})

export default LoginForm;
