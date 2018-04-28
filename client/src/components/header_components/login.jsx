import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      username: '',
      password: '',
      failedLogin: ''
    };
    
    this.updateInfo = this.updateInfo.bind(this);
    this.sendLogin = this.props.sendLogin.bind(this);
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
      failedLogin: ''
    });
  }

  // sendLogin(creds) {
  //   axios.post('/api/login', creds)
  //     .then((data) => {
  //       window.location.replace(`${window.location.origin}/locations`);
  //     })
      
  //     .catch((err) => {
  //       this.setState({
  //         failedLogin: 'Incorrect username or password.'
  //       })
  //       throw err; 
  //     });
  // }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-username">
            <label htmlFor="username">Username:</label> 
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={this.updateInfo}
            />
          </div>
          <div className="modal-password">
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
          <span className={ !this.state.failedLogin ? "go" : "stop" }>
            {this.state.failedLogin}
          </span>
          <a onClick={this.props.showSignup}>Need an account?</a>
          <button type="button" onClick={(e) => this.sendLogin(this.state).then(data => {
            this.props.history.push('/locations');
          })} >Login</button>
        </div>
      </div>
    );
  }
};

export default withRouter(Login);