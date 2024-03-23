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
  GET_ARTIST_DETAILS_BEGIN,
  GET_ARTIST_DETAILS_SUCESS,
  GET_ARTIST_DETAILS_ERROR,
  GET_ARTIST_SONGS_BEGIN,
  GET_ARTIST_SONGS_SUCESS,
  GET_ARTIST_SONGS_ERROR,
  GET_ARTIST_ALBUMS_BEGIN,
  GET_ARTIST_ALBUMS_SUCESS,
  GET_ARTIST_ALBUMS_ERROR,
  GET_ARTIST_SONGS_SUCCESS_LoadMore,
  GET_ARTIST_SONGS_BEGIN_LoadMore,
  GET_ARTIST_SONGS_FAILED_LoadMore,
} from "../Actions";

const initialState = {
  homeData_loading: false,
  single_album_loading: false,
  single_artist_loading: false,
  single_artist_songs_loading: false,
  single_artist_albums_loading: false,
  albums: [],
  playlists: [],
  charts: [],
  trendingAlbums: [],
  trendingSongs: [],
  currentAlbum: [],
  currentPlaylists: [],
  alert_show: false,
  single_artist_details: [],
  single_artist_songs: [],
  single_artist_albums: [],
  loadMoreSong: false,
};

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const BASEURL = import.meta.env.VITE_BASE_URL;

  const homePageMusic = async () => {
    dispatch({ type: GET_HOME_DATA_BEGIN });
    try {
      const response = await axios.get(
        `${BASEURL}/modules?language=hindi,english,Bhojpuri`
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
      const response = await axios.get(`${BASEURL}/albums?id=${id}`);
      const result = response.data.data || [];

      dispatch({ type: GET_SINGLE_ALBUM_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_SINGLE_ALBUM_ERROR });
    }
  };

  const SinglePlaylist = async (id) => {
    dispatch({ type: GET_SINGLE_PLAYLIST_BEGIN });
    try {
      const response = await axios.get(`${BASEURL}/playlists?id=${id}`);
      const result = response.data.data || [];
      dispatch({ type: GET_SINGLE_PLAYLIST_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PLAYLIST_ERROR });
    }
  };

  const SingleArtist = async (id) => {
    dispatch({ type: GET_ARTIST_DETAILS_BEGIN });
    try {
      const response = await axios.get(`${BASEURL}/artists?id=${id}`);
      const result = response.data.data || [];
      console.log("result", result);
      dispatch({ type: GET_ARTIST_DETAILS_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_ARTIST_DETAILS_ERROR });
    }
  };

  const ArtistSongs = async (id) => {
    dispatch({ type: GET_ARTIST_SONGS_BEGIN });
    try {
      const res = await axios.get(`${BASEURL}/artists/${id}/songs?page=1`);
      const data = res.data.data.songs || [];

      dispatch({ type: GET_ARTIST_SONGS_SUCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_ARTIST_SONGS_ERROR });
    }
  };
  const ArtistSongsLoadMore = async (id, pageNumber) => {
    dispatch({ type: GET_ARTIST_SONGS_BEGIN_LoadMore });
    try {
      const res = await axios.get(
        `https://saavn.dev/artists/${id}/songs?page=${pageNumber}`
      );
      const data = res.data.data.results || [];
      dispatch({ type: GET_ARTIST_SONGS_SUCCESS_LoadMore, payload: data });
    } catch (error) {
      dispatch({ type: GET_ARTIST_SONGS_FAILED_LoadMore });
    }
  };

  const ArtistAlbums = async (id) => {
    dispatch({ type: GET_ARTIST_ALBUMS_BEGIN });
    try {
      const res = await axios.get(
        `https://saavn.dev/artists/${id}/albums?page=1`
      );
      const data = res.data.data.results || [];
      dispatch({ type: GET_ARTIST_ALBUMS_SUCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_ARTIST_ALBUMS_ERROR });
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
        SingleArtist,
        ArtistSongs,
        ArtistAlbums,
        ArtistSongsLoadMore,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
