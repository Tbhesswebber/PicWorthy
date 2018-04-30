import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  return (
    <Link to="/">
      Logout
    </Link>
  );
}

export default Logout;