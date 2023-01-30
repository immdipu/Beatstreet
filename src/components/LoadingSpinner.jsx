import React from "react";
import HashLoader from "react-spinners/HashLoader";

const LoadingSpinner = ({ size = 40 }) => {
  return (
    <div className="w-fit">
      <HashLoader size={size} color="#2764eb" />
    </div>
  );
};

export default LoadingSpinner;
