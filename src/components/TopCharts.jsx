import React from "react";
import { SingleChart } from "../components";
import { useMusicContext } from "../Context/MusicContext";

const TopCharts = () => {
  const { charts } = useMusicContext();
  return (
    <div className="flex gap-8 max-md:gap-3 overflow-scroll h-full">
      {charts &&
        charts.length > 0 &&
        charts.map((item, index) => {
          return <SingleChart {...item} key={index} />;
        })}
    </div>
  );
};

export default TopCharts;
