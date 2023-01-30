import React from "react";
import { useMusicContext } from "../Context/MusicContext";

const Alert = () => {
  const { HandleAlert } = useMusicContext();
  return (
    <div className="flex roll-in-left fixed flex-col top-1/2 left-1/2 gap-5 z-50 max-md:left-1/4 max-md: mx-10 bg-white max-w-xs rounded-lg px-6 py-4 items-center justify-center max-md:scale-50">
      <h3 className="font-medium text-slate-700 leading-6 text-xl text-center">
        This site is still in development. Some functions maynot work. Thanks
        for visiting.
      </h3>
      <button
        className="bg-slate-800 px-4 py-2 rounded-lg text-base text-white"
        onClick={HandleAlert}
      >
        okay
      </button>
    </div>
  );
};

export default Alert;
