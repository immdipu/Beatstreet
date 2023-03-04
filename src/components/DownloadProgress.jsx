import React from "react";
import DownloadLogo from "./DownloadLogo";

const DownloadProgress = ({ HandleClick }) => {
  return (
    <div onClick={HandleClick} className="border-2 h-fit">
      <DownloadLogo />
    </div>
  );
};

export default DownloadProgress;
