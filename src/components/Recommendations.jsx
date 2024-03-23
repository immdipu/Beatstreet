import React from "react";
import SinglesongCard from "./SinglesongCard";

const Recommendations = ({ data }) => {
  return (
    <div className="flex gap-6 overflow-scroll h-full">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return <SinglesongCard key={index} {...item} />;
        })}
    </div>
  );
};

export default Recommendations;
