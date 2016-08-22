import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const LoginForm = React.createClass({
  getInitialState() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },

  handleChange(event) {
    const nextCredentials = Object.assign({}, this.state.credentials, {
      [event.target.name]: event.target.value
    });

    this.setState({ credentials: nextCredentials });
  },

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

      <TextField
        floatingLabelText="Email"
        name="email"
        onChange={this.handleChange}
        style={styleTextField}
        value={this.state.credentials.email}
      >
      </TextField>

      <TextField
        floatingLabelText="Password"
        name="password"
        onChange={this.handleChange}
        type="password"
        value={this.state.credentials.password}
      >
      </TextField>

      <RaisedButton
        primary={true}
        label="Login"
        style={styleButton}
      />
    </div>
  }
})

export default LoginForm;
