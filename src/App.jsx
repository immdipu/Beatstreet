import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Mains from "./components/Mains";
import SingleAlbum from "./components/SingleAlbum";
import RightSideMenu from "./components/RightSideMenu";

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <RightSideMenu />
      <Routes>
        <Route path="/" element={<Mains />} />
        <Route path="/albums/:id" element={<SingleAlbum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
