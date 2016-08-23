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
      fontWeight: '200'
    }

    const styleLabel = {
      fontWeight: '200'
    }

    return <div style={flexContainer}>
      <RaisedButton
        label="I want a cigarette"
        labelStyle={styleLabel}
        onTouchTap={this.handleTouchTapBummer}
        primary={true}
        style={styleButton}
      />
      <RaisedButton
        label="I have cigarettes to give"
        labelStyle={styleLabel}
        onTouchTap={this.handleTouchTapGiver}
        primary={true}
        style={styleButton}
      />
    </div>
  }
});

export default withRouter(StatusButtons);
