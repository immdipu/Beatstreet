import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRightSidebar: false,
  Messages: [],
  AllChats: [],
};

export const PlayerSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
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

export const {
  ToggleRightSidebar,
  LoadAllMessages,
  AddNewMessage,
  LoadAllChats,
} = PlayerSlice.actions;
export default PlayerSlice.reducer;
