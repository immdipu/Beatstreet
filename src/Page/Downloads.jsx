import React from "react";
import { SongsList } from "../components";
import { Logo, LogoText } from "../components";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../App";
const Downloads = () => {
  const data = useLiveQuery(() => db.songs.toArray(), []);

  return (
    <div>
      <section className=" flex justify-center items-center py-20  rounded-b-2xl mb-16 relative h-48">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          <Logo />
        </div>
        <div className="ml-3 max-lg:ml-11 ">
          <LogoText />
        </div>
      </section>

      <section className=" px-14 max-md:px-2 overflow-auto">
        <h3 className="text-neutral-50  text-xl max-md:text-xl px-4 mb-5">
          Your Downloads
        </h3>
        {data && data.length > 0 && <SongsList songs={data} offline={true} />}
      </section>
    </div>
  );
};

export default Downloads;
