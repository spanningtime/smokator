
/* eslint-disable sort-imports */
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import About from 'components/About';
import App from 'components/App';
import ChatWindow from 'components/ChatWindow';
import Givers from 'components/Givers';
import GiversWaiting from 'components/GiversWaiting';
import Home from 'components/Home';
import LoginButtons from 'components/LoginButtons';
import LoginForm from 'components/LoginForm';
import Profile from 'components/Profile';
import React from 'react';
import Register from 'components/Register';
import StatusButtons from 'components/StatusButtons';

/* eslint-enable sort-imports */

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={LoginButtons} />
        <Route component={About} path="about" />
        <Route component={ChatWindow} path="chats/:chatId" />
        <Route component={GiversWaiting} path="waiting" />
        <Route component={Givers} path="givers" />
        <Route component={Home} path="home" />
        <Route component={LoginForm} path="login" />
        <Route component={Profile} path="profile/:userId" />
        <Route component={StatusButtons} path="status" />
        <Route component={Register} path="register" />
      </Route>
    </Router>;
  }
});

export default Routes;
