import { render } from 'react-dom';
import App from './components/app/app';
import React from 'react';


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);