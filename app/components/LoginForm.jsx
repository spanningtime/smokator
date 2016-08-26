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

  handleFocus(event) {
    if (event.target.tagName === 'INPUT') {
      document.getElementById('footer').style.display = "none";
    };
  },

  handleBlur() {
    if (document.activeElement.nodeName === 'BODY') {
      document.getElementById('footer').style.display = "inline-block";
    };
  },

  render() {
    const styleContainer = {
      // height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '80px'
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
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={styleTextField}
        underlineFocusStyle={styleLabel}
        type="email"
        value={credentials.email}
      />

      <TextField
        placeholder="Password"
        name="password"
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
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
