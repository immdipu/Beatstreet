import React from "react";
import { useParams } from "react-router-dom";
import { SongsList, LoadingSpinner } from "../components";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RippleButton from "ripple-effect-reactjs";
import { useQuery } from "@tanstack/react-query";
import musicApi from "../Api/Api";
import Image from "../components/ui/Image";

const SinglePlayLists = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["SinglePlaylist", id],
    queryFn: () => musicApi.SinglePlaylist({ id }),
  });

  if (isLoading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex justify-center items-center mt-10">
        <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
          Sorry, we couldn't fetch the playlist at this time.
          <br />
          <br />
          Please try again later.
        </p>
      </div>
    );
  }

  console.log("single playlist", data);

  const HandleDownloadAll = () => {
    const btns = document.querySelectorAll(".btnss");
    btns.forEach((btn) => {
      btn.click();
    });
  };

  return (
    <div className={"bg-darkBlue  overflow-hidden "}>
      <div className="gradient flex flex-col gap-8 w-full pt-3 px-16 max-md:px-5 pb-7 Artistbackground ">
        <div className="grid grid-cols-[max-content,auto] mt-7 max-md:grid-cols-1  max-md:place-items-center gap-5">
          <Image
            alt={data.name}
            src={data.image[2]?.url || data.image[1]?.url || data.image[0]?.url}
            variant="rounded"
            className={"size-52"}
          />

          <div className="flex place-content-end max-md:place-items-center flex-col">
            <h2 className="font-bold text-4xl max-md:text-2xl max-md:text-center text-white tracking-wider">
              {data.name}
            </h2>
            <div className="flex max-md:flex-col items-center gap-3 my-2 max-md:mt-4">
              <p className="text-slate-200 text-sm max-md:text-xs">
                {data.description}
              </p>
              <div className="bg-darkTextColor rounded-full max-md:text-xs w-1 h-1 max-md:hidden"></div>
              <p className="text-slate-200 text-sm">{data.songCount} songs</p>

              <div
                className="w-[38px] ml-3 max-md:mt-4"
                onClick={HandleDownloadAll}
                tiltle="Download all "
              >
                <RippleButton height={36} radius={50} color={"#5454548c"}>
                  <CloudDownloadIcon
                    sx={{ fontSize: 35 }}
                    className="text-neutral-300 cursor-pointer"
                  />
                </RippleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-12 mt-6 max-md:mx-2 mb-14">
        {data.songs && data.songs.length > 0 && (
          <SongsList songs={data.songs} current={"Playlist"} />
        )}
      </section>
    </div>
  );
};

export default SinglePlayLists;
