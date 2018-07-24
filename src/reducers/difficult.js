import { SET_DIFFICULT } from "../constants/difficult";

const initialState ={
  gameDifficult : '8 x 3',
  allDifficults : ['5 x 2', '6 x 3', '8 x 3']
}

export default function difficult(state = initialState,action) {
  if(action.type === SET_DIFFICULT){
    return {...state, gameDifficult: action.payload}
  }else{
    return state
  }
}
