import React from "react";
import RippleButton from "ripple-effect-reactjs";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
const DownloadAllButton = () => {
  const HandleDownloadAll = () => {
    const btns = document.querySelectorAll(".btnss");
    btns.forEach((btn) => {
      btn.click();
    });
  };

  return (
    <div
      className="w-[38px] max-md:mt-4"
      title="Download all"
      onClick={HandleDownloadAll}
    >
      <RippleButton height={36} radius={50} color={"#5454548c"}>
        <CloudDownloadIcon
          sx={{ fontSize: 35 }}
          className="text-neutral-300 cursor-pointer"
        />
      </RippleButton>
    </div>
  );
};

export default DownloadAllButton;
