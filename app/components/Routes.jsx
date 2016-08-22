import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from 'components/App';
import React from 'react';
import LoginForm from 'components/LoginForm';
import LoginButtons from 'components/LoginButtons';
import StatusButtons from 'components/StatusButtons';



const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <Route component={LoginForm} path="login" />
        <IndexRoute component={LoginButtons}/>
        <Route component={StatusButtons} path="status" />
      </Route>
    </Router>
  }
});

export default Routes;
