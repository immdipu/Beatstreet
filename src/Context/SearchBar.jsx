import React from "react";
import { RiSearch2Line } from "react-icons/ri";
const SearchBar = () => {
  return (
    <section className="flex flex-col gap-4">
      <h4 className="font-Poppins text-darkTitle uppercase ml-3  tracking-widest font-medium text-sm">
        Quick search
      </h4>
      <div className="flex bg-darkBlue items-center w-full focus-within:border-darkTextColor transition-all duration-400 ease-linear rounded-full pl-5 pr-1 h-10 border-[0.7px] border-[#8b8b8b6e]">
        <input
          type="text"
          placeholder="Type here to search"
          className="bg-darkBlue placeholder:text-sm w-full outline-none border-none text-darkTitle text-base font-normal"
        />
        <div className="bg-skyBlue rounded-full px-[6px] py-[6px]">
          <RiSearch2Line className="text-darkBlue text-xl " />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
