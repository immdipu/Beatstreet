import React from "react";
import DownloadLogo from "./DownloadLogo";

const DownloadProgress = ({ HandleClick }) => {
  return (
    <div
      onClick={HandleClick}
      className="h-fit btnss hover:opacity-40 duration-200 ease-linear transition-opacity"
    >
      <DownloadLogo />
    </div>
  );
};

export default DownloadProgress;
