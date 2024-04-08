import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AudioPlayer from "./AudioPlayer";

const RightSideMenu = () => {
  const side_menu_show = true;

  return (
    <section
      className={
        "bg-lightBlue text-darkTextColor z-20 fixed  max-md:z-50 max-md:p-0 h-full top-0 py-10 right-0 transition-all duration-300 ease-in  px-10 " +
        (side_menu_show ? "w-96 max-md:w-full " : "w-0 -right-20")
      }
    >
      <div className="w-fit mt-14 max-md:mt-6 max-md:pl-4">
        <KeyboardDoubleArrowLeftIcon
          className="rotate-180 max-md:scale-125 cursor-pointer"
          // onClick={HandleRightSideMenu}
        />
      </div>
      {!side_menu_show && (
        <div className="w-32 h-10 -left-12 max-md:-left-32 max-md:top-24 bg-lightBlue bg-opacity-50 pl-1  flex items-center float-left  rounded-xl backdrop-blur-xl absolute">
          <KeyboardDoubleArrowLeftIcon
            onClick={HandleRightSideMenu}
            className="text-white cursor-pointer"
          />
        </div>
      )}
      <AudioPlayer />
    </section>
  );
};

export default RightSideMenu;
