import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { cn } from "../../Utils/Helper";

const Image = ({ src, alt, className, variant = "rounded" }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={cn("relative  overflow-hidden", className)}>
      {loading && (
        <Skeleton
          variant={variant}
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            bgcolor: "#545454",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${loading ? "hidden" : ""}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default Image;
