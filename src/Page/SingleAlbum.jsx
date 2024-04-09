import React from "react";
import { useParams } from "react-router-dom";
import { SongsList, LoadingSpinner } from "../components";
import { ImageFetch } from "../Utils/Helper";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RippleButton from "ripple-effect-reactjs";
import Image from "../components/ui/Image";
import musicApi from "../Api/Api";
import { useQuery } from "@tanstack/react-query";

const SingleAlbum = () => {
  let { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["favoriteSongs"],
    queryFn: () => musicApi.SingleAlbum(id),
  });

  if (isLoading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  if (isError) {
    return <div>error</div>;
  }

  console.log("data", data);

  const HandleDownloadAll = () => {
    const btns = document.querySelectorAll(".btnss");
    btns.forEach((btn) => {
      btn.click();
    });
  };

  return (
    <div className={"bg-darkBlue  overflow-hidden "}>
      <div className="gradient flex flex-col gap-8 relative w-full pt-3 px-16 max-md:px-5 pb-7  Artistbackground">
        <div className="grid grid-cols-[max-content,auto] mt-7 max-md:grid-cols-1 max-md:place-items-center gap-5 ">
          <Image
            src={ImageFetch(data)}
            className="w-56 h-56 rounded-md"
            alt={data?.name}
          />

          <div className="flex place-content-end max-md:place-items-center flex-col">
            <h2
              className="font-bold text-4xl max-md:text-center max-md:text-2xl text-white tracking-wider"
              dangerouslySetInnerHTML={{
                __html: `${data?.name}`,
              }}
            />

            <div className="flex max-md:flex-col items-center gap-3 max-md:my-0 max-md:gap-2 my-2 max-md:mt-4">
              <p
                className="text-slate-200 text-sm max-md:text-xs max-md:text-center"
                dangerouslySetInnerHTML={{
                  __html: `${data?.description}`,
                }}
              />
              <div className="bg-darkTextColor rounded-full w-1 h-1 max-md:hidden"></div>
              <p className="text-slate-200 text-sm max-md:text-xs">
                {data.year}
              </p>
              <div className="bg-darkTextColor rounded-full max-md:text-xs w-1 h-1 max-md:hidden"></div>
              <p className="text-slate-200 text-sm min-w-fit">
                {data.songCount} songs
              </p>
            </div>

            <div className="w-[38px] max-md:mt-4" onClick={HandleDownloadAll}>
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
      <section className="mx-12 mb-10 mt-6 max-md:mx-2">
        {data.songs && <SongsList songs={data.songs} />}
      </section>
    </div>
  );
};

export default SingleAlbum;
