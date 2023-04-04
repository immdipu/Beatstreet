import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  SingleAlbum,
  SearchResult,
  SinglePlayLists,
  ViewAllSongList,
  ViewAllAlbums,
  Artist,
  SignUp,
  LogIn,
  ForgotPwd,
  ResetPwd,
  UserAccountSetting,
  RecentSongs,
  TopPlaylists,
} from "./Page";

import { AnimatePresence } from "framer-motion";

const AnimateRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<SingleAlbum />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/search/album/:id" element={<SingleAlbum />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword/:token" element={<ResetPwd />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotPassword" element={<ForgotPwd />} />
        <Route path="/playlists/:id" element={<SinglePlayLists />} />
        <Route path="search/playlists/:id" element={<SinglePlayLists />} />
        <Route path="search/songs/:keyword" element={<ViewAllSongList />} />
        <Route path="search/albums/:keyword" element={<ViewAllAlbums />} />
        <Route path="/useraccount" element={<UserAccountSetting />} />
        <Route path="/recentsongs" element={<RecentSongs />} />
        <Route path="/topplaylists" element={<TopPlaylists />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
