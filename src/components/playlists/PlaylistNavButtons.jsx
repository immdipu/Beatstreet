import React from "react";
import { NavLink } from "react-router-dom";

const PlaylistNavButtons = () => {
  return (
    <div className="overflow-auto px-10 mt-5">
      <ul className="flex gap-4 ">
        <li className="bg-lightBlue text-neutral-500 rounded-md px-3 py-1 ">
          <NavLink to="/topplaylists/Hindi" className="h-fit w-fit">
            Hindi
          </NavLink>
        </li>
        <li className={"bg-lightBlue rounded-md text-neutral-500 px-3 py-1 "}>
          <NavLink to="/topplaylists/Bhojpuri">Bhojpuri</NavLink>
        </li>
        <li className={"bg-lightBlue rounded-md text-neutral-500 px-3 py-1 "}>
          <NavLink to="/topplaylists/English">English</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PlaylistNavButtons;
