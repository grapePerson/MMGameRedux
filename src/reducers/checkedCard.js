import { ADD_TO_CHECKED_CARD, CLEAR_CHECKED_CARD, USER_CAN_CLICK_ON, USER_CAN_CLICK_OFF } from "../constants/checkedCard";

 const initialState = {
   url: "",
   id: "",
   userCanClick: true
 }


 export default function checkedCard(state = initialState,action) {
   switch (action.type) {
     case ADD_TO_CHECKED_CARD:
       return ({...state, url: action.payload.url, id: action.payload.id })
       break;
     case CLEAR_CHECKED_CARD:
       return ({...state, url: action.payload.url, id: action.payload.id })
       break;
     case USER_CAN_CLICK_ON:
       return ({...state, userCanClick: action.payload.userCanClick })
       break;
     case USER_CAN_CLICK_OFF:
       return ({...state, userCanClick: action.payload.userCanClick })
       break;
     default:
       return state;
   }
 }
