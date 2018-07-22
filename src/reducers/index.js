import { combineReducers } from 'redux';
import {routerReducer} from "react-router-redux";
import registrationForm from './registrationForm';
import top from './top';
import game from './game';

export default combineReducers({registrationForm,top,router: routerReducer,game});