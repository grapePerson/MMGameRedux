import { SAVE_CARDS_ORDER } from "../constants/game";

export const saveCardsOrder = (imgUrls) => ({
  type: SAVE_CARDS_ORDER,
  payload: imgUrls
});
