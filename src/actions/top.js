import { TOP_SCORE_REQUEST, TOP_SCORE_SUCCESS, TOP_SCORE_FAILED, CLOSE_SCORE } from "../constants/top";
import { compareNumeric } from '../utils/index';

export const getTopScore = () => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type","application/json");
  return (dispatch) => {
    dispatch({ type : TOP_SCORE_REQUEST,payload:{status: 'data is loading'} });
    const url = 'https://mmg-score.herokuapp.com';
    fetch(url,{method: 'GET',headers:myHeaders})
    .then(
      response => response.json() ,
      error => dispatch({ type : TOP_SCORE_FAILED, payload : {status: 'error' }})
    )
    .then(
      data => dispatch({ type : TOP_SCORE_SUCCESS, payload : {status: 'loaded' , topPlayers: data.result.sort(compareNumeric)} })
    )
  };
};
