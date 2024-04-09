import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRightSidebar: true,
  SideNavbar: false,
  SearchTerm: "",
  playingSongId: null,
  playing: false,
  upcomingSongs: [],
};

export const PlayerSlice = createSlice({
  name: "playerslice",
  initialState,
  reducers: {
    SetSearchTerm(state, action) {
      state.SearchTerm = action.payload;
    },
    ClearSearchTerm(state) {
      state.SearchTerm = "";
    },
    ToggleRightSidebar: (state) => {
      state.showRightSidebar = !state.showRightSidebar;
    },
    ToggleSideNavSidebar: (state) => {
      state.SideNavbar = !state.SideNavbar;
    },
    LoadAllChats: (state, action) => {
      state.AllChats = action.payload;
    },
    LoadAllMessages: (state, action) => {
      state.Messages = action.payload;
    },
    AddNewMessage: (state, action) => {
      let NewMessages = state.Messages.filter(
        (message) => message.tempId !== action.payload.tempId
      );
      state.Messages = [...NewMessages, action.payload];
    },

    PlaySong: (state, action) => {
      state.playingSongId = action.payload.id;
      state.upcomingSongs = action.payload?.upcomingSongs;
      state.playing = true;
    },
    PlayNextSong: (state, action) => {
      state.playingSongId = action.payload.id;
      state.playing = true;
    },
  },
});

export const {
  SetSearchTerm,
  ClearSearchTerm,
  PlaySong,
  PlayNextSong,
  ToggleRightSidebar,
  ToggleSideNavSidebar,
} = PlayerSlice.actions;
export default PlayerSlice.reducer;
