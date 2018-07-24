import { CHANGE_SHIRT } from "../constants/cardShirt";
import { importAll } from '../utils/index';

let images = importAll(require.context('../components/cardShirt/images', false, /\.(png|jpe?g|svg)$/));
const initialState = {
  checkedShirt: 'images/Blizzard-shirt.png',
  allShirts: images
};

export default function cardShirt(state = initialState,action) {
  if(action.type === CHANGE_SHIRT){
    return {...state, checkedShirt: action.payload}
  }else {
    return state
  }
}
