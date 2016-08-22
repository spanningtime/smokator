import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const Givers = React.createClass({
  render() {

    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      // justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: '70vh'
    }

    const styleItem = {
      backgroundColor: '#e5f3e9',
      borderRadius: '5px'
    }

    return <div style={flexContainer}>
      <List>
        <div style={styleItem}>
          <ListItem
            disabled={true}
            leftAvatar={
              <img src="images/hen.svg" />
            }
          >
          Blaine
          </ListItem>
        </div>
      </List>
    </div>
  }
});

export default Givers;
