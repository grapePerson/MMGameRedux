import ReactDOM from 'react-dom';
import React from 'react';
import { Route } from "react-router";
import { ConnectedRouter,  push} from "react-router-redux";
import { importAll } from './utils/index';
import  App  from './App';
import { Provider } from 'react-redux';
import store, { history }  from './store';
const fonts = importAll(require.context('./fonts', false, /\.(ttf)$/));
const sass = require("./index.scss");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);
