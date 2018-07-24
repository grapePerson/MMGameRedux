import { SAVE_CARDS_ORDER } from "../constants/game";
import { importAll } from '../utils/index';
import shuffle from '../utils/index';

let images = importAll(require.context('../components/game/images', false, /\.(png|jpe?g|svg)$/));
images = shuffle(images);

const initialState = {
  cards: images,
  cardsOrder: []
};

export default function game(state = initialState,action) {
  if(action.type === SAVE_CARDS_ORDER){
    return ({ ...state, cardsOrder: action.payload})
  }else{
    return state
  }
}
