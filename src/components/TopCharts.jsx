import React from "react";
import { SingleChart } from "../components";

const TopCharts = ({ data }) => {
  return (
    <div className="flex gap-8 max-md:gap-3 overflow-scroll h-full">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return <SingleChart {...item} key={index} />;
        })}
    </div>
  );
};

export default TopCharts;
