import {
  PLAY_SONG_BEGIN,
  PLAY_SONG_SUCESS,
  PLAY_SONG_ERROR,
  RIGHT_MENU_BTN,
  SEARCH_BEGIN,
  SEARCH_SUCESS,
  SEARCH_ERROR,
  NEXT_PAGE_BTN,
  NEW_SEARCH_BEGIN,
  LEFT_MENU_BTN,
  NEXT_SEARCHED_ARRAY,
  NEXT_SEARCHED_ARRAY_ERROR,
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

  if (action.type === SEARCH_ERROR) {
    return {
      ...state,
    };
  }

  if (action.type === NEXT_SEARCHED_ARRAY) {
    const data = action.payload;
    let newdata = [...state.search_results, ...data];
    return {
      ...state,
      search_results: newdata,
    };
  }

  if (action.type === NEXT_SEARCHED_ARRAY_ERROR) {
    return {
      ...state,
      has_more: false,
    };
  }

  if (action.type === NEXT_PAGE_BTN) {
    if (state.current_page_count === 7) {
      return { ...state };
    } else {
      return { ...state, current_page_count: state.current_page_count + 1 };
    }
  }

  if (action.type === LEFT_MENU_BTN) {
    return { ...state, side_navbar_show: !state.side_navbar_show };
  }

  throw new Error(`No Matching "${action.type}" -action type`);
};

export default Player_Reducer;
