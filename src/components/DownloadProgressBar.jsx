import React from "react";

const DownloadProgressBar = ({ progress, percentage }) => {
  const style = {
    strokeDashoffset: `${progress}`,
  };
  return (
    <div className="round-progress-bar rounded-full relative flex items-center justify-center">
      <div className="progress-label text-xs">{percentage}%</div>
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
