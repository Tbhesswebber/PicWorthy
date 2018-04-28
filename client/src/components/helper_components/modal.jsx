import React from 'react';
import Close from 'react-icons/lib/fa/close';
import axios from 'axios';


import Login from '../header_components/login.jsx';
import Signup from '../header_components/signup.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {};
  }

  sendLogin(creds) {
    return axios.post('/api/login', creds)
      .then(({data}) => {
        // console.log(data);
        this.props.setUser(data);
        return data;
      })
      
      .catch((err) => {
        this.setState({
          failedLogin: 'Incorrect username or password.'
        })
        throw err; 
      });
  }
  
  renderContent (view) {
    if (view === 'login') {
      return (<Login sendLogin={this.sendLogin} setUser={this.props.setUser} showSignup={this.props.handleModals('signup')} />);
    }
    if (view === 'signup') {
      return (<Signup sendLogin={this.sendLogin}/>);
    }
  }  

  render () {
    return this.props.modalData.isClosed
    ? null
    : 
      <div className="modal">
        <div id="overlay" onClick={this.props.handleModals('closed')}></div>
        <div id="modal">
          <div className="modal-header">
            <div className="modal-title">
              <h4>{ this.props.modalData.view[0].toUpperCase() + this.props.modalData.view.slice(1) }</h4>
            </div>
            <div className="modal-close">
              <Close onClick={this.props.handleModals('closed')} />
            </div>
          </div>
          {this.renderContent(this.props.modalData.view)}
        </div>
      </div>
    
  }
}

export default Modal;