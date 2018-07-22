import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import reducer from './reducers/index';

export const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducer,applyMiddleware(thunk,logger,middleware));
console.log(store.getState());
export default store;
