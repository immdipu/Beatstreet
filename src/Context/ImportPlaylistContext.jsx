import React, { useContext, useReducer } from "react";
import reducer from "./../Reducers/ImportPlaylistReducer";
import axios from "axios";

const playlistContext = React.createContext();

import { useUserContext } from "../Context/UserContext";
import {
  GET_USER_SPOTIFY_PLAYLIST_BEGIN,
  GET_USER_SPOTIFY_PLAYLIST_SUCCESS,
  GET_USER_SPOTIFY_PLAYLIST_FAILED,
  ADD_SONGS_BEGIN,
  ADD_SONGS_SUCCESS,
  ADD_SONGS_FAILED,
} from "./../Actions";

const initialState = {
  token: null,
  all_playlists_loading: false,
  all_Playlists: [],
  new_playlist: [],
};

export const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { User_id, login_success, sendNewPlaylist } = useUserContext();

  const getSpotifyPlaylists = async (token) => {
    try {
      dispatch({ type: GET_USER_SPOTIFY_PLAYLIST_BEGIN, payload: token });
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "apllication/json",
          },
        }
      );
      const result = response.data.items;
      dispatch({ type: GET_USER_SPOTIFY_PLAYLIST_SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_USER_SPOTIFY_PLAYLIST_FAILED });
    }
  };

  const getSongFromSaavn = async (term) => {
    let formattedTerm = term
      .replace(/[^\w\s]/gi, " ")
      .replace(/\s+/g, " ")
      .split(" ")
      .join("+");
    try {
      const response = await axios.get(
        `https://saavn.me/search/songs?query=${formattedTerm}&page=1&limit=10`
      );
      const result = response.data.data.results;
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const getSpotifyPlaylistSongs = async (token, id, name, image) => {
    dispatch({ type: ADD_SONGS_BEGIN });
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "apllication/json",
          },
        }
      );
      const result = response.data.items;
      let newplayList = [];
      for (let i = 0; i < result.length - 1; i++) {
        let track = result[i].track;
        if (track.track) {
          let data = {
            name: track.name,
            artistName: track.artists[0].name,
          };
          getSongFromSaavn(data.name).then((res) => {
            let newTrack = res.find((item) => {
              if (
                item.name === data.name &&
                item.primaryArtists.includes(data.artistName)
              ) {
                return item;
              } else if (item.name === data.name) {
                return item;
              }
            });
            if (newTrack) {
              newplayList.push(newTrack.id);
            } else {
              console.log(data.name + "Song not found");
            }
          });
        }
      }

      let newdata = {
        name,
        image,
        songsIds: newplayList,
      };
      if (login_success) {
        sendNewPlaylist(User_id, newdata);
      }
      dispatch({ type: ADD_SONGS_SUCCESS, payload: newdata });
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_SONGS_FAILED });
    }
  };

  return (
    <playlistContext.Provider
      value={{ ...state, getSpotifyPlaylists, getSpotifyPlaylistSongs }}
    >
      {children}
    </playlistContext.Provider>
  );
};

export const usePlaylistContext = () => {
  return useContext(playlistContext);
};
