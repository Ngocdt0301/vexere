import React from "react";
import Road from "./road";

const Main = () => {
  return (
    <>
        <h2 className="text-[24px] font-medium mb-4 mt-12 sm:text-center max-sm:ml-0 lg:ml-8 ">
          Tuyến đường phổ biến
        </h2>
      <div className="flex justify-center">
        <div className="flex gap-3 relative items-center max-sm:w-full max-sm:flex-wrap sm:flex-wrap max-md:flex-wrap md:flex-wrap w-[980px]">
          <img
            src="https://storage.googleapis.com/vxrd/left-arrow-slick.svg"
            className="max-sm:hidden md:hidden sm:hidden absolute top-[50%] left-1 translate-y-[-50%] opacity-[0.25]"
            alt=""
          />
          <Road
            location={"Sài Gòn - Nha Trang"}
            oldPrice={"250.000"}
            newPrice={"200.000"}
          />
          <Road
            location={"Sài Gòn - Nha Trang"}
            oldPrice={"250.000"}
            newPrice={"200.000"}
          />
          <Road
            location={"Sài Gòn - Nha Trang"}
            oldPrice={"250.000"}
            newPrice={"200.000"}
          />
          <Road
            location={"Sài Gòn - Nha Trang"}
            oldPrice={"250.000"}
            newPrice={"200.000"}
          />
          <img
            src="https://storage.googleapis.com/vxrd/right-arrow-slick.svg"
            className="max-sm:hidden md:hidden sm:hidden absolute right-4 top-[50%] translate-y-[-50%]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Main;
