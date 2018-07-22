import { START_GAME, CHECK_USER_DATA_REQUEST, CHECK_USER_DATA_FAILED } from "../constants/registrationForm";
import { history }  from '../store';
import { push } from 'react-router-redux'

export const checkUserData = (username,email) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type","application/json");
  return (dispatch) => {
    dispatch({ type : CHECK_USER_DATA_REQUEST, payload:{status: 'checking userName and Email'} });
    const url = 'https://mmg-score.herokuapp.com';
    fetch(url,{method: 'GET',headers:myHeaders})
    .then(
          response => response.json() ,
          error => dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'error on server side' }})
    )
    .then(
      data =>{
        if(data.result.some(elem => elem.username === username)){
          return dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'name is required' }})
        }else if (data.result.some(elem => elem.email === email)) {
          return dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'email is required' }})
        }else {
          history.push('/game');
          return dispatch({ type : START_GAME, payload : {status: 'LoggedIn', gameStage : 'startGame'}})
        }
      }
    )
  };
};
