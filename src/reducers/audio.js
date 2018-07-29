import { PLAY_MAIN_THEME, PLAY_CARDS_THEME, VOLUME_UP, VOLUME_DOWN, STOP_MAIN_THEME, REMOVE_CARDS_THEME  } from "../constants/audio";
import { importAllAudio, playAudio, volumeUp, volumeDown, pauseAudio } from '../utils/index';

let audioArr = importAllAudio(require.context('../audio', false, /\.(mp3|wav)$/));
 const initialState = {
   files: audioArr,
   mainTheme: "stop",
   cardTheme: ''
 }


 export default function audio(state = initialState,action) {
   switch (action.type) {
     case PLAY_MAIN_THEME:
       playAudio(action.payload);
       return ({...state, mainTheme: "stop"})
       break;
     case STOP_MAIN_THEME:
       pauseAudio(action.payload);
       return ({...state, mainTheme: "play"})
       break;
     case VOLUME_UP:
       volumeUp(action.payload);
       return ({...state })
       break;
     case VOLUME_DOWN:
       volumeDown(action.payload);
       return ({...state })
       break;
     case REMOVE_CARDS_THEME:
       return ({...state, cardTheme: ''})
       break;
     case PLAY_CARDS_THEME:
       if(state.cardTheme !== action.payload && action.payload !== ''){
         playAudio(action.payload);
       }
       return ({...state, cardTheme: action.payload })
       break;
     default:
       return state;
   }
 }
