import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RouteWithProps from './helper_components/routeWithProps.jsx';
import Landing from './body_components/landing.jsx';
import Locations from './body_components/locations.jsx';
import Upload from './body_components/upload.jsx';

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pics: [],
      displayAmount: 0,
      markers: [],
      zoom: 4,
      position: {lat: 37.09, lng: -95.71},
      detailedPicURL: 'NONE',
      userData: props.userData
    };
  }

  updatePictures(lat, lng) {
    fetchClosestPics(lat, lng)
      .then(({data}) => {
        const clickHandler = this.showHideDetails;
        
        const markers = data.map((pic) => ({
            lat: pic.loc.coordinates[1],
            lng: pic.loc.coordinates[0],
            clickHandler: (e) => clickHandler(e, pic.imageURL)
          })
        );
        
        this.setState({
          pics: data,
          markers: markers
        })
      })
  }

  updateDisplayAmount() {
    const displayAmount = Math.floor((window.innerWidth - 90)/250);
    this.setState({displayAmount});
  }

  //! Check to make sure that this has the proper information in each component
  handleLike(e, { category, location, imageURL, description, loc}) {

    axios.post('/api/favorites', {
      category,
      location,
      imageURL,
      description,
      user_id: this.state.userData._id,
      username: this.state.userData.username,
      latLng: {
        lat: loc.coordinates[1],
        lng: loc.coordinates[0]
      }
    })
      .then(({data}) => this.setState({userData: data}))
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

          <Route
            path='/locations'
            render={() => (
              <Locations 
                
              />)}
          />
        </Switch>
      </div>
    );
  }
}

export default Body;