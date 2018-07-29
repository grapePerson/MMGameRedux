import { SAVE_SCORE_REQUEST, SAVE_SCORE_REQUEST_FAILED, SCORE_SAVED, CLEAR_SCORE_MESSAGE }  from "../constants/saveScore";

const initialState = {
  request: false,
  message: ''
};

export default function saveScore(state = initialState,action) {
  switch (action.type) {
    case SAVE_SCORE_REQUEST:
      return { ...state,request: action.payload.request };
      break;
    case SAVE_SCORE_REQUEST_FAILED:
      return { request: action.payload.request, message: action.payload.message };
      break;
    case SCORE_SAVED:
      return { request: action.payload.request, message: action.payload.message };
      break;
    case CLEAR_SCORE_MESSAGE:
      return {...state, message: action.payload.message  };
      break;
    default:
      return state;
  }
}
