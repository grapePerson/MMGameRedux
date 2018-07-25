import { ADD_TO_CHECKED_CARD, CLEAR_CHECKED_CARD, USER_CAN_CLICK_ON, USER_CAN_CLICK_OFF } from "../constants/checkedCard";

export const addToCheckedCard = (urlCard, idCard) => ({
  type: ADD_TO_CHECKED_CARD,
  payload: { url: urlCard, id: idCard }
});

export const clearCheckedCard = () => ({
  type: CLEAR_CHECKED_CARD,
  payload: { url: "", id: "" }
});

export const userCanClickOn = () => ({
  type: USER_CAN_CLICK_ON,
  payload: { userCanClick: true }
});

export const userCanClickOff = () => ({
  type: USER_CAN_CLICK_OFF,
  payload: { userCanClick: false }
});
