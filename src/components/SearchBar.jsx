import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { usePlayerContext } from "../Context/PlayerContext";
const SearchBar = () => {
  const { SearchSongs, inputValue, setInputValue, current_page_count } =
    usePlayerContext();

  const [searchTimer, setSearchTimer] = useState(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
    clearTimeout(searchTimer);
    setSearchTimer(
      setTimeout(() => {
        if (inputValue !== "") {
          SearchSongs(inputValue, current_page_count);
        }
      }, 2000)
    );
  }
  return (
    <section className="flex flex-col gap-4">
      {/* <h4 className="font-Poppins text-darkTitle uppercase ml-3  tracking-widest font-medium text-sm">
        Quick search
      </h4> */}

      <Link
        to={"/search"}
        className="flex bg-darkBlue items-center w-full focus-within:border-darkTextColor transition-all duration-400 ease-linear rounded-full pl-5 pr-1 h-10 border-[0.7px] border-[#8b8b8b6e]"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here to search"
          className="bg-darkBlue placeholder:text-sm w-full outline-none border-none text-darkTitle text-base font-normal"
        />

        <div className="bg-skyBlue rounded-full px-[6px] py-[6px]">
          <SearchIcon className="text-darkBlue text-xl " />
        </div>
      </Link>
    </section>
  );
};

export default SearchBar;
