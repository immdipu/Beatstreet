import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../Reducers/PlayerReducer";
import {
  PLAY_SONG_BEGIN,
  PLAY_SONG_SUCESS,
  PLAY_SONG_ERROR,
  RIGHT_MENU_BTN,
  SEARCH_BEGIN,
  SEARCH_SUCESS,
  SEARCH_ERROR,
  PREV_PAGE_BTN,
  NEXT_PAGE_BTN,
  NEW_SEARCH_BEGIN,
  LEFT_MENU_BTN,
} from "../Actions";

const playerContext = React.createContext();

const initialState = {
  side_menu_show: false,
  side_navbar_show: false,
  audio_playing: false,
  play_song_loading: false,
  search_loading: false,
  current_song: {
    name: "null",
    primaryArtists: "null",
    image: "null",
    downloadUrl: "null",
  },
  search_results: [],
  current_album: [],
  current_page_count: 1,
};

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

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

  const SearchSongs = async (text, page) => {
    dispatch({ type: NEW_SEARCH_BEGIN });
    try {
      const res = await axios.get(
        `https://saavn.me/search/songs?query=${text}&page=${page}`
      );
      const result = res.data.data.results;
      dispatch({ type: SEARCH_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };
  const PageChange = async (text, page) => {
    dispatch({ type: SEARCH_BEGIN });
    try {
      const res = await axios.get(
        `https://saavn.me/search/songs?query=${text}&page=${page}`
      );
      const result = res.data.data.results;
      dispatch({ type: SEARCH_SUCESS, payload: result });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };

  const HandleRightSideMenu = () => {
    dispatch({ type: RIGHT_MENU_BTN });
  };

  const HandlePreviousPageBtn = () => {
    dispatch({ type: PREV_PAGE_BTN });
    PageChange(inputValue, state.current_page_count);
  };

  const HandleNextPageBtn = () => {
    dispatch({ type: NEXT_PAGE_BTN });
    PageChange(inputValue, state.current_page_count);
  };

  const HandleSideNav = () => {
    dispatch({ type: LEFT_MENU_BTN });
  };

  return (
    <playerContext.Provider
      value={{
        ...state,
        singleSong,
        HandleRightSideMenu,
        SearchSongs,
        inputValue,
        setInputValue,
        HandlePreviousPageBtn,
        HandleNextPageBtn,
        HandleSideNav,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export const usePlayerContext = () => {
  return useContext(playerContext);
};
