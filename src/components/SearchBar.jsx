import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { usePlayerContext } from "../Context/PlayerContext";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
const SearchBar = () => {
  const navigate = useNavigate();
  const {
    SearchAll,
    inputValue,
    setInputValue,
    current_page_count,
    HandleSideNav,
    inputRef,
  } = usePlayerContext();

  const [searchTimer, setSearchTimer] = useState(null);

  function HandleSearch() {
    navigate("/search");
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    clearTimeout(searchTimer);
    setSearchTimer(
      setTimeout(() => {
        if (event.target.value !== "") {
          SearchAll(inputValue, current_page_count);
          inputRef.current.blur();
        }
      }, 2500)
    );
  }

  function HandleSubmit(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      clearTimeout(searchTimer);
      SearchAll(inputValue, current_page_count);
      inputRef.current.blur();
    }
  }

  function HandleSearchBtn() {
    if (inputRef.current.value !== "") {
      clearTimeout(searchTimer);
      SearchAll(inputValue, current_page_count);
      inputRef.current.blur();
    }
  }

  function clearSearchInput() {
    setInputValue("");
    inputRef.current.value = "";
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
          type="search"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={HandleSubmit}
          ref={inputRef}
          placeholder="Type here to search"
          className=" placeholder:text-sm bg-transparent placeholder:bg-transparent max-md:placeholder:text-xs text-sm w-full outline-none border-none  text-darkTitle font-light"
        />
        <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100  transition-all duration-200 ease-linear">
          <ClearRoundedIcon
            color="primary"
            className="scale-90 opacity-60 transition-all duration-300  ease-linear hover:scale-100 hover:opacity-100 cursor-pointer mr-1"
            onClick={clearSearchInput}
          />
        </div>
        <div
          className="bg-skyBlue rounded-full  px-[6px] py-[6px] translate-x-[3px] hover:opacity-80 "
          onClick={HandleSearchBtn}
        >
          <SearchIcon className="text-darkBlueS " />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
