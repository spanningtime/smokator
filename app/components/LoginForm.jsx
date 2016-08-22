import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const schema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required()
});

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

  // handleKeyPress(event) {
  //   const { name, value } = event.target;
  //
  //   const nextErrors = Object.assign({}, this.state.errors)
  //
  //   const result = Joi.validate({ [name]: value }, schema);
  //   if (result.error) {

  //     for (const detail of result.error.details) {
  //        nextErrors[detail.path] = detail.message;
  //     }
  //
  //     return this.setState({ errors: nextErrors });
  //   }

  //   delete nextErrors[name];
  //
  //   this.setState({ errors: nextErrors });
  // },

  handleTouchTap() {
    const result = Joi.validate(this.state.credentials, schema, {
      abortEarly: false,
      allowUnknown: true
    });

    if (result.error) {
      const nextErrors = {};

      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    this.setState({ errors: {} });

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

    return <div style={styleContainer}>

      <TextField
        errorText={this.state.errors.email}
        floatingLabelText="Email"
        name="email"
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        style={styleTextField}
        value={this.state.credentials.email}
      >
      </TextField>

      <TextField
        errorText={this.state.errors.password}
        floatingLabelText="Password"
        name="password"
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        type="password"
        value={this.state.credentials.password}
      >
      </TextField>

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
