import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const schema = {
  email: Joi.string()
    .email()
    .trim()
    .required()
    .label('Email'),
  password: Joi.string()
    .trim()
    .required()
    .min(5)
    .label('Password'),
  phone: Joi.string()
    .trim()
    .required()
    .min(10)
    .label('Phone number'),
  firstName: Joi.string()
    .trim()
    .required()
    .label('First name'),
  lastName: Joi.string()
    .trim()
    .required()
    .label('Last Name'),
  aboutMe: Joi.string()
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
        lastName: '',
        aboutMe: ''

      }
    };
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

    this.setState({ errors: {}});
    this.props.register(this.state.user);
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextUser = Object.assign({}, this.state.user, { [name]: value });

    this.setState({ user: nextUser });

    const nextErrors = Object.assign({}, this.state.errors);
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

  handleScroll() {
    const scroll = document.getElementById('scroll');

    scroll.scrollTop = scroll.scrollHeight;
  },

  handleFocus(event) {
    const input = event.target.tagName;
    const textArea = event.target.tagName;
    const footer = document.getElementById('footer');

    if (input === 'INPUT' || textArea === 'TEXTAREA') {
      footer.style.display = 'none';
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
      marginTop: '50px'
    };

    const styleBigTextField = {
      overflow: 'scroll',
      height: '10vh'
    };

    const styleButton = {
      marginTop: '20px'
    };

    const styleLabel = {
      borderColor: '#ff7f66'
    };

    const { user, errors } = this.state;

    return <div style={styleContainer}>
      <TextField
        errorText={errors.email}
        name="email"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="Email"
        underlineFocusStyle={styleLabel}
        value={user.email}
      />

      <TextField
        errorText={errors.password}
        name="password"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="Password"
        type="password"
        underlineFocusStyle={styleLabel}
        value={user.password}
      />

      <TextField
        errorText={errors.firstName}
        name="firstName"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="First Name"
        underlineFocusStyle={styleLabel}
        value={user.firstName}
      />

      <TextField
        errorText={errors.lastName}
        name="lastName"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="Last Name"
        underlineFocusStyle={styleLabel}
        value={user.lastName}
      />

      <TextField
        errorText={errors.phone}
        name="phone"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="Phone Number"
        underlineFocusStyle={styleLabel}
        value={user.phone}
      />

      <div
        id="scroll"
        onChange={this.handleScroll}
        style={styleBigTextField}
      >
        <TextField

          // errorText={errors.phone}
          multiLine={true}
          name="aboutMe"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          placeholder="About Me"
          rows={2}
          underlineFocusStyle={styleLabel}
          value={user.aboutMe}
        />
      </div>

      <RaisedButton
        label="Submit"
        onTouchTap={this.handleTouchTap}
        primary={true}
        style={styleButton}
      />
    </div>;
  }
});

export default Register;
