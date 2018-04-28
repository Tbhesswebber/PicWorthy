import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing.jsx'
import Locations from './locations.jsx';
import Upload from './upload.jsx';

class Body extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="body fullw fullh">
        {/* <span>I am the body</span>          */}
        {/* <Switch>
          <Route
            exact path='/'
            component={ Landing }
          />
          
          <Route 
            path='/upload' 
            render={(props) => 
              <Upload 
                userData={ userData }
                userPromise={ userPromise }
              />
            }
          />

          <Route 
            path='/' 
            render={(props) => {
              return (
                <Locations 
                  userPromise={ userPromise }
                  userData={ userData }
                  pathname={ props.location.pathname }
                />
              )
            }
          } 
          />
        </Switch> */}
      </div>
    );
  }
}

export default Body;