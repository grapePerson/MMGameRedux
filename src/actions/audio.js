import { PLAY_MAIN_THEME, PLAY_CARDS_THEME, MAIN_THEME, VOLUME_UP, VOLUME_DOWN, STOP_MAIN_THEME, REMOVE_CARDS_THEME  } from "../constants/audio";


export const playMainTheme = () => ({
  type: PLAY_MAIN_THEME,
  payload : MAIN_THEME
});

export const stopMainTheme = () => ({
  type: STOP_MAIN_THEME,
  payload : MAIN_THEME
});

export const volumeDown = () => ({
  type: VOLUME_DOWN,
  payload : MAIN_THEME
});

export const volumeUp = () => ({
  type: VOLUME_UP,
  payload : MAIN_THEME
});

export const playCardTheme = (idAudio) => ({
  type: PLAY_CARDS_THEME,
  payload : idAudio
});

export const removeCardsTheme = () => ({
  type: REMOVE_CARDS_THEME
});
