import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import weakKey from 'weak-key';

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
      marginBottom: '10px',
    }

    const styleScroll = {
      overflow: 'scroll',
      height: '65vh'
    }

    const { givers } = this.props;

    return <div>
      <h1 style={styleTitle}>Givers currently @ {this.props.bar.name}</h1>
      <div style={styleScroll}>
        <div style={flexContainer}>
          <List>
            {givers.map((giver) => {

              return  <Link
                key={weakKey(giver)}
                to={`/profile/${giver.userId}`}
                style={{textDecoration: 'none'}}
                >
                <div style={styleItem}>
                  <img src={"images/cigarette.svg"} style={styleAvatar}/>
                  <ListItem
                    disabled={true}
                    style={styleListItem}
                  >
                    {giver.firstName}
                  </ListItem>
                </div>
              </Link>
            })}
          </List>
        </div>
      </div>
    </div>
  }
});

export default Givers;
