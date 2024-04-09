import React from "react";
import { motion } from "framer-motion";
import UpNextSongs from "../../UpNextSongs";

const UpcomingSongsList = ({ setShowUpNext }) => {
  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: "0", transition: { ease: "easeInOut" } }}
      exit={{ y: "100%", transition: { ease: "easeInOut" } }}
      className="bg-neutral-800  bg-opacity-70 max-md:bottom-0 pb-4 z-[55] backdrop-blur-md absolute
px-1 rounded-xl w-full"
    >
      <div
        onClick={() => setShowUpNext((prev) => !prev)}
        className=" cursor-pointer pt-3"
      >
        <div className="bg-neutral-400 w-10 h-1 rounded-xl mx-auto mb-2 cursor-pointer"></div>
      </div>

      <div className="overflow-auto h-96">
        <UpNextSongs />
      </div>
    </motion.section>
  );
};

export default UpcomingSongsList;
