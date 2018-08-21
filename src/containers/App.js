import React, { Component, Fragment } from 'react';
import Home from './Home';
import BuildWith from './BuildWith';
import Bio from './Bio';
import PageNotFound from './404';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Routes Component
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/build-with" component={BuildWith} />
            <Route exact path="/bio" component={Bio} />
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
