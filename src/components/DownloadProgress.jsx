import React from "react";
import DownloadLogo from "./DownloadLogo";

const DownloadProgress = ({ HandleClick }) => {
  return (
    <div onClick={HandleClick} className="h-fit">
      <DownloadLogo />
    </div>
  );
};

export default DownloadProgress;
