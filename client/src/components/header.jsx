import React from 'react';
import { Link } from 'react-router-dom';

const { NavRightNoUser, NavRightUser } = require('./header_components/nav.jsx');

const Header = (props) => (
  <div className="header">
    <Link to='/' className="logo">Pic Worthy</Link>
    { props.userData.userName
      ? <NavRightUser
          userData={props.userData}
        />
      : <NavRightNoUser
          modalData={props.modalData}
          handleModals={props.handleModals}
        /> }
  </div>
);

export default Header;