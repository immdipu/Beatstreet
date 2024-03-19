import React from "react";
import { MusicCard, SinglesongCard, SingleChart } from "../components";

const Albums = ({ data }) => {
  return (
    <div className="flex gap-6 overflow-scroll h-full">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          if (item.type === "song") {
            return <SinglesongCard key={index} {...item} />;
          }
          if (item.type === "playlist") {
            return <SingleChart key={index} {...item} />;
          }
          if (item.type === "album") {
            return <MusicCard key={index} {...item} />;
          }
        })}
    </div>
  );
};

export default Albums;
