import { push } from 'react-router-redux';
import { START_GAME, CHECK_USER_DATA_REQUEST, CHECK_USER_DATA_FAILED } from "../constants/registrationForm";
import { history }  from '../store';

export const checkUserData = (username,email) => {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type","application/json");
  return (dispatch) => {
    dispatch({ type : CHECK_USER_DATA_REQUEST, payload:{status: 'guest', message : 'checking userName and Email'} });
    const url = 'https://mmg-score.herokuapp.com';
    fetch(url,{method: 'GET',headers:myHeaders})
    .then(
          response => response.json() ,
          error => dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'guest', message : 'error on server side' }})
    )
    .then(
      data =>{
        console.log(data);
        if(data.result.some(elem => elem.username === username)){
           dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'guest', message : 'name is required'  }});
           history.push('/error');
        }else if (data.result.some(elem => elem.email === email)) {
           dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'guest', message : 'email is required' }});
           history.push('/error');
        }else {
           dispatch({ type : START_GAME, payload : {status: 'registrationIsDone', gameStage : 'startGame', message : 'all is cool', user: username, userEmail: email }});
           history.push('/game');
        }
      }
    )
  };

};

export const checkLoginData = (username,email) => {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type","application/json");
  return (dispatch) => {
    dispatch({ type : CHECK_USER_DATA_REQUEST, payload:{status: 'guest', message : 'checking userName and Email'} });
    const url = 'https://mmg-score.herokuapp.com';
    fetch(url,{method: 'GET',headers:myHeaders})
    .then(
          response => response.json() ,
          error => dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'guest', message : 'error on server side' }})
    )
    .then(
      data =>{
          if(data.result.some(( elem ) => (elem.username === username && elem.email === email))){
            dispatch({ type : START_GAME, payload : {status: 'userLoggedIn', gameStage : 'startGame', message : 'all is cool', user: username, userEmail: email}});
            history.push('/game');
          } else {
            dispatch({ type : CHECK_USER_DATA_FAILED, payload : {status: 'guest', message : 'wrong data' }});
            history.push('/error');
          }
      }
    )
  };

};
