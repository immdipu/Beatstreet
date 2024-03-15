import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRightSidebar: false,
  SearchTerm: "",
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
  },
});

export const { SetSearchTerm, ClearSearchTerm } = PlayerSlice.actions;
export default PlayerSlice.reducer;
