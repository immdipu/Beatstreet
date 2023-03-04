import React from "react";

const DownloadProgressBar = ({ progress, percentage }) => {
  const style = {
    strokeDashoffset: `${progress}`,
  };
  return (
    <div className=" w-fit">
      <div className="round-progress-bar border-2 rounded-full relative h-16 w-16 m-4 flex items-center justify-center">
        <div className="progress-label">{percentage}%</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute top- h-16 w-16 rotate-[280deg]"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle style={style} cx="32" cy="32" r="30" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default DownloadProgressBar;
