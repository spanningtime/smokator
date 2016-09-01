/* eslint-disable sort-imports */
import { Link } from 'react-router';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';
import weakKey from 'weak-key';

/* eslint-enable sort-imports */

const Givers = React.createClass({

  render() {
    const flexContainer = {
      minWidth: '100px',
      maxWidth: '180px',
      margin: '0 auto'
    };

    const styleItem = {
      backgroundColor: '#e5f3e9',
      borderRadius: '5px',
      boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      marginBottom: '20px'
    };

    const styleAvatar = {
      maxHeight: '40px',
      position: 'none',
      margin: '0 auto'
    };

    const styleListItem = {
      fontFamily: 'Mallanna',
      fontSize: '25px',
      fontWeight: '200'
    };

    const styleTitle = {
      fontFamily: 'Mallanna',
      color: 'black',
      fontSize: '1em',
      fontWeight: '200',
      borderBottom: '2px solid #ff7f66',
      marginTop: '10px',
      textAlign: 'center'
    };

    const styleScroll = {
      overflow: 'scroll',
      height: '65vh'
    };

    const styleGiversTitle = {
      display: 'inline-block',
      fontFamily: 'Mallanna',
      color: 'black',
      textShadow: '2px 2px #e5f3e9',
      fontSize: '2.5em',
      fontWeight: '200',
      borderBottom: '2px solid #ff7f66',
      marginTop: '0px'
    };

    const styleGiversTitleContainer = {
      textAlign: 'center'
    };

    const styleText = {
      fontFamily: 'Mallanna',
      fontSize: '18px',
      marginTop: '0px',
      marginBottom: '0px',
      paddingLeft: '20px',
      paddingRight: '20px',
      display: 'none'
    };

    const styleSpan = {
      fontFamily: 'Mallanna',
      fontSize: '18px',
      color: '#ff7f66',
    };

    const { givers } = this.props;


    if(this.props.givers.length === 0) {
      console.log(this.props.givers.length)
      styleText.display = 'inline-block'
    };


    return <div>
      <div>
        <h1 style={styleTitle}>{this.props.bar.name}</h1>
      </div>
      <div style={styleGiversTitleContainer}>
        <h1 style={styleGiversTitle}>Givers</h1>
      </div>
      <p style={styleText}>There is currently no one willing to bum you a cigarette at <span style={styleSpan}>{this.props.bar.name}</span></p>

      <div style={styleScroll}>
        <div style={flexContainer}>
          <List>
            {givers.map((giver) => {
              return <Link
                key={weakKey(giver)}
                style={{ textDecoration: 'none' }}
                to={`/profile/${giver.userId}`}
              >
                <div style={styleItem}>
                  <img src={"images/cigarette.svg"} style={styleAvatar} />
                  <ListItem
                    disabled={true}
                    style={styleListItem}
                  >
                    {giver.firstName}
                  </ListItem>
                </div>
              </Link>;
            })}
          </List>
        </div>
      </div>
    </div>;
  }
});

export default Givers;
