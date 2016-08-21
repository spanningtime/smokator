import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from 'components/app';
import Footer from 'components/Footer';
import React from 'react';


const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">

        <Route component={Footer} path="/">
        </Route>
      </Route>
    </Router>
  }
});

export default Routes;
