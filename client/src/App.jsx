import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {     
      userData: {
        firstName: '',
        lastName: '',
        username: '',
        user_id: '',
        likes: [],
        photos: [],
        tags: {}
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

  setUser (data) {
    this.setState({userData: data});
    console.log(this.state);
  }

  render() {
    const userPromise = this.state.userPromise;
    const userData = this.state.userData;

    return (
      <div className="main fullh fullw">
        <Header
          userData={this.state.userData}
          setUser={this.setUser.bind(this)}
        />
        <Body
          userData={ this.state.userData }
          setUser={this.setUser.bind(this)}
        />
        <Footer />
      </div>
    );
  }
};

export default App;