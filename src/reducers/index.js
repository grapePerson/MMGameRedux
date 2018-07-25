import { combineReducers } from 'redux';
import {routerReducer} from "react-router-redux";
import registrationForm from './registrationForm';
import top from './top';
import game from './game';
import cardShirt from './cardShirt';
import difficult from './difficult';
import checkedCard from './checkedCard';

export default combineReducers({registrationForm, top, router: routerReducer, game, cardShirt, difficult, checkedCard});
