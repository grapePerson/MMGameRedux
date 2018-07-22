import ReactDOM from 'react-dom';
import React from 'react';
import { Route } from "react-router";
import { ConnectedRouter,  push} from "react-router-redux";

import  App  from './containers/App';
import { Provider } from 'react-redux';
import store, { history }  from './store';

const sass = require("./index.scss");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);
