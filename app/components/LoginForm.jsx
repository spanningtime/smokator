import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const LoginForm = React.createClass({
  getInitialState() {
    return {
      errors: {},
      credentials: {
        email: '',
        password: ''
      }
    };
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
      document.getElementById('footer').style.display = 'none';
    }
  },

  handleBlur() {
    if (document.activeElement.nodeName === 'BODY') {
      document.getElementById('footer').style.display = 'inline-block';
    }
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
    };

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
        name="email"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="Email"
        style={styleTextField}
        type="email"
        underlineFocusStyle={styleLabel}
        value={credentials.email}
      />

      <TextField
        name="password"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="Password"
        type="password"
        underlineFocusStyle={styleLabel}
        value={credentials.password}
      />

      <RaisedButton
        label="Login"
        onTouchTap={this.handleTouchTap}
        primary={true}
        style={styleButton}
      />

    </div>;
  }
});

export default LoginForm;
