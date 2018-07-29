import { HAND_OUT_CARDS, COMPARE_CARDS, ADD_FLIPP,
        CHECK_CARDS_COUNT, REDIRECT_TO_WINNER_COMPONENT
       } from "../constants/game";

import { INITIAL_DIFFICULT } from "../constants/difficult";
import shuffle from '../utils/index';
import { importAll, timer } from '../utils/index';

import { setDifficultForCards, createOrderCards, addHideCardClass, removeFlippClass, addFlippClass, checkHideenCards } from '../selectors/index';


let imagesArr = importAll(require.context('../components/game/images', false, /\.(png|jpe?g|svg)$/));
let cardsDeck = setDifficultForCards( INITIAL_DIFFICULT ,imagesArr);
let cardsList = createOrderCards( INITIAL_DIFFICULT ,cardsDeck);


const initialState = {
  initialArrImg : imagesArr,
  cards: cardsList,
  gameOver: false,
  time: '0',
  playFile: '',
  click: 0
};

export default function game(state = initialState,action) {
  switch (action.type) {
    case COMPARE_CARDS:
      const CardsListCopy = [...state.cards];
      if(action.payload.checkedCard.url === action.payload.clickedCardUrl) {
        let cardsList = addHideCardClass(CardsListCopy, action.payload.clickedCardUrl);
        return { ...state, cards: cardsList, playFile: action.payload.clickedCardUrl};
      }else{
        let cardsList = removeFlippClass(CardsListCopy, action.payload.checkedCard, action.payload.clickedCardId);
        return { ...state, cards: cardsList, playFile: ''};
      }
      break;
    case ADD_FLIPP:
      const ListCardsCopy = [...state.cards];
      let copy = {...state};
      let cardsList = addFlippClass(ListCardsCopy, action.payload.clickedCardId)
      return { ...state, cards: cardsList, playFile: '', click: copy.click+1};
      break;
    case REDIRECT_TO_WINNER_COMPONENT:
      return { ...state };
      break;
    case HAND_OUT_CARDS:
      timer.reset();
      timer.start();
      const stateInitialArrImgCopy = [...state.initialArrImg];
      let cardsDeck = setDifficultForCards(action.payload, stateInitialArrImgCopy);
      let orderCardsList = createOrderCards(action.payload, cardsDeck);
      return {...state, cards : orderCardsList, gameOver: false, time: '0', click: 0, playFile: ''};
      break;
    case CHECK_CARDS_COUNT:
      let ClickedCards = [...state.cards]
      let gameEnd = checkHideenCards(ClickedCards);
      if(gameEnd.some(elem => elem === false)){
        return {...state };
      }else{
        timer.stop();
        return {...state, gameOver : true , time : timer.showTime};
      }
      break;
    default:
      return state;
  }
}
