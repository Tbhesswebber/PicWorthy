import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

ReactDOM.render((
  <BrowserRouter className="fullh fullw">
    <App />
  </BrowserRouter>
), document.getElementById('app'));
