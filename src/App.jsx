import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleAlbum } from "./Page";
import { SideNav, RightSideMenu, SearchBar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <RightSideMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:id" element={<SingleAlbum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
