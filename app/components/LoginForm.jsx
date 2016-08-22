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

    const styleTextField = {
      marginBottom: '10px'
    }

    const styleButton = {
      width: '100px',
      marginTop: '20px'
    };

    return <div style={styleContainer}>
      <TextField style ={styleTextField} floatingLabelText="Email"></TextField>
      <TextField floatingLabelText="Password"></TextField>
      <RaisedButton primary={true} style={styleButton} label="Login"></RaisedButton>
    </div>
  }
})

export default LoginForm;
