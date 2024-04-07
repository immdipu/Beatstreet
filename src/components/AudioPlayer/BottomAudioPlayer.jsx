import React from "react";
import { FavoriteBtn, NextBtn, PreviousBtn, RepeatBtn } from "./atoms";
import toast from "react-hot-toast";
import { useSwipeable } from "react-swipeable";
import { ToggleRightSidebar } from "../../redux/slice/playerSlicer";
import { useDispatch } from "react-redux";

const BottomAudioPlayer = () => {
  const dispatch = useDispatch();
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedUp: (eventData) => {
      dispatch(ToggleRightSidebar());
    },
  });

  return (
    <div
      {...handlers}
      className="h-20 right-0  max-sm:mr-0 bg-lightBlue  left-0  fixed bottom-0 max-md:ml-0  ml-52 mr-5 max-md:px-2 px-3"
    >
      <div
        id="bottom-audio-player"
        className="top-0  absolute right-0 left-0 px-0 mr-px max-md:ml-1  "
      ></div>

      <div className="flex  w-full h-full">
        <section className="flex w-fit shrink-0">
          <div id="song-image" className="w-full max-md:size-12"></div>
        </section>
        <section className=" mx-3 max-md:mx-2  w-full max-w-96  mt-1 max-md:w-1/2 max-md:overflow-hidden max-md:overflow-ellipsis">
          <div id="song-header"></div>
        </section>
        <section className="flex items-center max-md:space-x-1 space-x-3 mt-2 w-fit shrink-0">
          <div>
            <PreviousBtn fill="#dadada" hover="#121111bf" />
          </div>
          <div id="play-pause"></div>
          <div>
            <NextBtn fill="#dadada" hover="#121111bf" />
          </div>
        </section>
        <section className="w-full max-md:w-fit items-center flex mt-1 gap-1 pl-6 max-md:pl-1">
          <div className="h-fit ">
            <FavoriteBtn />
          </div>
          <div className="h-fit -ml-6">
            <RepeatBtn />
          </div>
          <div id="song-downloader" className="h-fit ml-2 max-md:hidden"></div>
        </section>
      </div>
    </div>
  );
};

export default BottomAudioPlayer;
