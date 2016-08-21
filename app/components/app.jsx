import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Paper from 'material-ui/Paper';
import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      isLoggedIn: true,
    }
  },

  render() {

    const styleMenu = {
      iconStyle: {
        width: 48,
        height: 48,
        paddingBottom: 0,
        display: this.state.isLoggedIn ? 'inline-block' : 'none'
      },
      style: {
        width: 64,
        height: 64,
        padding: 0
      }
    };

    const stylePaper = {
      backgroundColor: '#e5f3e9'
    };

    const styleContainer = {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'space-around',
      alignItems: 'center',
      height: '100px',
      paddingTop: '15px',
      marginLeft: '40px',
      justifyContent: 'space-between'
    };

    const styleTitle = {
      fontSize: '2em',
      color: '#ff7f66'
    };

    return <Paper style={stylePaper}
      >
      <div style={styleContainer}>
        <div style={styleTitle}>
          smokator
        </div>
        <IconButton
          iconStyle={styleMenu.iconStyle}
          style={styleMenu.style}
        >
          <NavigationMenu color={'#ff7f66'}/>
        </IconButton>
      </div>


    </Paper>;
    {/* <AppBar
    iconElementRight={
      <IconButton
        iconStyle={styleMenu.iconStyle}
        style={styleMenu.style}
      >
        <NavigationMenu color={'#ff7f66'}/>
      </IconButton>}
    showMenuIconButton={false}
    title="smokator"
    titleStyle={styleTitle}
     >

    </AppBar>; */}
  }
});

export default App;
