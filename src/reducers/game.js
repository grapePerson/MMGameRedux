import { HAND_OUT_CARDS } from "../constants/game";

const initialState = {
  cards: []
};

export default function field(state = initialState,action) {
  if(action.type === HAND_OUT_CARDS){
    return ({
      cards: action.payload
    })
  }else{
    return state
  }
}
