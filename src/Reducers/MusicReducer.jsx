import {
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_SUCESS,
  GET_HOMEDATA_ERROR,
  GET_SINGLE_ALBUM_BEGIN,
  GET_SINGLE_ALBUM_SUCESS,
  GET_SINGLE_ALBUM_ERROR,
  ALERT_SHOW,
  GET_SINGLE_PLAYLIST_BEGIN,
  GET_SINGLE_PLAYLIST_SUCESS,
  GET_SINGLE_PLAYLIST_ERROR,
} from "../Actions";

const Music_reducer = (state, action) => {
  if (action.type === GET_HOME_DATA_BEGIN) {
    return { ...state, homeData_loading: true };
  }
  if (action.type === GET_HOME_DATA_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      Albums: data.albums,
      playlists: data.playlists,
      charts: data.charts,
      trendingAlbums: data.trending.albums,
      trendingSongs: data.trending.songs,
      homeData_loading: false,
    };
  }

  if (action.type === GET_SINGLE_ALBUM_BEGIN) {
    return { ...state, single_album_loading: true };
  }
  if (action.type === GET_SINGLE_ALBUM_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      currentAlbum: data,
      single_album_loading: false,
    };
  }

  if (action.type === GET_SINGLE_PLAYLIST_BEGIN) {
    return { ...state, single_album_loading: true };
  }

  if (action.type === GET_SINGLE_PLAYLIST_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      currentPlaylists: data,
      single_album_loading: false,
    };
  }

  if (action.type === ALERT_SHOW) {
    return { ...state, alert_show: false };
  }
  throw new Error(`No Matching "${action.type}" -action type`);
};

export default Music_reducer;
