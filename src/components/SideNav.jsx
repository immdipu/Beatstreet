import React from "react";
import { FaCompass } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import { BsCollectionPlayFill, BsFillHeartFill } from "react-icons/bs";
import { MdAssessment, MdTopic, MdAccountBox } from "react-icons/md";

const SideNav = () => {
  return (
    <div className="w-52">
      <div className="bg-lightBlue text-darkTextColor fixed h-full  py-10 ">
        <section className="px-7">
          <section>
            <h2 className="font-Rubik uppercase font-medium text-white tracking-wider">
              Cinemaa Music
            </h2>
          </section>
          <section className="mt-10">
            <h3 className="uppercase font-Rubik font-medium tracking-wider text-sm">
              Menu
            </h3>
            <ul className="flex flex-col gap-6 mt-5">
              <li className="flex items-center gap-4 text-sm font-medium">
                <FaCompass className="text-[1.4rem]" /> Discover
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <MdAssessment className="text-[1.4rem]" /> Trending
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <MdAccountBox className="text-[1.4rem]" /> Album
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <MdTopic className="text-[1.4rem]" /> Genre
              </li>
            </ul>
          </section>
        </section>

        <hr className="bg-darkTextColor h-[0.8px] opacity-10 my-6 px-7" />

        <section className="px-7">
          <h3 className="uppercase font-Rubik font-medium tracking-wider text-sm">
            Library
          </h3>
          <ul className="flex flex-col gap-6 mt-5">
            <li className="flex items-center gap-4 text-sm font-medium">
              <AiFillPieChart className="text-[1.4rem]" /> Recent
            </li>
            <li className="flex items-center gap-4 text-sm font-medium">
              <BsCollectionPlayFill className="text-lg" /> Playlists
            </li>
            <li className="flex items-center gap-4 text-sm font-medium">
              <BsFillHeartFill className="text-lg" /> Favorites
            </li>
          </ul>
        </section>
        <section className="px-7 mt-10">
          <button>Dark</button>
        </section>
      </div>
    </div>
  );
};

export default SideNav;
