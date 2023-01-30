import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/PlayerReducer";
import {
  PLAY_SONG_BEGIN,
  PLAY_SONG_SUCESS,
  PLAY_SONG_ERROR,
  RIGHT_MENU_BTN,
} from "../Actions";

const playerContext = React.createContext();

const initialState = {
  side_menu_show: false,
  audio_playing: false,
  play_song_loading: false,
  current_song: {
    name: "null",
    primaryArtists: "null",
    image: "null",
    downloadUrl: "null",
  },
  current_album: [],
};

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const HandleRightSideMenu = () => {
    dispatch({ type: RIGHT_MENU_BTN });
  };

  return (
    <playerContext.Provider
      value={{ ...state, singleSong, HandleRightSideMenu }}
    >
      {children}
    </playerContext.Provider>
  );
};

export const usePlayerContext = () => {
  return useContext(playerContext);
};
