import { CHANGE_SHIRT} from "../constants/cardShirt";

export const changeShirt = (imgUrl) => ({
  type: CHANGE_SHIRT,
  payload: imgUrl
});
