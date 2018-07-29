import { START_GAME, CHECK_USER_DATA_REQUEST, CHECK_USER_DATA_FAILED } from "../constants/registrationForm";
import { timer } from '../utils/index';

const initialState = {
  gameStage: 'rules',
  status: 'guest',
  message: '',
  user: '',
  userEmail: ''
};

export default function registrationForm(state = initialState,action) {
  switch (action.type) {
    case START_GAME:
      timer.start();
      return {gameStage : action.payload.gameStage, status : action.payload.status, message : action.payload.message, user: action.payload.user, userEmail: action.payload.userEmail};
      break;
    case CHECK_USER_DATA_REQUEST:
      return {...state, status : action.payload.status, message : action.payload.message};
      break;
    case CHECK_USER_DATA_FAILED:
      return {...state, status : action.payload.status, message : action.payload.message};
      break;
    default:
      return state;
  }
}
