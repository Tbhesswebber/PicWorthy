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
        photos: []
      },
      // modal: {
      //   view: '',//passed down to modal component to indicate if a modal should be shown
      //   isClosed: true
      // },
      mapCenter: {
        lat: 41.9,
        lng: -87.624
      },

      mapZoom: 5,
      detailProps: undefined,
      lastCardClicked: undefined
    }
  }

  componentDidMount () {
    this.getUser();
  }

  handleModals(e) {
    return (event) =>
      e === "closed"
        ? this.setState({modal: {view: '', isClosed: true}})
        : this.setState({modal: {view: e, isClosed: false}});
  }

  getUser () {
    axios.get('/api/user')
      .then(({user}) => {
        this.setState({userData: user})
        console.log(user);
      });
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
        />
        <Footer />
      </div>
    );
  }
};

export default App;