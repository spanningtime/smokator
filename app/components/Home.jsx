import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const Home = React.createClass({

  render() {
    const styleContainer = {
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const styleTextField = {
      marginBottom: '10px',
      textAlign: 'center'
    }

    const styleButton = {
      width: '150px',
      marginTop: '20px',
    };

    return <div style={styleContainer}>
      <TextField style ={styleTextField} floatingLabelText="What's your smokation?"></TextField>
      <RaisedButton primary={true} style={styleButton} label="Set Smokation"></RaisedButton>
    </div>
  }
})

export default Home;
