import { push } from 'react-router-redux';
import { SET_DIFFICULT } from "../constants/difficult";
import { history }  from '../store';

export const setDifficlt = (difficult) => {
  history.push('/game');
  return({
    type: SET_DIFFICULT,
    payload: difficult
  });
};
