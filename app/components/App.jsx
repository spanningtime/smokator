import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import IconButton from 'material-ui/IconButton';
import BottomNavigation from 'material-ui/BottomNavigation';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Paper from 'material-ui/Paper';
import React from 'react';
import { withRouter } from 'react-router';
import LoginButtons from 'components/LoginButtons';
import Snackbar from 'material-ui/Snackbar';
import StatusButtons from 'components/StatusButtons';

const App = React.createClass({

  getInitialState() {
    return {
      open: false,
      givers: [],
      bars: [],
      selectedPlaceId: 'ChIJG2K5JrtqkFQRsT22hSRqrrc',
      coords: null
    }
  },

  componentDidMount() {
    this.getLocation();
  },

  getLocation() {
    if (!navigator.geolocation) {
      return console.log('Geolocation is not supported by your browser.');
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      const nextCoords = Object.assign({}, { latitude, longitude });


      this.setState({ coords: nextCoords });
      this.getBars();
    };

    const failure = () => {
      console.log('Could not obtain your location.');
    }

    navigator.geolocation.getCurrentPosition(success, failure);
  },

  getGivers() {
    axios.get(`/api/givers/${this.state.selectedPlaceId}`)
      .then((res) => {
        console.log(res.data);
        // this.setState({ givers: })
      })
      .catch((err) => {
        console.error(err);
      });
  },

  getBars() {
    const { latitude, longitude } = this.state.coords;

    axios.get(`/api/places/${latitude},${longitude}`)
      .then((res) => {
        this.setState({ bars: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  login(credentials) {
    axios.post('/api/token', credentials)
      .then((res) => {
        return this.props.router.push('/home');
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({ open: true });
          console.log('Invalid login info.');
        }
        else {
          console.log('uh oh we messed up.');
        }
      });
  },

  render() {

    const styleMenu = {
      iconStyle: {
        width: 48,
        height: 48,
        paddingBottom: 0
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
      flexWrap: 'nowrap',
      alignContent: 'space-around',
      alignItems: 'center',
      marginTop: '0px',
      marginLeft: '10px',
      justifyContent: 'space-between'
    };

    const styleTitle = {
      fontSize: '35px',
      color: '#ff7f66',
      fontFamily: 'Varela Round'
    };

    const styleTagline = {
      fontSize: '13px',
      fontWeight: '400',
      marginTop: '0px',
      marginLeft: '0px',
      color: 'black',
      fontFamily: 'Roboto'
    };

    const styleFooter = {
      backgroundColor: '#e5f3e9'
    };

    const styleImage = {
      display: 'inlineBlock',
      width: '30%',
      marginBottom: '-35px',
      marginLeft: '10px',
      marginTop: '-30px'
    };

    return <div >
      <Paper style={stylePaper}
        >
        <div style={styleContainer}>
          <div style={styleTitle}>
            smokator
            <img style={styleImage} src={'./images/cigarette.svg'} />
            <h1 style={styleTagline}>Connecting drunk smokers since 1776</h1>
          </div>
          <IconButton
            iconStyle={styleMenu.iconStyle}
            style={styleMenu.style}
          >
            <NavigationMenu color={'#ff7f66'}/>
          </IconButton>
        </div>
      </Paper>

      <Snackbar
          open={this.state.open}
          message="Invalid login credentials."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{ color: 'white' }}
        />

      {React.cloneElement(this.props.children, {
        login: this.login,
        selectedPlaceId: this.state.selectedPlaceId,
        getGivers: this.getGivers,
        getBars: this.getBars,
        bars: this.state.bars
      })}


    </div>
  }
});

export default withRouter(App);
