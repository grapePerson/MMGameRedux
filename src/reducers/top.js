import { TOP_SCORE_REQUEST, TOP_SCORE_SUCCESS, TOP_SCORE_FAILED, CLOSE_SCORE } from "../constants/top";
import { importAll } from '../utils/index';

let imagesArr = importAll(require.context('../components/top/images', false, /\.(gif)$/));

const initialState = {
  score:{status:'empty',topPlayers:[]}
};

export default function top(state = initialState, action) {
  switch (action.type) {
    case TOP_SCORE_REQUEST:
      return {score : action.payload};
      break;
    case TOP_SCORE_SUCCESS:
      return {score : action.payload};
      break;
    case TOP_SCORE_FAILED:
      return {score : action.payload};
      break;
    case CLOSE_SCORE:
      return {score : action.payload};
      break;
    default:
      return state;
  }
}
