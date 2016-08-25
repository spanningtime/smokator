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
      width: '200px',
      marginBottom: '10px',
      fontFamily: 'Mallanna',
      fontWeight: '200',
      marginBottom: '30px',
    }

    const styleTitle = {
      fontFamily: 'Mallanna',
      color: 'black',
      fontSize: '1em',
      fontWeight: '200',
      marginTop: '10px',
      margin: '0 auto'
    }

    const styleTitleContainer = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottom: '2px solid #ff7f66',
    }

    return <div>
      <div style={styleTitleContainer}>
        <h1 style={styleTitle}>{this.props.bar.name}</h1>
      </div>
      <div style={flexContainer}>
        <RaisedButton
          label="Bum a cigarette"
          onTouchTap={this.handleTouchTapBummer}
          primary={true}
          style={styleButton}
        />
        <RaisedButton
          label="Give a cigarette"
          onTouchTap={this.handleTouchTapGiver}
          primary={true}
          style={styleButton}
        />
      </div>
    </div>
  }
});

export default withRouter(StatusButtons);
