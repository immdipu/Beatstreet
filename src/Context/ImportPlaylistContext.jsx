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
  DELETE_PLAYLIST_FAILED,
} from "./../Actions";

const initialState = {
  token: null,
  all_playlists_loading: false,
  add_songs_loading: false,
  all_Playlists: [],
  new_playlist: [],
  new_playlist_creation: false,
  new_playlist_creation_response: null,
  rename_playlist_loading: false,
  delete_playlist_loading: false,
};

export const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { User_id, login_success, sendNewPlaylist } = useUserContext();
  // const { getAllPlaylist } = usePlayerContext();

  const getSongFromSaavn = async (term) => {
    let formattedTerm = term
      .replace(/[^\w\s]/gi, " ")
      .replace(/\s+/g, " ")
      .split(" ")
      .join("+");
    try {
      const response = await axios.get(
        `https://saavn.dev/search/songs?query=${formattedTerm}&page=1&limit=10`
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
      let promises = result.map((item) => {
        let track = item.track;
        if (track.track && track.name !== "") {
          let formattedTerm = track.name.replace(/\([^)]*\)/g, "").trim();
          let data = {
            name: formattedTerm,
            artistName: track.artists[0].name,
          };
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              getSongFromSaavn(data.name)
                .then((res) => {
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
                    resolve(newTrack.id);
                  } else {
                    console.log(data.name + "Song not found");
                    resolve(null);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  resolve(null);
                });
            }, 2000);
          });
        } else {
          return null;
        }
      });
      let songIds = await Promise.all(promises);
      newplayList = songIds.filter(
        (item) => item !== null && item !== undefined
      );
      let newdata = {
        name,
        image,
        songsIds: newplayList,
      };

      if (login_success && newdata.songsIds.length !== 0) {
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
      value={{
        ...state,
      }}
    >
      {children}
    </playlistContext.Provider>
  );
};

export const usePlaylistContext = () => {
  return useContext(playlistContext);
};
