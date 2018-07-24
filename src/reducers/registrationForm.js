import { START_GAME, CHECK_USER_DATA_REQUEST, CHECK_USER_DATA_FAILED } from "../constants/registrationForm";

const initialState = {
  gameStage: 'rules',
  status: 'guest'
};

export default function registrationForm(state = initialState,action) {
  switch (action.type) {
    case START_GAME:
      return {gameStage : action.payload.gameStage, status : action.payload.status};
      break;
    case CHECK_USER_DATA_REQUEST:
      return {...state, status : action.payload.status};
      break;
    case CHECK_USER_DATA_FAILED:
      return {...state, status : action.payload.status};
      break;
    default:
      return state;
  }
}
