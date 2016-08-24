import React from 'react';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const StatusButtons = React.createClass({

  handleTouchTapBummer() {
    this.props.getGivers();
    this.props.router.push('/givers')
  },

  handleTouchTapGiver() {
    this.props.postGiver()
  },

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
      width: '235px',
      marginBottom: '10px',
      fontFamily: 'Mallanna',
      fontWeight: '200',
      marginBottom: '30px',
    }



    return <div style={flexContainer}>
      <h1>Your location: {this.props.bar.name}</h1>
      <RaisedButton
        label="I want a cigarette"
        onTouchTap={this.handleTouchTapBummer}
        primary={true}
        style={styleButton}
      />
      <RaisedButton
        label="I have cigarettes to give"
        onTouchTap={this.handleTouchTapGiver}
        primary={true}
        style={styleButton}
      />
    </div>
  }
});

export default withRouter(StatusButtons);
