import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const LoginForm = React.createClass({
  getInitialState() {
    return {
      errors: {},
      credentials: {
        email: '',
        password: ''
      }
    }
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextCredentials = Object.assign({}, this.state.credentials, {
      [name]: value
    });

    this.setState({ credentials: nextCredentials });
  },

  handleTouchTap() {
    this.props.login(this.state.credentials);
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

    const styleLabel = {
      borderColor: '#ff7f66'
    };

    const { credentials } = this.state;

    return <div style={styleContainer}>

      <TextField
        placeholder="Email"
        name="email"
        onChange={this.handleChange}
        style={styleTextField}
        underlineFocusStyle={styleLabel}
        type="email"
        value={credentials.email}
      />

      <TextField
        placeholder="Password"
        name="password"
        onChange={this.handleChange}
        underlineFocusStyle={styleLabel}
        type="password"
        value={credentials.password}
      />

      <RaisedButton
        primary={true}
        label="Login"
        onTouchTap={this.handleTouchTap}
        style={styleButton}
      />

    </div>
  }
})

export default LoginForm;
