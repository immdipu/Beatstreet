import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  useRef,
} from "react";
import axios from "axios";
import reducer from "../Reducers/PlayerReducer";
import {
  PLAY_SONG_BEGIN,
  PLAY_SONG_SUCESS,
  PLAY_SONG_ERROR,
  RIGHT_MENU_BTN,
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
  PLAYING_USER_PLAYLIST,
  PLAYING_VIEWALLSONGS_LISTS,
  GET_RECENT_SONGS_BEGIN,
  GET_RECENT_SONGS_SUCCESS,
  GET_RECENT_SONGS_FAILED,
  PLAYING_RECENT_PLAYED_LISTS,
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

const playerContext = React.createContext();

const initialState = {
  side_menu_show: false,
  side_navbar_show: false,
  audio_playing: false,
  play_song_loading: false,
  search_loading: false,
  has_more: true,
  has_more_albums: true,
  current_song: {},
  search_results: null,
  search_songs: [],
  search_albums: [],
  current_album: [],
  current_page_count: 1,
  current_page_count_albums: 1,
  current_playing_lists: [],
  recent_songs: [],
  favorites_songs: [],
  recent_song_loading: false,
  favorite_songs_loading: false,
  all_playlists_loading: false,
  all_playlists: [],
  user_single_playlist_loading: false,
  user_single_playlist: {},
};

import { useMusicContext } from "../Context/MusicContext";

const axiosInstance = axios.create({ withCredentials: true });

export const PlayerProvider = ({ children }) => {
  const { currentAlbum, single_artist_songs, currentPlaylists } =
    useMusicContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  const singleSong = async (id) => {
    dispatch({ type: PLAY_SONG_BEGIN });
    try {
      const res = await axios.get(`https://saavn.me/songs?id=${id}`);
      const result = res.data.data[0];
      dispatch({ type: PLAY_SONG_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: PLAY_SONG_ERROR });
    }
  };

  const SearchAll = async (text) => {
    dispatch({ type: NEW_SEARCH_BEGIN });
    try {
      const res = await axios.get(`https://saavn.me/search/all?query=${text}`);
      const result = res.data.data;
      dispatch({ type: SEARCH_SUCESS, payload: result });
    } catch (error) {
      console.log(error);
      dispatch({ type: SEARCH_ERROR });
    }
  };

  const SearchSongs = async (keyword) => {
    dispatch({ type: NEW_SEARCH_BEGIN });
    try {
      const res = await axios.get(
        `https://saavn.me/search/songs?query=${keyword}}&page=1`
      );

      const result = res.data.data.results;
      dispatch({ type: SEARCH_SONGS_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };

  const SearchAlbums = async (keyword) => {
    dispatch({ type: NEW_SEARCH_BEGIN });
    try {
      const res = await axios.get(
        `https://saavn.me/search/albums?query=${keyword}}&page=1`
      );

      const result = res.data.data.results;
      dispatch({ type: SEARCH_ALBUMS_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };

  const PageChange = async (text, page) => {
    try {
      const res = await axios.get(
        `https://saavn.me/search/songs?query=${text}&page=${page}`
      );
      const result = res.data.data.results;
      dispatch({ type: NEXT_SEARCHED_ARRAY, payload: result });
    } catch (error) {
      dispatch({ type: NEXT_SEARCHED_ARRAY_ERROR });
    }
  };

  const AlbumsPageChange = async (text, page) => {
    try {
      const res = await axios.get(
        `https://saavn.me/search/albums?query=${text}&page=${page}`
      );
      const result = res.data.data.results;
      dispatch({ type: NEXT_SEARCHED_ALBUMS, payload: result });
    } catch (error) {
      dispatch({ type: NEXT_SEARCHED_ARRAY_ERROR });
    }
  };

  const HandleRightSideMenu = () => {
    dispatch({ type: RIGHT_MENU_BTN });
  };

  const HandleNextPageBtn = (key) => {
    dispatch({ type: NEXT_PAGE_BTN });
    PageChange(key, state.current_page_count);
  };

  const HandleNextPageBtn_Albums = (key) => {
    dispatch({ type: NEXT_PAGE_BTN_ALBUMS });
    AlbumsPageChange(key, state.current_page_count_albums);
  };

  const HandleSideNav = () => {
    dispatch({ type: LEFT_MENU_BTN });
  };

  const HandlePlaySong = (id, current) => {
    if (current === "currentAlbum") {
      dispatch({ type: PLAYING_CURRENT_ALBUM, payload: currentAlbum.songs });
    }
    if (current === "Artist") {
      dispatch({ type: PLAYING_CURRENT_ARTIST, payload: single_artist_songs });
    }
    if (current === "Playlist") {
      dispatch({
        type: PLAYING_CURRENT_PLAYLIST,
        payload: currentPlaylists.songs,
      });
    }
    if (current === "ViewAllSong") {
      dispatch({
        type: PLAYING_VIEWALLSONGS_LISTS,
      });
    }
    if (current === "RecentSongs") {
      dispatch({
        type: PLAYING_RECENT_PLAYED_LISTS,
      });
    }
    if (current === "FavoritesSongs") {
      dispatch({ type: PLAYING_FAVORITES_LISTS });
    }
    if (current === "Userplaylist") {
      dispatch({ type: PLAYING_USER_PLAYLIST });
    }

    singleSong(id);
  };

  const getRecentSongs = async (id) => {
    dispatch({ type: GET_ALL_PLAYLISTS_BEGIN });
    try {
      const response = await axiosInstance.get(
        `https://colorful-fly-attire.cyclic.app/beatstreet/api/users/recentsongs/${id}`
      );
      const results = response.data.data;
      const ids = results.join();
      const getSongs = await axios.get(`https://saavn.me/songs?id=${ids}`);
      const songs = getSongs.data.data;
      dispatch({ type: GET_RECENT_SONGS_SUCCESS, payload: songs });
    } catch (error) {
      dispatch({ type: GET_RECENT_SONGS_FAILED });
      console.log(error);
    }
  };
  const getFavoritesSongs = async (id) => {
    dispatch({ type: GET_FAVORITE_SONGS_BEGIN });
    try {
      const response = await axiosInstance.get(
        `https://colorful-fly-attire.cyclic.app/beatstreet/api/users/favoritesongs/${id}`
      );
      const results = response.data.data;
      const ids = results.join();
      const getSongs = await axios.get(`https://saavn.me/songs?id=${ids}`);
      const songs = getSongs.data.data;
      dispatch({ type: GET_FAVORITE_SONGS_SUCCESS, payload: songs });
    } catch (error) {
      dispatch({ type: GET_FAVORITE_SONGS_FAILED });
      console.log(error);
    }
  };

  const getAllPlaylist = async (id) => {
    dispatch({ type: GET_FAVORITE_SONGS_BEGIN });
    try {
      const response = await axiosInstance.get(
        `https://colorful-fly-attire.cyclic.app/beatstreet/api/users/allplaylist/${id}`
      );
      const results = response.data.data;

      dispatch({ type: GET_ALL_PLAYLISTS_SUCCESS, payload: results });
    } catch (error) {
      dispatch({ type: GET_ALL_PLAYLISTS_FAILED });
      console.log(error);
    }
  };

  const getSinglePlaylist = async (id, data) => {
    dispatch({ type: GET_USER_SINGLE_PLAYLIST_BEGIN });
    try {
      const response = await axiosInstance.post(
        `https://colorful-fly-attire.cyclic.app/beatstreet/api/users/getsingleplaylist/${id}`,
        data
      );
      const results = response.data.data;
      let Ids = results.songIds.join();
      const getSongs = await axios.get(`https://saavn.me/songs?id=${Ids}`);
      const songs = getSongs.data.data;
      let playlist = {
        name: results.name,
        songs,
      };
      console.log(playlist);
      dispatch({ type: GET_USER_SINGLE_PLAYLIST_SUCCESS, payload: playlist });
    } catch (error) {
      dispatch({ type: GET_USER_SINGLE_PLAYLIST_FAILED });
      console.log(error);
    }
  };

  return (
    <playerContext.Provider
      value={{
        ...state,
        singleSong,
        HandleRightSideMenu,
        SearchAll,
        inputValue,
        setInputValue,
        HandleNextPageBtn,
        HandleSideNav,
        inputRef,
        SearchSongs,
        SearchAlbums,
        AlbumsPageChange,
        HandleNextPageBtn_Albums,
        HandlePlaySong,
        getRecentSongs,
        getFavoritesSongs,
        getAllPlaylist,
        getSinglePlaylist,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export const usePlayerContext = () => {
  return useContext(playerContext);
};
