import { HAND_OUT_CARDS, COMPARE_CARDS, ADD_FLIPP} from "../constants/game";

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
