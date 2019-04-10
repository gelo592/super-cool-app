/*
 * This is a view therefore it is not connected to state
 * It is a wrapper aligning with a particular page on the site
 * Any subviews will be defined as containers that are routed to
 * from this container.
 */

import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import OneContainer from 'containers/examples/one-container';
import TwoContainer from 'containers/examples/two-container';
import ThreeContainer from 'containers/examples/three-container';

class ExampleView extends Component {
  render () {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/example/one"
            render={props => (<OneContainer {...props} />)} />
          <Route exact path="/example/two"
            render={props => (<TwoContainer {...props} />)} />
          <Route path="/example/three/"
            render={props => (<ThreeContainer {...props} />)} />
        </Switch>
      </Fragment>
    );
  }
}

export default ExampleView;
