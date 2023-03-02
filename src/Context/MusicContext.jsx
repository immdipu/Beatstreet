import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../Reducers/MusicReducer";
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

const initialState = {
  homeData_loading: false,
  single_album_loading: false,
  Albums: [],
  playlists: [],
  charts: [],
  trendingAlbums: [],
  trendingSongs: [],
  currentAlbum: [],
  currentPlaylists: [],
  alert_show: false,
};

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const homePageMusic = async () => {
    dispatch({ type: GET_HOME_DATA_BEGIN });
    try {
      const response = await axios.get(
        "https://saavn.me/modules?language=hindi,english,Bhojpuri"
      );
      let result = response.data.data;
      console.log(result);
      dispatch({ type: GET_HOME_DATA_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_HOMEDATA_ERROR });
    }
  };

  const singleAlbums = async (id) => {
    dispatch({ type: GET_SINGLE_ALBUM_BEGIN });
    try {
      const response = await axios.get(`https://saavn.me/albums?id=${id}`);
      const result = response.data.data;
      dispatch({ type: GET_SINGLE_ALBUM_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_SINGLE_ALBUM_ERROR });
    }
  };

  const SinglePlaylist = async (id) => {
    dispatch({ type: GET_SINGLE_PLAYLIST_BEGIN });
    try {
      const response = await axios.get(`https://saavn.me/playlists?id=${id}`);
      const result = response.data.data;
      dispatch({ type: GET_SINGLE_PLAYLIST_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PLAYLIST_ERROR });
    }
  };

  useEffect(() => {
    homePageMusic();
  }, []);

  const HandleAlert = () => {
    dispatch({ type: ALERT_SHOW });
  };

  return (
    <MusicContext.Provider
      value={{
        ...state,
        singleAlbums,
        SinglePlaylist,
        HandleAlert,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
