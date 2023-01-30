import {
  PLAY_SONG_BEGIN,
  PLAY_SONG_SUCESS,
  PLAY_SONG_ERROR,
  RIGHT_MENU_BTN,
} from "../Actions";
const Player_Reducer = (state, action) => {
  if (action.type === PLAY_SONG_BEGIN) {
    return { ...state, play_song_loading: true };
  }
  if (action.type === PLAY_SONG_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      current_song: data,
      play_song_loading: false,
      audio_playing: true,
      side_menu_show: true,
    };
  }

  if (action.type === RIGHT_MENU_BTN) {
    return { ...state, side_menu_show: !state.side_menu_show };
  }

  throw new Error(`No Matching "${action.type}" -action type`);
};

export default Player_Reducer;
