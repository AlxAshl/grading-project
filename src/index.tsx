import { render } from 'react-dom';
import App from './components/app/app';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store'


render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
