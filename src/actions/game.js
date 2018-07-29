import { push } from 'react-router-redux';
import { HAND_OUT_CARDS, COMPARE_CARDS, ADD_FLIPP, CHECK_CARDS_COUNT, REDIRECT_TO_WINNER_COMPONENT} from "../constants/game";
import { history }  from '../store';

export const handOutCards = ( difficult ) => {
  return{
    type: HAND_OUT_CARDS,
    payload: difficult
  }
};

export const compareCards = (objCheckedCard, cardUrl, cardId ) => ({
  type: COMPARE_CARDS,
  payload: {checkedCard: objCheckedCard, clickedCardUrl: cardUrl , clickedCardId: cardId  }
})


export const addFlipp = (cardId) => {
  return {
    type: ADD_FLIPP,
    payload: { clickedCardId: cardId  }
  }
}

export const checkCardsCount = () => {
  return {
    type: CHECK_CARDS_COUNT
  }
}

export const redirectToWinner = () => {
  history.push('/winner');
  return {
    type: REDIRECT_TO_WINNER_COMPONENT
  }
}
