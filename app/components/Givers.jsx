import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const Givers = React.createClass({
  render() {

    const flexContainer = {
      minWidth: '100px',
      maxWidth: '180px',
      margin: '0 auto'
      // display: 'flex',
      // flexDirection: 'row',
      // flexWrap: 'wrap',
      // alignContent: 'center',
      // alignItems: 'center',
      // height: '70vh'
    }

    const styleItem = {
      backgroundColor: '#e5f3e9',
      borderRadius: '5px',
      boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      marginBottom: '20px'
    }

    const styleAvatar = {
      maxHeight: '40px',
      position: 'none',
      margin: '0 auto'
    }

    const styleListItem = {
      fontFamily: 'Mallanna',
      fontSize: '25px',
      fontWeight: '200'
    }

    const styleTitle = {
      textAlign: 'center',
      fontFamily: 'Mallanna',
      fontSize: '25px',
      fontWeight: '200',
      marginBottom: '10px'
    }

    const styleScroll = {
      overflow: 'scroll',
      height: '65vh'
    }

    return <div>
      <h1 style={styleTitle}>Givers currently @ Temple</h1>
      <div style={styleScroll}>
        <div style={flexContainer}>
          <List>
            <div style={styleItem}>
            <img src="images/hen.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              John
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/burger.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              Blaine
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/pizza.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              Shane
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/hen.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              Matthew
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/burger.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              Blaine
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/pizza.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              Wolfgang
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/hen.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              John
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/burger.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              Blaine
              </ListItem>
            </div>
            <div style={styleItem}>
            <img src="images/pizza.svg" style={styleAvatar}/>
              <ListItem
                style={styleListItem}
                disabled={true}
              >
              Shane
              </ListItem>
            </div>
          </List>
        </div>
      </div>
    </div>
  }
});

export default Givers;
