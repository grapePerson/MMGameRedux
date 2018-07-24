import { SET_DIFFICULT } from "../constants/difficult";
import { SAVE_CARDS_ORDER } from "../constants/game";

export const setDifficlt = (difficult) =>{
  return (dispatch) => {
    dispatch({type: SET_DIFFICULT, payload: difficult});
    dispatch({type: SAVE_CARDS_ORDER, payload: [] });
  }
}
