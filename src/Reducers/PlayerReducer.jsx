import {
  PLAY_SONG_BEGIN,
  PLAY_SONG_SUCESS,
  PLAY_SONG_ERROR,
  RIGHT_MENU_BTN,
  SEARCH_BEGIN,
  SEARCH_SUCESS,
  SEARCH_ERROR,
  PREV_PAGE_BTN,
  NEXT_PAGE_BTN,
  NEW_SEARCH_BEGIN,
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

  if (action.type === SEARCH_BEGIN) {
    return { ...state, search_loading: true };
  }
  if (action.type === NEW_SEARCH_BEGIN) {
    return { ...state, search_loading: true, current_page_count: 1 };
  }

  if (action.type === SEARCH_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      search_results: data,
      search_loading: false,
    };
  }

  if (action.type === PREV_PAGE_BTN) {
    if (state.current_page_count === 1) {
      return { ...state };
    } else {
      return { ...state, current_page_count: state.current_page_count - 1 };
    }
  }
  if (action.type === NEXT_PAGE_BTN) {
    if (state.current_page_count === 7) {
      return { ...state };
    } else {
      return { ...state, current_page_count: state.current_page_count + 1 };
    }
  }

  throw new Error(`No Matching "${action.type}" -action type`);
};

export default Player_Reducer;
