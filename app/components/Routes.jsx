import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from 'components/App';
import React from 'react';
import LoginForm from 'components/LoginForm';
import LoginButtons from 'components/LoginButtons';
import StatusButtons from 'components/StatusButtons';
import Home from 'components/Home';
import Givers from 'components/Givers';
import Profile from 'components/Profile';
import Register from 'components/Register';



const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={LoginButtons}/>
        <Route component={LoginForm} path="login" />
        <Route component={StatusButtons} path="status" />
        <Route component={Home} path="home" />
        <Route component={Givers} path="givers" />
        <Route component={Profile} path="profile" />
        <Route component={Register} path="register" />
      </Route>
    </Router>
  }
});

export default Routes;
