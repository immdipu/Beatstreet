import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleAlbum, SearchResult } from "./Page";
import { SideNav, RightSideMenu } from "./components";

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <RightSideMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:id" element={<SingleAlbum />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
