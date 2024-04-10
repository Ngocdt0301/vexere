import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // console.log(display);
  return (
    <>
      <div className="bg-[#2474E5] w-full h-[72px] flex items-center justify-center">
        <div className="flex gap-4 w-[50%]">
          <img
            src="https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg"
            alt=""
          />
          <a className="text-white text-[14px] font-bold w-[160px] max-sm:hidden md:hidden max-md:hidden">
            Cam kết hoàn 150% nếu nhà xe không giữ vé
          </a>
        </div>
        <div className="flex lg:gap-4 items-center justify-center max-sm:gap-2 max-md:gap-2 md:gap-2 ">
          <a className="text-white text-[14px] font-medium max-sm:hidden max-md:hidden md:hidden lg:block">
            Quản lý đơn hàng
          </a>
          <a className="text-white text-[14px] font-medium max-sm:hidden max-md:hidden md:hidden lg:block">
            Mở bán vé xe trên Vexere
          </a>
          <a className="text-white text-[14px] font-medium max-sm:hidden max-md:hidden md:hidden lg:block">
            Trở thành đối tác
          </a>
          <div className="w-[28px] h-[20px]">
            <img
              src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/en-flag.svg"
              alt=""
            />
          </div>
          {/* {display ? } */}
          {/* {if } */}
          <button className="max-sm:w-[60px] max-sm:text-[12px] max-sm:font-medium p-2 h-[36px] w-[130px] rounded-[6px] bg-white border-[1px] border-solid border-[#E0E0E0] flex items-center justify-center gap-1 text-[14px] font-bold ">
            Hotline 24/7
          </button>
          <Link to="/register" className="max-sm:w-[60px] max-sm:text-[12px] max-sm:font-medium p-2 h-[36px] w-[130px] rounded-[6px] bg-white border-[1px] border-solid border-[#E0E0E0] flex items-center justify-center gap-1 text-[14px] font-bold ">
            Đăng Ký
          </Link>
          <svg className="max-sm:block max-md:hidden lg:hidden md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            id="arrow-drop-down"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
