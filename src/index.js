import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//virtual DOM is synced with real DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
