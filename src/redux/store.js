import { configureStore } from "@reduxjs/toolkit";
import playerSlicer from "./slice/playerSlicer";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    player: playerSlicer,
    user: userSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
