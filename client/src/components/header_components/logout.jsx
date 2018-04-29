import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {

  componentDidMount(){
    this.props.router.push('/');
  }

  render() {
    return (
      <h1 className="centered">
        Logging out...
      </h1>
    );
  }
}

export default withRouter(Logout);