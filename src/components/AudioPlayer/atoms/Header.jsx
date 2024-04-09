import React from "react";

const Header = ({ name, artist }) => {
  const primaryArtists = artist?.primary
    .map((artist) => artist.name)
    .join(", ");
  return (
    <div className="text-container  flex flex-col justify-center overflow-hidden w-52 max-md:w-72 items-center ">
      <h3
        className={
          "text-lg text-darkTitle mt-4 text-center max-md:text-xl 1 overflow-ellipsis overflow-hidden w-full whitespace-nowrap"
        }
        dangerouslySetInnerHTML={{
          __html: `${name || ""}`,
        }}
      />

      <p className="text-xs max-md:text-base opacity-90 text-center whitespace-nowrap w-40 overflow-hidden text-ellipsis">
        {primaryArtists || ""}
      </p>
    </div>
  );
};

export default Header;
