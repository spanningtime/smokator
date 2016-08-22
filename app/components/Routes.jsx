import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from 'components/App';
import React from 'react';
import LoginForm from 'components/LoginForm';


const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <Route component={LoginForm} path="login" />
      </Route>
    </Router>
  }
});

export default Routes;
