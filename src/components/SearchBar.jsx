import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux";
import {
  SetSearchTerm,
  ToggleSideNavSidebar,
} from "../redux/slice/playerSlicer";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const HandleSideNav = () => {
    dispatch(ToggleSideNavSidebar());
  };

  function HandleSearch() {
    navigate("/search");
  }

  function handleInputChange(event) {
    dispatch(SetSearchTerm(event.target.value));
  }

  return (
    <section className="flex items-center searchBarContainer  gap-4 w-96 max-md:w-full">
      <div className="w-fit hidden max-md:flex" onClick={HandleSideNav}>
        <IconButton>
          <FormatAlignCenterIcon className="text-slate-200" />
        </IconButton>
      </div>
      <div
        className="flex  items-center w-full focus-within:border-darkTextColor group transition-all duration-400 ease-linear rounded-full pl-5 pr-1 h-10 normaic border-[#ffd4d46e]"
        onClick={HandleSearch}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Type here to search"
          className=" placeholder:text-sm bg-transparent placeholder:bg-transparent max-md:placeholder:text-xs text-sm w-full outline-none border-none  text-darkTitle font-light"
        />
        <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100  transition-all duration-200 ease-linear"></div>
        <div className="bg-skyBlue rounded-full  px-[6px] py-[6px] translate-x-[3px] hover:opacity-80 ">
          <SearchIcon className="text-darkBlueS " />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
