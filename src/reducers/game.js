import { HAND_OUT_CARDS, COMPARE_CARDS, ADD_FLIPP} from "../constants/game";
import { INITIAL_DIFFICULT } from "../constants/difficult";
import { importAll } from '../utils/index';
import shuffle from '../utils/index';
import { setDifficultForCards, createOrderCards, addHideCardClass, removeFlippClass, addFlippClass } from '../utils/index';

let imagesArr = importAll(require.context('../components/game/images', false, /\.(png|jpe?g|svg)$/));
let cardsDeck = setDifficultForCards( INITIAL_DIFFICULT ,imagesArr);
let cardsList = createOrderCards( INITIAL_DIFFICULT ,cardsDeck);


const initialState = {
  initialArrImg : imagesArr,
  cards: cardsList
};

export default function game(state = initialState,action) {
  switch (action.type) {
    case COMPARE_CARDS:
      const CardsListCopy = [...state.cards];
      if(action.payload.checkedCard.url === action.payload.clickedCardUrl) {
        let cardsList = addHideCardClass(CardsListCopy, action.payload.clickedCardUrl);
        return { ...state, cards: cardsList};
      }else{
        let cardsList = removeFlippClass(CardsListCopy, action.payload.checkedCard, action.payload.clickedCardId);
        return { ...state, cards: cardsList};
      }
      break;
    case ADD_FLIPP:
      const ListCardsCopy = [...state.cards];
      let cardsList = addFlippClass(ListCardsCopy, action.payload.clickedCardId)
      return { ...state, cards: cardsList};
      break;
    case HAND_OUT_CARDS:
      const stateInitialArrImgCopy = [...state.initialArrImg];
      let cardsDeck = setDifficultForCards(action.payload, stateInitialArrImgCopy);
      let orderCardsList = createOrderCards(action.payload, cardsDeck);
      return {...state, cards : orderCardsList};
      break;
    default:
      return state;
  }
}
