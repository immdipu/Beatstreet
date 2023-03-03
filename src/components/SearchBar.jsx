import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { usePlayerContext } from "../Context/PlayerContext";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
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
        if (inputValue !== "") {
          SearchAll(inputValue, current_page_count);
          inputRef.current.blur();
        }
      }, 2500)
    );
  }

  function HandleSubmit(e) {
    if (e.key === "Enter") {
      clearTimeout(searchTimer);
      SearchAll(inputValue, current_page_count);
      inputRef.current.blur();
    }
  }

  return (
    <section className="flex items-center gap-4">
      <div className="w-fit hidden max-md:flex" onClick={HandleSideNav}>
        <IconButton>
          <FormatAlignCenterIcon className="text-slate-200" />
        </IconButton>
      </div>
      <div
        className="flex bg-darkBlue items-center w-full focus-within:border-darkTextColor transition-all duration-400 ease-linear rounded-full pl-5 pr-1 h-10 border-[0.7px] border-[#8b8b8b6e]"
        onClick={HandleSearch}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={HandleSubmit}
          ref={inputRef}
          placeholder="Type here to search"
          className="bg-darkBlue placeholder:text-sm w-full outline-none border-none text-darkTitle text-base font-normal"
        />

        <div className="bg-skyBlue rounded-full px-[6px] py-[6px]">
          <SearchIcon className="text-darkBlue text-xl " />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
