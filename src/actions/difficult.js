import { SET_DIFFICULT } from "../constants/difficult";

export const setDifficlt = (difficult) =>{
  return (dispatch) => {
    dispatch({type: SET_DIFFICULT, payload: difficult});
  }
}
