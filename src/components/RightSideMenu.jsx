import React from "react";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import { useSelector, useDispatch } from "react-redux";
import { ToggleRightSidebar } from "../redux/slice/playerSlicer";
import { cn } from "../Utils/Helper";

const RightSideMenu = () => {
  const { showRightSidebar } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  return (
    <section
      className={cn(
        "bg-lightBlue text-darkTextColor z-50 h-full fixed will-change-transform  max-md:p-0 md:top-0  max-md:bottom-0 py-10 transition-all duration-300 ease-in px-10 ",
        showRightSidebar
          ? "w-96 max-md:w-full right-0  max-md:pl-0 h-full"
          : "w-0 -right-[60px] max-md:right-0  max-md:w-full max-md:h-0 overflow-hidden"
      )}
    >
      <div
        className={cn(
          "absolute group grid max-md:hidden max-md:w-0 max-md:overflow-hidden   place-content-center left-0 px-2 hover:bg-[#24292e] bottom-0 top-0",
          !showRightSidebar && "bg-neutral-700"
        )}
        onClick={() => {
          dispatch(ToggleRightSidebar());
        }}
      >
        <div className="">
          <div
            className={cn(
              "w-1 h-5 rounded-t-full origin-center   duration-200  bg-neutral-300",
              showRightSidebar
                ? "group-hover:-rotate-[30deg]"
                : "group-hover:rotate-[30deg]"
            )}
          />
          <div
            className={cn(
              "w-1 h-5 rounded-b-full -translate-y-[0.25rem] duration-200 origin-center  bg-neutral-300 ",
              showRightSidebar
                ? "group-hover:rotate-[30deg]"
                : "  group-hover:-rotate-[30deg]"
            )}
          />
        </div>
      </div>
      <div
        className={cn(
          "opacity-100 duration-200 ease-linear max-md:h-full",
          !showRightSidebar && "md:opacity-0"
        )}
      >
        <AudioPlayer />
      </div>
    </section>
  );
};

export default RightSideMenu;
