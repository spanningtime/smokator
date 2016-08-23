import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import weakKey from 'weak-key';

const Home = React.createClass({
  getInitialState() {
    return {
      selectedBar: null
    }
  },

  handleTouchTapSelect(bar) {
    const nextBar = Object.assign({}, bar)
    this.setState({ selectedBar: nextBar });
  },

  handleTouchTapSubmit() {
    if (!this.state.selectedBar) {
      return;
    }
    this.props.updateBar(this.state.selectedBar);
  },

  render() {
    const styleContainer = {
      // height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const styleTextField = {
      marginBottom: '10px',
      textAlign: 'center'
    };

    const styleButton = {
      width: '150px',
      marginTop: '25px',
      marginBottom: '15px'
    };

    const styleScroll = {
      overflow: 'scroll',
      height: '54vh'
    };

    const flexContainer = {
      minWidth: '100px',
      maxWidth: '180px',
      margin: '0 auto'
    }

    const styleItem = {
      backgroundColor: '#e5f3e9',
      borderRadius: '5px',
      boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
    }

    const styleAvatar = {
      maxHeight: '40px',
      position: 'none',
      margin: '0 auto'
    }

    const styleListItem = {
      fontFamily: 'Mallanna',
      fontSize: '20px',
      fontWeight: '200'
    }

    return <div>
      <div style={styleContainer}>
        <RaisedButton
          label="Set Smokation"
          onTouchTap={this.handleTouchTapSubmit}
          primary={true}
          style={styleButton}
        />
      </div>
      <div style={styleScroll}>
        {this.props.bars.map((bar) => {
          return <div
            key={weakKey(bar)}
            style={flexContainer}
            >
            <List
              onTouchTap={() => this.handleTouchTapSelect(bar)}
            >
              <div
                style={styleItem}>
                <img src="images/glass.svg" style={styleAvatar}/>
                <ListItem
                  style={styleListItem}
                  disabled={true}
                >
                {bar.name}
                </ListItem>
              </div>
            </List>
          </div>
        })}

      </div>
    </div>
  }
})

export default Home;
