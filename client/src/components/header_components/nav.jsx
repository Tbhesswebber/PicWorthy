import React, { Component } from 'react';
import axios from 'axios';
import {FaStar, FaHome, FaPlus} from 'react-icons/lib/fa';

import Modal from '../helper_components/modal.jsx';

const NavRightUser = (props) => {
  return (
    <div className="user">
      <Link to='/locations'>
        <FaHome size={ 20 } />
      </Link>
      <Link to ='/likes'>
        <FaStar size={ 20 } />
      </Link>
      <Link to='/upload'>
        <FaPlus size={ 20 } />
      </Link>
      <Link to='/userpage'>
        { props.userData.firstName }
      </Link>
      <Link to='/'>
        Logout
      </Link>
    </div>
  )
}

const NavRightNoUser = (props) => {
  return (
    <div className="login">
      <a onClick={props.handleModals('login')}>Login</a>
      <Modal
        setUser={props.setUser}
        handleModals={props.handleModals}
        modalData={props.modalData}
      />
    </div>
  )
}



module.exports.NavRightUser = NavRightUser;
module.exports.NavRightNoUser = NavRightNoUser;