import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './pages/App';
import Login from './pages/login';
import registerServiceWorker from './registerServiceWorker';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));