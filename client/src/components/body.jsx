import React from 'react';
import { Route, Switch } from 'react-router-dom';
//* Components
import RouteWithProps from './helper_components/routeWithProps.jsx';
import Landing from './body_components/landing.jsx';
import Locations from './body_components/locations.jsx';
import Upload from './body_components/upload.jsx';
import User from './body_components/user.jsx';
import Logout from './header_components/logout.jsx';
import Modal from './helper_components/modal.jsx';
//* Functions
import fetchClosestPics from '../helpers/fetchClosestPics.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayAmount: 1,
      markers: [],
      zoom: 4,
      position: { lat: 37.09, lng: -95.71 },
      detailedPicURL: 'NONE',
      userData: this.props.userData,
      modalProps: {
        view: '',
        hide: true,
        photoData: ''
      }
    };
  }

  updatePictures(lat, lng) {
    fetchClosestPics(lat, lng)
      .then(({ data }) => {
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

  closeModal () {
    this.setState({modalProps: {view: '', hide: true, photoData: ''}});
  }

  viewPhoto (pic) {
    this.setState({modalProps: {view: 'photo', hide: false, photoData: pic}});
  }

  //! Check to make sure that this has the proper information in each component
  handleLike(e, { category, location, imageURL, description, loc }) {

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
      .then(({ data }) => this.setState({ userData: data }))
  } 
  //!

  render() {
    return (
      <div className="body">
        <Switch>
          <Route
            exact path='/'
            component={Landing}
          />

          <Route
            path='/upload'
            render={() => (
              <Upload
                userData={this.props.userData}
                setUser={this.props.setUser}
              />
            )}
          />

          <Route
            path='/userPage'
            render={() => (
              <User 
                userData={this.props.userData}
                updatePictures={this.updatePictures.bind(this)}
                setUser={this.props.setUser}
                viewPhoto={this.viewPhoto.bind(this)}
              />
            )}
          />

          <Route
            path='/suggestions'
            render={() => (
              <Suggestions
                /* add your props here */
                viewPhoto={this.viewPhoto.bind(this)}
              />
            )}
          />

          <Route
            path='/locations'
            render={() => (
              <Locations
                userData={this.props.userData}
                updatePictures={this.updatePictures.bind(this)}
                setUser={this.props.setUser}
                updatePictures={this.updatePictures}
                viewPhoto={this.viewPhoto.bind(this)}
              />
            )}
          />

        </Switch>
        <Modal
          modalState={this.state.modalProps}
          close={this.closeModal.bind(this)}
        />
      </div>
    );
  }
}

export default Body;