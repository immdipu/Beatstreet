import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  _id: null,
  isVerified: false,
  islogged: false,
  showRightSidebar: false,
  SearchTerm: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    isLogged: (state, action) => {
      state._id = action.payload._id;
      state.fullName = action.payload.name;
      state.isVerified = action.payload.isVerified;
      state.islogged = true;
    },
    Logout: (state) => {
      state._id = null;
      state.fullName = "";
      state.isVerified = false;
      state.islogged = false;
      localStorage.removeItem("token");
    },
  },
});

export const { isLogged, Logout } = userSlice.actions;
export default userSlice.reducer;
