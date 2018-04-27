import React, { Component } from 'react';
import axios from 'axios';
import FaIconPack, {FaStar, FaHome, FaPlus} from 'react-icons/lib/fa';


import Login from './login.jsx';
import Signup from './signup.jsx';

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
      <a>Login</a>
      <Login 
        handleModals={ props.handleModals }
      />
      
      <Signup 
        handleModals={ props.handleModals }
      />
    </div>
  )
}



module.exports.NavRightUser = NavRightUser;
module.exports.NavRightNoUser = NavRightNoUser;