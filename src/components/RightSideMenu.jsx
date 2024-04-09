import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AudioPlayer from "./AudioPlayer";
import { useSelector, useDispatch } from "react-redux";
import { ToggleRightSidebar } from "../redux/slice/playerSlicer";
import { cn } from "../Utils/Helper";

const RightSideMenu = () => {
  const { showRightSidebar } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  return (
    <section
      className={
        "bg-lightBlue  text-darkTextColor z-50  fixed  max-md:z-50 max-md:p-0 h-full top-0 py-10 right-0 transition-all duration-300 ease-in  px-10 " +
        (showRightSidebar
          ? "w-96 max-md:w-full max-md:pl-6"
          : "w-0 -right-14 bg-transparent ")
      }
    >
      <div
        className="absolute group grid place-content-center left-0 px-2 hover:bg-[#24292e] bottom-0 top-0"
        onClick={() => {
          dispatch(ToggleRightSidebar());
        }}
      >
        <div className="">
          <div
            className={cn(
              "w-1 h-5 rounded-t-full origin-center  duration-200  bg-neutral-300",
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
          "opacity-100 duration-200 ease-linear",
          !showRightSidebar && "opacity-0"
        )}
      >
        <AudioPlayer />
      </div>
    </section>
  );
};

export default RightSideMenu;
