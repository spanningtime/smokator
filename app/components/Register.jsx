import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const Register = React.createClass({
  render() {
    const styleContainer = {
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const styleTextField = {
    }

    const styleButton = {
      marginTop: '20px'
    }

    return <div style={styleContainer}>
      <TextField
        name="email"
        floatingLabelText="Email"
        style={styleTextField}
      >
      </TextField>

      <TextField
        name="password"
        floatingLabelText="Password"
        type="password"
        style={styleTextField}
      >
      </TextField>

      <TextField
        name="firstName"
        floatingLabelText="First Name"
        style={styleTextField}
      >
      </TextField>

      <TextField
        name="lastName"
        floatingLabelText="Last Name"
        style={styleTextField}
      >
      </TextField>

      <TextField
        name="number"
        floatingLabelText="Phone Number"
        style={styleTextField}
      >
      </TextField>

      <RaisedButton
        primary={true}
        label="Submit"
        style={styleButton}
      >
      </RaisedButton>
    </div>
  }
})

export default Register;
