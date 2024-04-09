import React from "react";

const Timing = ({ musicCurrentTime, musicTotalLength }) => {
  return (
    <div className="flex justify-between w-full mb-2 max-md:mb-0 max-md:mt-6  ">
      <p className="text-xs max-md:text-sm tracking-normal">
        {musicCurrentTime}
      </p>
      <p className="text-xs max-md:text-sm tracking-normal">
        {musicTotalLength}
      </p>
    </div>
  );
};

export default Timing;
