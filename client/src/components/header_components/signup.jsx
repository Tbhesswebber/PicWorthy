import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      status: undefined,
    },
    
    this.updateInfo = this.updateInfo.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
      status: undefined
    });
  }

  sendInfo(creds) { 
    return axios.post('/api/signup', creds)
      .then(() => {
        this.props.sendLogin(this.state);
      })
      
      .catch(() => {
        this.setState({
          status: false
        })
      })
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-body">
          <div className="first-name">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              onChange = {this.updateInfo}
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              onChange = {this.updateInfo}
            />
          </div>
          <div className="username">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange = {this.updateInfo}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>  
            <input 
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.updateInfo}
            />
          </div>
        </div>
        
        <div className="modal-footer">
            <span className={this.state.status ? "go" : "stop"}>{this.state.status === undefined ? null : this.state.status ? "Username already exists." : "Your account was successfully created!"}</span>
            <a onClick={() => {this.props.showLogin()}}>Already have an account?</a>
            <button onClick={() => this.sendInfo(this.state).then(data => {
              this.props.history.push('/locations');
            })} >Register</button>
        </div>
      </div>
    )
  }
};

export default withRouter(Signup);