import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaStar, FaHome, FaPlus, FaMapMarker} from 'react-icons/lib/fa';

import Modal from '../helper_components/modal.jsx';
import Logout from './logout.jsx';

const NavRightUser = (props) => {
  const logout = () => {
    axios.get('/api/logout')
      .then(() => window.location.reload());
  };

  return (
    <div className="user">
      <Link to='/suggestions'>
        <FaHome size={ 30 } />
      </Link>
      <Link to='/locations'>
        <FaMapMarker size={ 30 } />
      </Link>
      <Link to='/likes'>
        <FaStar size={ 30 } />
      </Link>
      <Link to='/upload'>
        <FaPlus size={ 30 } />
      </Link>
      <Link to='/userpage'>
        { props.userData.firstName }
      </Link>
      <span className="logout" onClick={logout}>
        <Logout />
      </span>
    </div>
  )
}

class NavRightNoUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hide: true,
      view: 'login'
    }
  }

  toggleModal () {
    this.setState({hide: !this.state.hide})
  }

  toggleView () {
    this.setState({view: this.state.view === 'login' ? 'signup' : 'login'}); 
  }

  render () {
    return (
      <div className="login">
        <a onClick={this.toggleModal.bind(this)}>Login</a>
        <Modal
          setUser={this.props.setUser}
          toggleView={this.toggleView.bind(this)}
          modalState={Object.assign({}, this.state)}
          close={this.toggleModal.bind(this)}
        />
      </div>
    );
  }
}



module.exports.NavRightUser = NavRightUser;
module.exports.NavRightNoUser = NavRightNoUser;