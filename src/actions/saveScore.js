import { SAVE_SCORE_REQUEST, SAVE_SCORE_REQUEST_FAILED, SCORE_SAVED, CLEAR_SCORE_MESSAGE }  from "../constants/saveScore";

export const saveUserScore = (name,userEmail,click) => {
  let userData = {
    username: name,
    email: userEmail,
    score: click
  }
  let myHeaders = new Headers();
  myHeaders.append("Content-Type","application/json");
  return (dispatch) => {
    dispatch({ type : SAVE_SCORE_REQUEST, payload:{ request: true } });
    const url = 'https://mmg-score.herokuapp.com';
    fetch(url,{method: 'POST',headers:myHeaders,body: JSON.stringify(userData)})
    .then(
          response => response.json() ,
          error => dispatch({ type : SAVE_SCORE_REQUEST_FAILED, payload : { request: false, message : 'error on server side' }})
    )
    .then(
          data => dispatch({ type : SCORE_SAVED, payload : {request: false, message : 'Score is saved' } })
    )
  }
};

export const clearScoreMessage = () => ({
  type: CLEAR_SCORE_MESSAGE,
  payload:{ message: ''}
})
