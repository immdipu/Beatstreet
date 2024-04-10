import React from "react";
import { SongsList } from "../components";
import { Logo, LogoText } from "../components";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../App";
import toast from "react-hot-toast";
import Help from "@mui/icons-material/Help";
const Downloads = () => {
  const data = useLiveQuery(() => db.songs.toArray(), []);

  return (
    <div>
      <section className=" flex justify-center items-center py-20 max-md:py-16  rounded-b-2xl mb-5 relative max-md:h-20 h-48">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          <Logo />
        </div>
        <div className="ml-3 max-lg:ml-11 ">
          <LogoText />
        </div>
      </section>

      <section className="px-14 max-md:px-2 overflow-auto">
        <div className="mb-5 ml-3">
          <div className="flex items-center gap-1 ">
            <Help fontSize={"small"} className="text-neutral-500" />
            <p className=" text-xs  font-light text-neutral-400">
              Downloaded songs are stored locally on your device and can be
              played offline. Install the app on the Phone or PC to access
              offline songs.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="text-neutral-50  text-lg max-md:text-base px-4 mb-5">
            Your Downloads{" "}
            {data && data.length > 0 && (
              <span className="text-base">({data && data.length})</span>
            )}
          </h3>
          {data && data.length > 0 && (
            <button
              onClick={async () => {
                await db.songs.clear();
                toast.success("All songs deleted successfully");
              }}
              className="text-red-300 max-md:text-sm hover:bg-neutral-600 rounded-md py-1 h-fit px-2"
            >
              Delete All
            </button>
          )}
        </div>

        {data && data.length > 0 && <SongsList songs={data} offline={true} />}
        {(!data || (data && data?.length == 0)) && (
          <section className="mt-8 w-full text-center text-neutral-500">
            <div>No downloads</div>
          </section>
        )}
      </section>
    </div>
  );
};

export default Downloads;
