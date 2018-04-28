import React from 'react';
import Close from 'react-icons/lib/fa/close';

import Login from '../header_components/login.jsx';
import Signup from '../header_components/signup.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {};
  }
  
  renderContent (view) {
    if (view === 'login') {
      return (<Login />);
    }
    if (view === 'signup') {
      return (<Signup />);
    }
  }

  render () {
    return this.props.modalData.isClosed
    ? null
    : 
      <div className="modal">
        <div id="overlay" onClick={(e) => this.props.handleModals(close)}></div>
        <div id="modal">
          <div className="modal-header">
            <div className="modal-title">
              <h4>{ this.props.modalData.view[0].toUpperCase() + this.props.modalData.view.slice(1) }</h4>
            </div>
            <div className="modal-close">
              <Close onClick={(e) => this.props.handleModals(close)} />
            </div>
          </div>
          {this.renderContent(this.props.modalData.view)}
        </div>
      </div>
    
  }
}

export default Modal;