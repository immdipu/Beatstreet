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
  SEARCH_SONGS_SUCESS,
  SEARCH_ALBUMS_SUCESS,
  NEXT_SEARCHED_ALBUMS,
  NEXT_PAGE_BTN_ALBUMS,
  PLAYING_CURRENT_ALBUM,
  PLAYING_CURRENT_ARTIST,
  PLAYING_CURRENT_PLAYLIST,
  PLAYING_VIEWALLSONGS_LISTS,
  PLAYING_RECENT_PLAYED_LISTS,
  PLAYING_USER_PLAYLIST,
  GET_RECENT_SONGS_BEGIN,
  GET_RECENT_SONGS_SUCCESS,
  GET_RECENT_SONGS_FAILED,
  GET_FAVORITE_SONGS_BEGIN,
  GET_FAVORITE_SONGS_SUCCESS,
  GET_FAVORITE_SONGS_FAILED,
  PLAYING_FAVORITES_LISTS,
  GET_ALL_PLAYLISTS_BEGIN,
  GET_ALL_PLAYLISTS_SUCCESS,
  GET_ALL_PLAYLISTS_FAILED,
  GET_USER_SINGLE_PLAYLIST_BEGIN,
  GET_USER_SINGLE_PLAYLIST_SUCCESS,
  GET_USER_SINGLE_PLAYLIST_FAILED,
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

  if (action.type === SEARCH_SONGS_SUCESS) {
    const data = action.payload;
    return { ...state, search_loading: false, search_songs: data };
  }

  if (action.type === SEARCH_ALBUMS_SUCESS) {
    const data = action.payload;
    return { ...state, search_loading: false, search_albums: data };
  }

  if (action.type === SEARCH_ERROR) {
    return {
      ...state,
    };
  }

  if (action.type === NEXT_SEARCHED_ARRAY) {
    const data = action.payload;
    let newdata = [...state.search_songs, ...data];
    return {
      ...state,
      search_songs: newdata,
    };
  }
  if (action.type === NEXT_SEARCHED_ALBUMS) {
    const data = action.payload;
    let newdata = [...state.search_albums, ...data];
    return {
      ...state,
      search_albums: newdata,
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
  if (action.type === NEXT_PAGE_BTN_ALBUMS) {
    if (state.current_page_count === 7) {
      return { ...state };
    } else {
      return {
        ...state,
        current_page_count_albums: state.current_page_count_albums + 1,
      };
    }
  }

  if (action.type === LEFT_MENU_BTN) {
    return { ...state, side_navbar_show: !state.side_navbar_show };
  }

  if (action.type === PLAYING_CURRENT_ALBUM) {
    const data = action.payload;
    const id = data.map((song) => song.id);
    return { ...state, current_playing_lists: id };
  }

  if (action.type === PLAYING_CURRENT_ARTIST) {
    const data = action.payload;
    const id = data.map((song) => song.id);
    return { ...state, current_playing_lists: id };
  }

  if (action.type === PLAYING_CURRENT_PLAYLIST) {
    const data = action.payload;
    const id = data.map((song) => song.id);
    return { ...state, current_playing_lists: id };
  }
  if (action.type === PLAYING_VIEWALLSONGS_LISTS) {
    const data = state.search_songs;
    const id = data.map((song) => song.id);
    return { ...state, current_playing_lists: id };
  }
  if (action.type === PLAYING_RECENT_PLAYED_LISTS) {
    const data = state.recent_songs;
    const id = data.map((song) => song.id);
    return { ...state, current_playing_lists: id };
  }
  if (action.type === PLAYING_FAVORITES_LISTS) {
    const data = state.favorites_songs;
    const id = data.map((song) => song.id);
    return { ...state, current_playing_lists: id };
  }
  if (action.type === PLAYING_USER_PLAYLIST) {
    const data = state.user_single_playlist.songs;
    const id = data.map((song) => song.id);
    return { ...state, current_playing_lists: id };
  }

  if (action.type === GET_RECENT_SONGS_BEGIN) {
    return { ...state, recent_song_loading: true };
  }

  if (action.type === GET_RECENT_SONGS_SUCCESS) {
    const data = action.payload;
    return { ...state, recent_song_loading: false, recent_songs: data };
  }

  if (action.type === GET_RECENT_SONGS_FAILED) {
    return { ...state, recent_song_loading: false };
  }

  if (action.type === GET_FAVORITE_SONGS_BEGIN) {
    return { ...state, favorite_songs_loading: true };
  }

  if (action.type === GET_FAVORITE_SONGS_SUCCESS) {
    const data = action.payload;
    return { ...state, favorite_songs_loading: false, favorites_songs: data };
  }

  if (action.type === GET_FAVORITE_SONGS_FAILED) {
    return { ...state, favorite_songs_loading: false };
  }
  if (action.type === GET_ALL_PLAYLISTS_BEGIN) {
    return { ...state, all_playlists_loading: true };
  }
  if (action.type === GET_ALL_PLAYLISTS_SUCCESS) {
    let data = action.payload;
    return { ...state, all_playlists_loading: false, all_playlists: data };
  }
  if (action.type === GET_ALL_PLAYLISTS_FAILED) {
    return { ...state, all_playlists_loading: false };
  }
  if (action.type === GET_USER_SINGLE_PLAYLIST_BEGIN) {
    return { ...state, user_single_playlist_loading: true };
  }
  if (action.type === GET_USER_SINGLE_PLAYLIST_SUCCESS) {
    let data = action.payload;
    return {
      ...state,
      user_single_playlist_loading: false,
      user_single_playlist: data,
    };
  }
  if (action.type === GET_USER_SINGLE_PLAYLIST_FAILED) {
    return { ...state, user_single_playlist_loading: false };
  }

  throw new Error(`No Matching "${action.type}" -action type`);
};

export default Player_Reducer;
