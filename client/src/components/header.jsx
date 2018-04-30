import React from 'react';
import { Link } from 'react-router-dom';

const { NavRightNoUser, NavRightUser } = require('./header_components/nav.jsx');

const Header = (props) => {
  return (
    <div className="header">
      <Link to='/' className="logo">PicWorthy</Link>
      { !!props.userData && props.userData.username !== ""
        ? <NavRightUser
            userData={props.userData}
          />
        : <NavRightNoUser
            setUser={props.setUser}
            modalData={props.modalData}
            // handleModals={props.handleModals}
          /> }
    </div>
  );
}

export default Header;