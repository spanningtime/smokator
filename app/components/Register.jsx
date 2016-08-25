import React from 'react';
import Joi from 'joi';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const schema = {
  email: Joi.string().email().trim().required().label('Email'),
  password: Joi.string().trim().required().label('Password'),
  phone: Joi.string().trim().required().min(10).label('Phone number'),
  firstName: Joi.string().trim().required().label('First name'),
  lastName: Joi.string().trim().required().label('Last Name')
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

  handleScroll(){
    const scroll = document.getElementById('scroll');
    scroll.scrollTop = scroll.scrollHeight;
  },

  // handleFocus() {
  //   if (window.screen.height < 400) {
  //     console.log("<400");
  //   }
  //   document.getElementById('footer').style.display = "none";
  // },


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
        placeholder="Email"
        onChange={this.handleChange}
        // onFocus={this.handleFocus}
        underlineFocusStyle={styleLabel}
        value={user.email}
      >
      </TextField>

      <TextField
        errorText={errors.password}
        name="password"
        placeholder="Password"
        onChange={this.handleChange}
        type="password"
        underlineFocusStyle={styleLabel}
        value={user.password}
      >
      </TextField>

      <TextField
        errorText={errors.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={this.handleChange}
        underlineFocusStyle={styleLabel}
        value={user.firstName}
      >
      </TextField>

      <TextField
        errorText={errors.lastName}
        name="lastName"
        placeholder="Last Name"
        onChange={this.handleChange}
        underlineFocusStyle={styleLabel}
        value={user.lastName}
      >
      </TextField>

      <TextField
        errorText={errors.phone}
        name="phone"
        placeholder="Phone Number"
        onChange={this.handleChange}
        underlineFocusStyle={styleLabel}
        value={user.phone}
      >
      </TextField>

      <div id="scroll"
        style={styleBigTextField}
        onChange={this.handleScroll}
      >
        <TextField
          // errorText={errors.phone}
          name="aboutMe"
          placeholder="About Me"
          onChange={this.handleChange}
          multiLine={true}
          rows={2}
          underlineFocusStyle={styleLabel}
          value={user.aboutMe}
          >
        </TextField>
      </div>


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
