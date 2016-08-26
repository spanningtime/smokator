import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';
import weakKey from 'weak-key';

const Home = React.createClass({

  handleTouchTap(bar) {
    this.props.updateBar(bar);
  },

  handleTouchTapBorder(event) {
    event.target.style = {
      backgroundColor: '#e5f3e9',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row'
    };
  },

  render() {
    const styleContainer = {
      // height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };

    const styleScroll = {
      overflow: 'scroll',
      height: '54vh'
    };

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
      flexDirection: 'row'
    };

    const styleAvatar = {
      maxHeight: '40px',
      position: 'none',
      margin: '0 auto'
    };

    const styleListItem = {
      fontFamily: 'Mallanna',
      fontSize: '20px',
      fontWeight: '200'
    };

    const styleTitle = {
      fontFamily: 'Mallanna',
      color: 'black',
      textShadow: '2px 2px #e5f3e9',
      fontSize: '2.5em',
      fontWeight: '200',
      borderBottom: '2px solid #ff7f66',
      marginTop: '0px'
    };

    /* eslint-disable react/jsx-no-bind */
    return <div>
      <div style={styleContainer}>
        <h1 style={styleTitle}>Check In</h1>
      </div>
      <div style={styleScroll}>

        {this.props.bars.map((bar) => {
          return <div
            key={weakKey(bar)}
            style={flexContainer}
          >
            <List
              onTouchTap={() => this.handleTouchTap(bar)}
            >
              <div
                style={styleItem}
              >
                <img src="images/glass.svg" style={styleAvatar} />
                <ListItem
                  disabled={true}
                  style={styleListItem}
                >
                {bar.name}
                </ListItem>
              </div>
            </List>
          </div>;
        })}

      </div>
    </div>;

    /* eslint-disable react/jsx-no-bind */
  }
});

export default Home;
