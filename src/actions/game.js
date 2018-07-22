import { HAND_OUT_CARDS } from "../constants/game";

export const handOutCards = (imgUrls) => ({
  type: HAND_OUT_CARDS,
  payload: imgUrls
});
