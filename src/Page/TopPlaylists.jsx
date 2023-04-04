import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HindiPlaylist } from "../components";

const TopPlaylists = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/topplaylists/Hindiplaylist">Child 1</NavLink>
        </li>
        <li>
          <NavLink to="/topplaylists/BhojpuriPlaylist">Child 2</NavLink>
        </li>
      </ul>
    </>
  );
};

export default TopPlaylists;
