import React from 'react';
import Joi from 'joi';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const schema = {
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
  phone: Joi.string().trim().required().min(10),
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required()
};

const Register = React.createClass({
  getInitialState() {
    return {
      errors: {},
      user: {
        email: '',
        password: '',
        phone: '',
        firstName: '',
        lastName: ''
      }
    }
  },

  handleTouchTap() {
    const result = Joi.validate(this.state.user, schema, {
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
    console.log('hads');
    this.props.register(this.state.user);
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextUser = Object.assign({}, this.state.user, { [name]: value });

    this.setState({ user: nextUser });

    const nextErrors = Object.assign({}, this.state.errors)
    const result = Joi.validate({ [name]: value }, {
      [name]: schema[name] });

    if (result.error) {
      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    delete nextErrors[name];

    this.setState({ errors: nextErrors });
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
    };

    const styleButton = {
      marginTop: '20px'
    };

    const { user, errors } = this.state;

    return <div style={styleContainer}>
      <TextField
        errorText={errors.email}
        name="email"
        floatingLabelText="Email"
        onChange={this.handleChange}
        style={styleTextField}
        value={user.email}
      >
      </TextField>

      <TextField
        errorText={errors.password}
        name="password"
        floatingLabelText="Password"
        onChange={this.handleChange}
        type="password"
        style={styleTextField}
        value={user.password}
      >
      </TextField>

      <TextField
        errorText={errors.firstName}
        name="firstName"
        floatingLabelText="First Name"
        onChange={this.handleChange}
        style={styleTextField}
        value={user.firstName}
      >
      </TextField>

      <TextField
        errorText={errors.lastName}
        name="lastName"
        floatingLabelText="Last Name"
        onChange={this.handleChange}
        style={styleTextField}
        value={user.lastName}
      >
      </TextField>

      <TextField
        errorText={errors.phone}
        name="phone"
        floatingLabelText="Phone Number"
        onChange={this.handleChange}
        style={styleTextField}
        value={user.phone}
      >
      </TextField>

      <RaisedButton
        primary={true}
        label="Submit"
        onTouchTap={this.handleTouchTap}
        style={styleButton}
      >
      </RaisedButton>
    </div>
  }
})

export default Register;
