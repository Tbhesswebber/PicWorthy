import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // userPromise: axios.get('/api/user'),
      
      userData: {
        firstName: '',
        lastName: '',
        username: '',
        user_id: '',
        likes: [],
        photos: []
      },

      showLogin: false,
      showSignup: false,
      activeModal: '',
      mapCenter: {
        lat: 41.9,
        lng: -87.624
      },

      mapZoom: 5,
      detailProps: undefined,
      lastCardClicked: undefined
    }
  }

  handleNavModals(e, signup = this.state.showSignup, login = this.state.showLogin) {
    const status = {};
    if (e) {
      status[e.target.name] = true
    } else {
      status.showSignup = signup;
      status.showLogin = login;
    }
    this.setState(status);
  }

  render() {
    const userPromise = this.state.userPromise;
    const userData = this.state.userData;

    return (
      <div className="main fullh fullw">
        <Header
          userData={this.state.userData}
          handleModals={this.handleNavModals.bind(this)}
        />
        <Body />
        <Footer />
      </div>
    );
  }
};

export default App;