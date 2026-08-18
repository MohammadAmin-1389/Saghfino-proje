import React from "react";
import LogoImage from "../../assets/images/Logo.png";
import bckImage from "../../assets/images/bck.png";

function Navbar() {
  return (
    <div
      className="bg-cover bg-center w-full h-172.5 flex-col flex items-center gap-25"
      style={{ backgroundImage: `url(${bckImage})` }}
    >
      <div className="w-306 mt-12.5 h-28.75 rounded-2xl bg-[#F9F9F9] flex items-center px-8">
        <div className="flex items-center gap-8.75">
          <div className="flex items-center justify-center border rounded-lg w-25.5 h-12 border-[#CB1B1B]">
            <h3 className="text-[14px] text-[#CB1B1B] font-medium">ثبت آگهی</h3>
          </div>

          <div className="flex items-center justify-center w-8.75 h-9">
            <h3 className="text-[20px] font-bold text-[#505050]">ورود</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-11.25 flex-1">
          <h4 className="w-9.25 h-9 text-[20px] font-bold text-[#505050] whitespace-nowrap">
            اجاره
          </h4>

          <h4 className="w-10.25 h-9 text-[20px] font-bold text-[#505050] whitespace-nowrap">
            خرید
          </h4>

          <h4 className="w-35.25 h-9 text-[20px] font-bold text-[#505050] whitespace-nowrap">
            املاک و مستغلات
          </h4>

          <h4 className="w-30.25 h-9 text-[20px] font-bold text-[#505050] whitespace-nowrap">
            مشاورین املاک
          </h4>

          <h4 className="w-16.75 h-9 text-[20px] font-bold text-[#505050] whitespace-nowrap">
            اخبار روز
          </h4>
        </div>

        <div className="flex items-center justify-center shrink-0">
          <img src={LogoImage} alt="Saghfinoo" />
        </div>
      </div>
      <div className="w-216 h-30.5 flex-col items-center flex gap-3">
        <div className="w-134.75 h-16.25">
          <h1 className="text-[54px] font-bold text-[#EDEDED]">
            سقفینو;سقفی برای همه
          </h1>
        </div>
        <div className=" w-216 h-11.25 ">
          <p className="text-[32px] justify-center flex items-center font-bold text-[#FFFFFF]">
            آسانی و سرعت در پیدا کردن سقفی تازه را در سقفینو تجربه کنید
          </p>
        </div>
      </div>
      <div className="w-204 h-27 bg-[#FFFFFF] rounded-xl">
        <div className="flex items-center  justify-around">
          <div className="w-94.75 flex  justify-center h-10 pt-4">
            <h3 className="text-[24px] font-medium text-[#353535]">خرید</h3>
          </div>

          <div className="w-94.75 flex justify-center h-10 pt-4">
            <h3 className="text-[24px] font-medium text-[#353535]">اجاره</h3>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute right-2.5 flex pt-6 text-[18px]">
            <p className="flex">
              شهر مورد نطر را جستجو کنید
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                  fill="#353535"
                />
                <path
                  d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z"
                  fill="#353535"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
