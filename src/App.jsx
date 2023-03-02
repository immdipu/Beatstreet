import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  SingleAlbum,
  SearchResult,
  SinglePlayLists,
  ViewAllSongList,
  ViewAllAlbums,
  Artist,
} from "./Page";
import { SideNav, RightSideMenu, Alert } from "./components";
import { useMusicContext } from "./Context/MusicContext";
function App() {
  const { alert_show } = useMusicContext();
  let alert = null;
  if (alert_show) {
    alert = <Alert />;
  }
  return (
    <BrowserRouter>
      <div className="grid grid-cols-[max-content,auto,max-content]">
        <SideNav />
        {alert}
        <RightSideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id" element={<SingleAlbum />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/search/album/:id" element={<SingleAlbum />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/playlists/:id" element={<SinglePlayLists />} />
          <Route path="search/playlists/:id" element={<SinglePlayLists />} />
          <Route path="search/songs/:keyword" element={<ViewAllSongList />} />
          <Route path="search/albums/:keyword" element={<ViewAllAlbums />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
