import React from 'react';
import Close from 'react-icons/lib/fa/close';
import axios from 'axios';

import Login from '../header_components/login.jsx';
import Signup from '../header_components/signup.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  sendLogin(creds) {
    return axios.post('/api/login', creds);
  }
  
  renderContent (view) {
    if (view === 'login') {
      return (
        <Login
          sendLogin={this.sendLogin}
          setUser={this.props.setUser}
          close={this.props.close.bind(this)}
          showSignup={this.props.toggleView}
        />
      );
    }
    if (view === 'signup') {
      return (
        <Signup
          sendLogin={this.sendLogin}
          setUser={this.props.setUser}
          close={this.props.close.bind(this)}
          showLogin={this.props.toggleView}
        />
      );
    }
  }  

  render () {
    return !!this.props.modalState.hide
    ? null
    : (
      <div className="modal">
        <div id="overlay" onClick={this.props.close}></div>
        <div id="modal">
          <div className="modal-header">
            <div className="modal-title">
              <h4>{ this.props.modalState.view[0].toUpperCase() + this.props.modalState.view.slice(1) }</h4>
            </div>
            <a className="modal-close">
              <Close onClick={this.props.close} />
            </a>
          </div>
          {this.renderContent(this.props.modalState.view)}
        </div>
      </div>
    );
  }
}

export default Modal;