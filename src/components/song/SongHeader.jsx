import React from "react";

const SongHeader = ({ title = "unknown", artist = "unknown" }) => {
  return (
    <div className="ml-4 overflow-hidden max-md:w-1/2 max-xxs:w-1/3">
      <h3
        className="text-slate-200 max-md:font-medium text-sm  whitespace-nowrap text-ellipsis overflow-hidden w-[90%] max-xxs:w-2/4"
        dangerouslySetInnerHTML={{
          __html: `${title}`,
        }}
      />

      <p
        className="text-xs max-md:text-[10px]  opacity-90 mt-[2px] max-w-xs  overflow-hidden whitespace-nowrap text-ellipsis text-darkTextColor tracking-wide"
        dangerouslySetInnerHTML={{
          __html: `${artist}`,
        }}
      />
    </div>
  );
};

export default SongHeader;
