import React from "react";
import SearchBar from "../Context/SearchBar";
import AudioPlayer from "./AudioPlayer";

const RightSideMenu = () => {
  return (
    <section className="bg-lightBlue text-darkTextColor fixed h-full  py-10 right-0 w-96 px-10">
      <SearchBar />
      <AudioPlayer />
    </section>
  );
};

export default RightSideMenu;
