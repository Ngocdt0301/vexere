import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-full h-[480px] bg-cover bg-center relative">
        <img
          src="https://229a2c9fe669f7b.cmccloud.com.vn/images/banner-main-vi.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="text-[34px] text-white font-medium text-center mb-[22px] max-sm:text-[26px] max-md:text-[30px]">
            Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
          </h2>
          <div className="bg-[#F2F2F2] max-sm:w-[450px] lg:w-[1016px] max-md:w-[600px] h-[150px] rounded-xl md:w-[700px]">
            <div className="max-sm:gap-3 max-md:gap-3 flex w-full h-[60px] justify-center items-center border-b-[1px] border-[#E8E8E8]">
              <div className="max-sm:gap-2 max-sm-text-[12px] max-sm:p-0 md:gap-3 flex justify-center items-center text-[16px] font-normal pt-5 px-6 pb-[14px] gap-2 cursor-pointer text-[#2474E5] border-b-2 border-[#2474E5]">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.97998 16.5C4.97998 17.38 5.36998 18.17 5.97998 18.72V20.5C5.97998 21.05 6.42998 21.5 6.97998 21.5H7.97998C8.52998 21.5 8.97998 21.05 8.97998 20.5V19.5H16.98V20.5C16.98 21.05 17.43 21.5 17.98 21.5H18.98C19.53 21.5 19.98 21.05 19.98 20.5V18.72C20.59 18.17 20.98 17.38 20.98 16.5V6.5C20.98 3 17.4 2.5 12.98 2.5C8.55998 2.5 4.97998 3 4.97998 6.5V16.5ZM8.47998 17.5C7.64998 17.5 6.97998 16.83 6.97998 16C6.97998 15.17 7.64998 14.5 8.47998 14.5C9.30998 14.5 9.97998 15.17 9.97998 16C9.97998 16.83 9.30998 17.5 8.47998 17.5ZM17.48 17.5C16.65 17.5 15.98 16.83 15.98 16C15.98 15.17 16.65 14.5 17.48 14.5C18.31 14.5 18.98 15.17 18.98 16C18.98 16.83 18.31 17.5 17.48 17.5ZM18.98 11.5H6.97998V6.5H18.98V11.5Z"
                    fill="#2474E5"
                  />
                </svg>
                Xe Khách
              </div>
              <div className="max-sm:gap-2 max-sm-text-[12px] max-sm:p-0 max-sm:after:absolute max-sm:after:top-[-10px] max-sm:after:right-[-8px] flex justify-center items-center relative text-[16px] font-normal pt-5 px-6 pb-[14px] gap-2 cursor-pointer after:content-['-20K'] after:bg-[#EB5757] after:text-white after:w-[30px] after:h-[14px] after:rounded-2xl after:font-semibold after:text-[10px] after:text-center after:absolute after:top-2 after:right-1">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.85 16.5V14.5L14.429 9.5V4C14.429 3.17 13.724 2.5 12.85 2.5C11.976 2.5 11.271 3.17 11.271 4V9.5L2.84998 14.5V16.5L11.271 14V19.5L9.16598 21V22.5L12.85 21.5L16.534 22.5V21L14.43 19.5V14L22.85 16.5Z"
                    fill="#474747"
                  />
                </svg>
                Máy bay
              </div>
              <div className="max-sm:gap-2 max-sm-text-[12px] max-sm:p-0 max-sm:after:absolute max-sm:after:top-[-10px] max-sm:after:right-[-8px] flex justify-center items-center text-[16px] font-normal relative pt-5 px-6 pb-[14px] gap-2 cursor-pointer  after:content-['Mới'] after:bg-[#EB5757] after:text-white after:w-[30px] after:h-[14px] after:rounded-2xl after:font-semibold after:text-[10px] after:text-center after:absolute after:top-2 after:right-1">
                <svg
                  width={17}
                  height={21}
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.53997 0.899994C3.52154 0.899994 2.54482 1.30456 1.82468 2.0247C1.10454 2.74484 0.699974 3.72156 0.699974 4.73999V15.3C0.699974 15.5546 0.801117 15.7988 0.981152 15.9788C1.16119 16.1589 1.40537 16.26 1.65997 16.26H2.61997L0.699974 20.1H2.61997L3.19597 18.948H13.564L14.14 20.1H16.06L14.14 16.26H15.1C15.3546 16.26 15.5988 16.1589 15.7788 15.9788C15.9588 15.7988 16.06 15.5546 16.06 15.3V4.73999C16.06 3.72156 15.6554 2.74484 14.9353 2.0247C14.2151 1.30456 13.2384 0.899994 12.22 0.899994H4.53997ZM12.22 16.26H4.53997L4.05997 17.22H12.7L12.22 16.26ZM4.53997 2.81999C4.03076 2.81999 3.5424 3.02228 3.18233 3.38235C2.82226 3.74242 2.61997 4.23078 2.61997 4.73999V9.53999H7.41997V2.81999H4.53997ZM14.14 9.53999H9.33997V2.81999H12.22C12.7292 2.81999 13.2175 3.02228 13.5776 3.38235C13.9377 3.74242 14.14 4.23078 14.14 4.73999V9.53999ZM5.49997 12.9C5.49997 13.2819 5.34826 13.6482 5.07821 13.9182C4.80816 14.1883 4.44189 14.34 4.05997 14.34C3.67806 14.34 3.31179 14.1883 3.04174 13.9182C2.77169 13.6482 2.61997 13.2819 2.61997 12.9C2.61997 12.5181 2.77169 12.1518 3.04174 11.8818C3.31179 11.6117 3.67806 11.46 4.05997 11.46C4.44189 11.46 4.80816 11.6117 5.07821 11.8818C5.34826 12.1518 5.49997 12.5181 5.49997 12.9ZM12.7 14.34C13.0819 14.34 13.4482 14.1883 13.7182 13.9182C13.9883 13.6482 14.14 13.2819 14.14 12.9C14.14 12.5181 13.9883 12.1518 13.7182 11.8818C13.4482 11.6117 13.0819 11.46 12.7 11.46C12.3181 11.46 11.9518 11.6117 11.6817 11.8818C11.4117 12.1518 11.26 12.5181 11.26 12.9C11.26 13.2819 11.4117 13.6482 11.6817 13.9182C11.9518 14.1883 12.3181 14.34 12.7 14.34Z"
                    fill="#474747"
                  />
                </svg>
                Tàu hỏa
              </div>
              <div className="max-sm:gap-2 max-sm-text-[12px] max-sm:p-0 max-sm:after:absolute max-sm:after:top-[-10px] max-sm:after:right-[-8px] flex justify-center items-center text-[16px] font-normal relative pt-5 px-6 pb-[14px] gap-2 cursor-pointer  after:content-['Mới'] after:bg-[#EB5757] after:text-white after:w-[30px] after:h-[14px] after:rounded-2xl after:font-semibold after:text-[10px] after:text-center after:absolute after:top-2 after:right-1">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.02999 5.137L5.19999 0.997C5.51999 0.68 5.95999 0.5 6.41999 0.5H17.794C18.743 0.5 19.52 1.263 19.52 2.214V8.214C19.52 9.157 18.743 9.929 17.793 9.929C17.7921 10.2681 17.7243 10.6036 17.5935 10.9164C17.4627 11.2292 17.2715 11.5132 17.0308 11.752C16.7902 11.9908 16.5047 12.1798 16.1909 12.3082C15.8771 12.4365 15.541 12.5017 15.202 12.5C14.8629 12.5017 14.5269 12.4365 14.2131 12.3082C13.8992 12.1798 13.6138 11.9908 13.3731 11.752C13.1325 11.5132 12.9413 11.2292 12.8105 10.9164C12.6797 10.6036 12.6119 10.2681 12.611 9.929H7.42899C7.42807 10.2679 7.36035 10.6033 7.22969 10.916C7.09904 11.2286 6.90801 11.5125 6.66755 11.7513C6.42709 11.9901 6.1419 12.1791 5.82831 12.3076C5.51472 12.4361 5.17887 12.5014 4.83999 12.5C4.50085 12.5018 4.16469 12.4368 3.85075 12.3085C3.53681 12.1802 3.25127 11.9912 3.01049 11.7524C2.76971 11.5135 2.57841 11.2295 2.44757 10.9166C2.31673 10.6038 2.2489 10.2681 2.24799 9.929C1.29699 9.929 0.519989 9.157 0.519989 8.214V6.354C0.519989 5.9 0.700989 5.463 1.02999 5.137ZM17.793 4.786V3.07C17.7914 2.84199 17.6996 2.62387 17.5378 2.46329C17.3759 2.30271 17.157 2.21273 16.929 2.213H14.339V5.642H16.929C17.157 5.64227 17.3759 5.55229 17.5378 5.39171C17.6996 5.23113 17.7914 5.01401 17.793 4.786ZM15.202 11C15.798 11 16.282 10.52 16.282 9.929C16.282 9.337 15.798 8.857 15.202 8.857C14.606 8.857 14.122 9.337 14.122 9.929C14.122 10.52 14.606 11 15.202 11ZM9.15599 5.643H12.611V2.214H9.15599V5.643ZM4.83799 11C5.43399 11 5.91799 10.52 5.91799 9.929C5.91799 9.337 5.43399 8.857 4.83799 8.857C4.24199 8.857 3.75799 9.337 3.75799 9.929C3.75799 10.52 4.24199 11 4.83799 11ZM7.42999 5.643V2.214H6.56599L3.11099 5.643H7.42999ZM21.687 18.784C21.559 18.784 21.432 18.806 21.311 18.82L19.852 17.356H20.978C21.368 17.356 21.687 17.035 21.687 16.642V16.371C21.6879 16.2497 21.6577 16.1301 21.599 16.0239C21.5404 15.9176 21.4554 15.8282 21.3522 15.7643C21.2491 15.7005 21.1312 15.6642 21.01 15.6591C20.8887 15.6539 20.7682 15.6801 20.66 15.735L19.045 16.549L17.225 14.714C17.1609 14.6466 17.0838 14.5929 16.9984 14.5562C16.913 14.5194 16.821 14.5003 16.728 14.5H14.603C14.4136 14.5 14.232 14.5752 14.0981 14.7091C13.9642 14.843 13.889 15.0246 13.889 15.214C13.889 15.4034 13.9642 15.585 14.0981 15.7189C14.232 15.8528 14.4136 15.928 14.603 15.928H16.14C16.332 15.928 16.509 16.007 16.643 16.135L17.855 17.356H15.482C15.3706 17.3566 15.2609 17.3836 15.162 17.435L12.939 18.555C12.8065 18.6223 12.656 18.6455 12.5093 18.6213C12.3627 18.597 12.2277 18.5265 12.124 18.42L11.274 17.563C11.1386 17.4328 10.9588 17.3588 10.771 17.356H8.22799C8.03862 17.356 7.85702 17.4312 7.72311 17.5651C7.58921 17.699 7.51399 17.8806 7.51399 18.07C7.51399 18.2594 7.58921 18.441 7.72311 18.5749C7.85702 18.7088 8.03862 18.784 8.22799 18.784H10.353C8.56799 18.784 7.17299 20.441 7.59799 22.312C7.71582 22.8228 7.97388 23.2905 8.34313 23.6626C8.71237 24.0347 9.17813 24.2963 9.68799 24.418C10.1066 24.5181 10.5424 24.5216 10.9626 24.4285C11.3828 24.3353 11.7763 24.1478 12.1133 23.8802C12.4504 23.6126 12.7222 23.2719 12.9082 22.8838C13.0942 22.4957 13.1895 22.0704 13.187 21.64L14.185 22.647C14.455 22.919 14.815 23.068 15.191 23.068H15.907C16.417 23.068 16.884 22.798 17.139 22.348L19.2 18.713L19.916 19.434C19.4955 19.7737 19.1803 20.2259 19.0071 20.738C18.8339 21.2501 18.81 21.8008 18.938 22.326C19.179 23.354 20.008 24.189 21.028 24.426C22.877 24.846 24.52 23.433 24.52 21.64C24.52 20.062 23.252 18.784 21.687 18.784ZM10.353 23.068C9.57399 23.068 8.93699 22.426 8.93699 21.64C8.93699 20.855 9.57399 20.212 10.353 20.212C11.133 20.212 11.77 20.855 11.77 21.64C11.77 22.426 11.133 23.068 10.353 23.068ZM21.687 23.068C20.907 23.068 20.27 22.426 20.27 21.64C20.27 20.855 20.907 20.212 21.687 20.212C22.466 20.212 23.103 20.855 23.103 21.64C23.103 22.426 22.466 23.068 21.687 23.068Z"
                    fill="#474747"
                  />
                </svg>
                Thuê xe
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-[88px] gap-3">
              <div className="max-sm:w-[80%] max-sm:ml-1 max-sm:h-[50px] max-md:w-[80%] flex w-[820px] h-[56px] border-[1px] border-[#E0E0E0] rounded-lg">
                <div className="max-sm:w-[25%] max-sm:text-[14px] max-sm:gap-0 max-md:w-[25%] md:w-[25%]  flex items-center gap-2  text-4 font-normal text-[#B8B8B8] w-[205px] ">
                  <img
                    src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_new_24dp.svg"
                    className="ml-2 max-sm:ml-0"
                    alt=""
                  />
                  Nơi xuất phát
                </div>
                <div className="max-sm:w-[25%] max-sm:text-[14px] max-sm:gap-0 max-md:w-[25%] md:w-[25%] flex items-center gap-2  text-4 font-normal text-[#B8B8B8] w-[205px] border-[#E0E0E0] border-l">
                  <img
                    src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg"
                    className="ml-2 max-sm:ml-0"
                    alt=""
                  />
                  Nơi đến
                </div>
                <div className="max-sm:w-[25%] max-sm:text-[14px] max-sm:gap-0 max-md:w-[25%] md:w-[25%] flex items-center gap-2  text-4 font-normal text-[#B8B8B8] w-[205px] border-[#E0E0E0] border-l">
                  <img
                    src="https://storage.googleapis.com/fe-production/svgIcon/event_vex_blue_24dp.svg"
                    alt=""
                    className="ml-2 max-sm:ml-0"
                  />
                  Ngày Đi
                </div>
                <div className="max-sm:w-[25%] max-sm:text-[14px] max-sm:gap-0 max-md:w-[25%] md:w-[25%] flex items-center gap-2 text-4 font-medium text-[#2474E5] w-[205px] border-[#E0E0E0] border-l max-sm:text-center">
                  Thêm ngày về
                </div>
              </div>
              <button className="bg-[#FFD333] w-[148px] h-[56px] rounded-lg font-medium text-[17px] text-[#141414] max-sm:w-[80px] max-sm:h-[50px] max-sm:mr-1 ">
                Tìm Kiếm
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black-rgba h-16 w-full absolute bottom-0 flex items-center justify-center gap-16 max-sm:gap-2 max-md:gap-3 md:gap-3">
          <div className="text-white text-[16px] font-medium flex gap-[6px] max-sm:text-[12px] max-sm:gap-1">
            <img
              src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/verified_yellow.svg"
              alt=""
            />
            Chắc chắn có chỗ
          </div>
          <div className="text-white text-[16px] font-medium flex gap-[6px] max-sm:text-[12px] max-sm:gap-1">
            <img
              src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/headset_mic_yellow.svg"
              alt=""
            />
            Hỗ trợ 24/7{" "}
          </div>
          <div className="text-white text-[16px] font-medium flex gap-[6px] max-sm:text-[12px] max-sm:gap-1">
            <img
              src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/headset_mic_yellow.svg"
              alt=""
            />
            Nhiều ưu đãi
          </div>
          <div className="text-white text-[16px] font-medium flex gap-[6px] max-sm:text-[12px] max-sm:gap-1">
            <img
              src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/monetization_on_yellow.svg"
              alt=""
            />
            Thanh toán đa dạng
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
