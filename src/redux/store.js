import { configureStore } from "@reduxjs/toolkit";
import playerSlicer from "./slice/playerSlicer";

const store = configureStore({
  reducer: {
    player: playerSlicer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
