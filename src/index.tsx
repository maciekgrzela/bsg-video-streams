import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import Moment from 'react-moment';
import './style/css/main.css';
import { IconContext } from 'react-icons';

const moment = require('moment/min/moment-with-locales');

Moment.globalMoment = moment;
Moment.globalLocale = 'pl';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <IconContext.Provider value={{ className: 'icon' }}>
          <App />
        </IconContext.Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
