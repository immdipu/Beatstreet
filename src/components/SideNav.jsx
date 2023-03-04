import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SourceIcon from "@mui/icons-material/Source";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { usePlayerContext } from "../Context/PlayerContext";

const SideNav = () => {
  const { HandleSideNav, side_navbar_show } = usePlayerContext();
  return (
    <div
      className={
        "w-52 transition-all duration-200 ease-in " +
        (side_navbar_show ? "max-md:w-0" : "max-md:w-0")
      }
    >
      <div
        className={
          "bg-lightBlue text-darkTextColor  w-52 transition-all duration-400 ease-in fixed z-40 h-full  py-10 " +
          (side_navbar_show ? "max-md:w-52" : "max-md:-left-96")
        }
      >
        <section className="px-7">
          <section>
            <svg width="145" viewBox="0 0 390 91" className="css-1j8o68f">
              <defs id="SvgjsDefs2659"></defs>
              <g
                id="SvgjsG2660"
                featurekey="rootContainer"
                transform="matrix(1,0,0,1,0,0)"
                fill="#111111"
              >
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  width="390"
                  height="91"
                  rx="10"
                  ry="10"
                ></rect>
              </g>
              <g
                id="SvgjsG2661"
                featurekey="nameFeature-0"
                transform="matrix(1.7921789378658275,0,0,1.7921789378658275,16.415642124268345,-1.506140417769835)"
                fill="#ecf0f1"
              >
                <path d="M8 30 c0 2.96 1.48 4.64 4.48 4.64 c0.84 0 1.6 -0.12 2.2 -0.4 c1.12 -0.44 1.88 -1.28 2.28 -2.44 c0.16 -0.56 0.24 -1.16 0.24 -1.8 s-0.08 -1.24 -0.24 -1.8 c-0.44 -1.24 -1.12 -1.92 -2.28 -2.48 c-0.6 -0.24 -1.36 -0.36 -2.2 -0.36 c-3 0 -4.48 1.68 -4.48 4.64 z M2 12 l6 0 l0 10 c1.36 -1.56 3.2 -2.2 5.24 -2.2 c5.84 0 9.96 4.68 9.96 10.28 c0 6.32 -4.68 10.12 -10.64 10.12 c-6.2 0 -10.56 -4.08 -10.56 -10.2 l0 -18 z M32.197 27.6 c0.6 0.2 1.28 0.36 2 0.44 c0.72 0.12 1.4 0.16 2.04 0.16 c0.8 0 2.84 -0.16 2.84 -1.32 c0 -1.24 -1.76 -1.28 -2.64 -1.28 c-1.76 0 -3.28 0.4 -4.24 2 z M43.516999999999996 33.76 l0 5.6 c-2.24 0.52 -4.48 0.88 -6.8 0.88 c-6.36 0 -11.08 -3.72 -11.08 -10.16 c0 -6.36 4.56 -10.28 10.6 -10.28 c4.12 0 8.88 1.96 8.88 6.64 c0 4.64 -5.04 6.36 -8.92 6.36 c-1.48 0 -2.96 -0.4 -4.32 -0.96 c0.8 2.24 3.2 2.6 5.28 2.6 c1.08 0 2.16 -0.04 3.24 -0.2 c1 -0.08 2.16 -0.2 3.12 -0.48 z M62.914 30 c-0.16 -2.92 -1.48 -4.64 -4.52 -4.64 c-0.84 0 -1.56 0.12 -2.16 0.36 c-1.84 0.84 -2.52 2.4 -2.52 4.32 c0 0.64 0.08 1.24 0.28 1.76 c0.6 2.08 2.4 2.84 4.4 2.84 c3.04 0 4.52 -1.64 4.52 -4.64 z M70.51400000000001 40 l-6 0 c-0.4 -1 -0.76 -2 -1 -3.04 c-1.36 2.24 -3.44 3.24 -6 3.24 c-5.72 0 -9.8 -4.8 -9.8 -10.28 c0 -6.32 4.72 -10.12 10.68 -10.12 c6.36 0 10.36 4.08 10.52 10.2 c0.04 0.52 0.04 1.12 0.04 1.84 c0 2.8 0.44 5.6 1.56 8.16 z M84.511 20.68 l0 5.56 l-5.6 0 l0 3.76 c0 3.08 2.04 4.64 5 4.64 c0.36 0 0.68 -0.04 0.96 -0.08 s0.52 -0.08 0.8 -0.12 l0 5.56 c-0.36 0.04 -0.64 0.12 -0.84 0.16 c-0.24 0.04 -0.64 0.04 -1.16 0.04 c-6.04 0 -10.76 -4.12 -10.76 -10.2 l0 -14.8 l6 0 l0 5.48 l5.6 0 z M88.628 39.36 l0 -5.6 c2.64 0.8 5.96 0.96 8.68 0.96 c1.08 0 1.92 -0.04 2.52 -0.16 c0.56 -0.08 0.84 -0.28 0.84 -0.56 c0 -0.12 -0.04 -0.2 -0.12 -0.32 c-0.4 -0.4 -1.28 -0.6 -1.8 -0.72 s-1.2 -0.28 -2.04 -0.44 c-0.68 -0.12 -1.48 -0.28 -2.4 -0.48 c-3.12 -0.68 -5.52 -2.44 -5.52 -5.8 c0 -4.96 4.84 -6.44 8.92 -6.44 c2.56 0 5.12 0.36 7.64 0.88 l0 5.64 c-2.52 -0.76 -5.36 -0.96 -8 -0.96 c-1.04 0 -1.76 0.04 -2.2 0.16 s-0.68 0.32 -0.68 0.56 c0 0.36 0.36 0.6 1.04 0.72 c0.68 0.16 1.64 0.36 2.8 0.56 c1.04 0.2 2.04 0.4 3 0.64 c2.96 0.76 5.08 2.36 5.08 5.56 c0 5.36 -5.4 6.68 -9.72 6.68 c-2.72 0 -5.4 -0.36 -8.04 -0.88 z M121.105 20.68 l0 5.56 l-5.6 0 l0 3.76 c0 3.08 2.04 4.64 5 4.64 c0.36 0 0.68 -0.04 0.96 -0.08 s0.52 -0.08 0.8 -0.12 l0 5.56 c-0.36 0.04 -0.64 0.12 -0.84 0.16 c-0.24 0.04 -0.64 0.04 -1.16 0.04 c-6.04 0 -10.76 -4.12 -10.76 -10.2 l0 -14.8 l6 0 l0 5.48 l5.6 0 z M131.422 30 l0 10 l-6 0 l0 -9.96 c0 -6.64 4.88 -10.24 11.04 -10.24 c0.2 0 0.48 0 0.76 0.04 s0.6 0.12 0.88 0.16 l0 5.8 c-0.2 -0.04 -0.44 -0.08 -0.72 -0.12 s-0.52 -0.08 -0.72 -0.08 c-1 0 -1.8 0.12 -2.48 0.32 c-1.12 0.4 -2.12 1.16 -2.48 2.36 c-0.2 0.52 -0.28 1.12 -0.28 1.72 z M146.299 27.6 c0.6 0.2 1.28 0.36 2 0.44 c0.72 0.12 1.4 0.16 2.04 0.16 c0.8 0 2.84 -0.16 2.84 -1.32 c0 -1.24 -1.76 -1.28 -2.64 -1.28 c-1.76 0 -3.28 0.4 -4.24 2 z M157.619 33.76 l0 5.6 c-2.24 0.52 -4.48 0.88 -6.8 0.88 c-6.36 0 -11.08 -3.72 -11.08 -10.16 c0 -6.36 4.56 -10.28 10.6 -10.28 c4.12 0 8.88 1.96 8.88 6.64 c0 4.64 -5.04 6.36 -8.92 6.36 c-1.48 0 -2.96 -0.4 -4.32 -0.96 c0.8 2.24 3.2 2.6 5.28 2.6 c1.08 0 2.16 -0.04 3.24 -0.2 c1 -0.08 2.16 -0.2 3.12 -0.48 z M168.376 27.6 c0.6 0.2 1.28 0.36 2 0.44 c0.72 0.12 1.4 0.16 2.04 0.16 c0.8 0 2.84 -0.16 2.84 -1.32 c0 -1.24 -1.76 -1.28 -2.64 -1.28 c-1.76 0 -3.28 0.4 -4.24 2 z M179.696 33.76 l0 5.6 c-2.24 0.52 -4.48 0.88 -6.8 0.88 c-6.36 0 -11.08 -3.72 -11.08 -10.16 c0 -6.36 4.56 -10.28 10.6 -10.28 c4.12 0 8.88 1.96 8.88 6.64 c0 4.64 -5.04 6.36 -8.92 6.36 c-1.48 0 -2.96 -0.4 -4.32 -0.96 c0.8 2.24 3.2 2.6 5.28 2.6 c1.08 0 2.16 -0.04 3.24 -0.2 c1 -0.08 2.16 -0.2 3.12 -0.48 z M196.133 20.68 l0 5.56 l-5.6 0 l0 3.76 c0 3.08 2.04 4.64 5 4.64 c0.36 0 0.68 -0.04 0.96 -0.08 s0.52 -0.08 0.8 -0.12 l0 5.56 c-0.36 0.04 -0.64 0.12 -0.84 0.16 c-0.24 0.04 -0.64 0.04 -1.16 0.04 c-6.04 0 -10.76 -4.12 -10.76 -10.2 l0 -14.8 l6 0 l0 5.48 l5.6 0 z"></path>
              </g>
            </svg>
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
      {side_navbar_show && (
        <div
          className="fixed z-30 h-full max-md:block hidden top-0 w-full bg-[#0c0c0cc7]"
          onClick={HandleSideNav}
        ></div>
      )}
    </div>
  );
};

export default SideNav;
