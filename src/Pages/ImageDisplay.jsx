import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

function ImageDisplay() {
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const imageName = location.state?.imageName;
  const imageResolution = location.state?.imageResolution;

  return (
    <div>
      <Navbar />

      <div className="bothContainer flex gap-2 h-[100vh] ">
        <div className="imageDetails basis-[20%] border border-black p-5">
          <h2>{`Name is ${imageName}`}</h2>
          <p>Resolution: {imageResolution}</p>
        </div>

        <div className="imageDisplay basis-[80%]   flex flex-col  justify-center items-center">
          <div className="w-[1200px] max-h-[90vh] flex  overflow-hidden">
            <img
              src={imageUrl}
              alt={imageName}
              className="rounded-xl   object-contain max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDisplay;
