import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const StatusButtons = React.createClass({
  render() {

    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: '70vh'
    }

    const styleButton = {
      display: 'flex',
      width: '175px',
      textColor: 'black',
      marginBottom: '10px'
    };

    return <div style={flexContainer}>
      <RaisedButton label="I want a cig" primary={true} style={styleButton}  />
      <RaisedButton label="I have cigs to give" primary={true} style={styleButton}  />
    </div>
  }
});

export default StatusButtons;
