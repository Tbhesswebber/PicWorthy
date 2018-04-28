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
      modal: {
        view: '',//passed down to modal component to indicate if a modal should be shown
        isClosed: true
      },
      mapCenter: {
        lat: 41.9,
        lng: -87.624
      },

      mapZoom: 5,
      detailProps: undefined,
      lastCardClicked: undefined
    }
  }

  handleModals(e) {
    e === close
      ? this.setState({modal: {view: '', isClosed: true}})
      : this.setState({modal: {view: e.target.text.toLowerCase(), isClosed: false}});
  }

  render() {
    const userPromise = this.state.userPromise;
    const userData = this.state.userData;

    return (
      <div className="main fullh fullw">
        <Header
          userData={this.state.userData}
          modalData={this.state.modal}
          handleModals={this.handleModals.bind(this)}
        />
        <Body />
        <Footer />
      </div>
    );
  }
};

export default App;