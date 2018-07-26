import { SET_DIFFICULT, INITIAL_DIFFICULT } from "../constants/difficult";

const initialState ={
  gameDifficult : INITIAL_DIFFICULT,
  allDifficults : ['5 x 2', '6 x 3', '8 x 3']
}

export default function difficult(state = initialState,action) {
  if(action.type === SET_DIFFICULT){
    return {...state, gameDifficult: action.payload}
  }else{
    return state
  }
}
