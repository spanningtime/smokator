import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
const Footer = React.createClass({

  render() {

    const stylePaper = {
      backgroundColor: '#e5f3e9'
    };

    return <Paper style={stylePaper} zDepth={1}>
        <BottomNavigation>
        </BottomNavigation>
      </Paper>
  }
});

export default Footer;
