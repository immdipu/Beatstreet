import React from "react";

const LanguagesList = ({ data }) => {
  return (
    <div className="text-slate-200 text-xs flex flex-wrap max-md:justify-center">
      Languages:
      {data.map((item, index) => {
        return (
          <span className="px-1 text-slate-300 text-xs capitalize" key={index}>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default LanguagesList;
