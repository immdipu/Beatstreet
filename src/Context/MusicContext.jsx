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
};

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState(true);
  const [audioLoading, setaudioLoading] = useState(true);

  const [currentSong, setCurrentSong] = useState({
    image: "null",
    name: "null",
    primaryArtists: "null",
    downloadurl: "null",
  });
  const [selectSongId, setSelectedId] = useState(null);

  const homePageMusic = async () => {
    dispatch({ type: GET_HOME_DATA_BEGIN });
    try {
      const response = await axios.get(
        "https://saavn.me/modules?language=hindi,english,Bhojpuri"
      );
      let result = response.data.data;
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

  useEffect(() => {
    homePageMusic();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        ...state,
        loading,
        singleAlbums,
        setSelectedId,
        selectSongId,
        currentSong,
        setCurrentSong,
        audioLoading,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
