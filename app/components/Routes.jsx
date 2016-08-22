import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from 'components/App';
import React from 'react';
import LoginForm from 'components/LoginForm';
import LoginButtons from 'components/LoginButtons';



const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <Route component={LoginForm} path="login" />
        <IndexRoute component={LoginButtons}/>
      </Route>
    </Router>
  }
});

export default Routes;
