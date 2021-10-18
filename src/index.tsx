import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import Moment from 'react-moment';
import './style/css/main.css';
import { IconContext } from 'react-icons';
import { createBrowserHistory } from 'history';
import moment from 'moment';

export const history = createBrowserHistory();

Moment.globalMoment = moment;
Moment.globalLocale = 'pl';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <IconContext.Provider value={{ className: 'icon' }}>
          <App />
        </IconContext.Provider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
