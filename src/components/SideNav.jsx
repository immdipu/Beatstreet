import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SourceIcon from "@mui/icons-material/Source";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to={"/"}
                className="flex items-center gap-4 text-sm font-medium"
              >
                <ExploreIcon />
                Discover
              </NavLink>
              <li className="flex items-center gap-4 text-sm font-medium">
                <AssessmentIcon />
                Trending
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <AccountBoxIcon />
                Album
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <SourceIcon />
                Genre
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
              <DonutSmallIcon />
              Recent
            </li>
            <li className="flex items-center gap-4 text-sm font-medium">
              <SubscriptionsIcon />
              Playlists
            </li>
            <li className="flex items-center gap-4 text-sm font-medium">
              <FavoriteIcon /> Favorites
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
