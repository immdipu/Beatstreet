import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleAlbum, SearchResult } from "./Page";
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
          <Route path="/albums/:id" element={<SingleAlbum />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
