import React from "react";
import { cn } from "../../../Utils/Helper";

const Header = ({ name, artist = [], bottom = false }) => {
  const primaryArtists = artist?.primary
    ?.map((artist) => artist.name)
    .join(", ");
  return (
    <div
      className={cn(
        "text-container   flex flex-col justify-center overflow-hidden w-52 max-md:w-72  ",
        bottom && "w-full max-md:select-none"
      )}
    >
      <h3
        className={cn(
          "text-lg text-darkTitle mt-4 text-center max-md:text-xl 1 overflow-ellipsis overflow-hidden w-full whitespace-nowrap",
          bottom && "text-left text-base w-full max-md:text-sm"
        )}
        dangerouslySetInnerHTML={{
          __html: `${name || ""}`,
        }}
      />

      <p
        className={cn(
          "text-xs max-md:text-base  w-full text-center whitespace-nowrap  overflow-hidden text-ellipsis",
          bottom && "text-left text-neutral-300 w-full max-md:text-xs"
        )}
      >
        {primaryArtists || ""}
      </p>
    </div>
  );
};

export default Header;
