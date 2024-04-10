import React from "react";

const Road = ({newPrice, oldPrice, location}) => {
  return (
    <>
      <div className="w-[233px] h-[211px] flex flex-col rounded-xl sm:w-[300px] sm:h-[280px] md:w-[360px] md:h-[340px] lg:w-[233px] lg:h-[211px]">
        <div className="w-full h-[50%]">
          <img
            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1"
            className="object-cover"
            alt=""
          />
        </div>
        <div className="bg-[#9E947C] w-full h-[50%] flex flex-col p-3 flex-grow flex-shrink basis-0">
          <div className="font-bold text-[18px] text-white">
            {location}
          </div>
          <div className="text-white text-[14px]">
            Từ {newPrice}đ - <del>{oldPrice}đ</del>
          </div>
        </div>
      </div>
    </>
  );
};

export default Road;
