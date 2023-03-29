import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const DownloadProgressBar = ({ progress, percentage, HandleCancell }) => {
  const [showCancel, setShowCancel] = useState(false);
  const style = {
    strokeDashoffset: `${progress}`,
  };

  return (
    <div
      className="round-progress-bar rounded-full relative flex items-center justify-center"
      onMouseEnter={() => setShowCancel(true)}
      onMouseLeave={() => setShowCancel(false)}
      onClick={HandleCancell}
    >
      <div className="w-8 h-7 text-center">
        {showCancel && (
          <CloseIcon className="text-slate-100" sx={{ fontSize: 20 }} />
        )}
        {!showCancel && (
          <div className="text-xs text-slate-50 pt-[6px]">{percentage}%</div>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute h-16 w-16 rotate-[280deg] text-slate-200"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle style={style} cx="32" cy="32" r="20" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default DownloadProgressBar;
