import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RouteWithProps from './helper_components/routeWithProps.jsx';
import Landing from './body_components/landing.jsx';
import Locations from './locations.jsx';
import Upload from './upload.jsx';

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {};
  }

  render () {
    return (
      <div className="body fullh fullw">
        <Switch>
          <Route
            exact path='/'
            component={ Landing }
          />
          
          <RouteWithProps
            path='/upload'
            component={Upload}
            userData={ this.props.userData }
          />

          <RouteWithProps 
            path='/'
            component={Locations}
            userData={ this.props.userData }
          />
        </Switch>
      </div>
    );
  }
}

export default Body;