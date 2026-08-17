import React from "react";
import LogoImage from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <div className="w-[1224px] h-[115px] rounded-[16px] bg-[#F9F9F9] flex items-center px-[32px]">
      <div className="flex items-center gap-[35px]">
        <div className="flex items-center justify-center border rounded-[8px] w-[102px] h-[48px] border-[#CB1B1B]">
          <h3 className="text-[14px] text-[#CB1B1B] font-medium">ثبت آگهی</h3>
        </div>

        <div className="flex items-center justify-center w-[35px] h-[36px]">
          <h3 className="text-[20px] font-bold text-[#505050]">ورود</h3>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[45px] flex-1">
        <h4 className="w-[37px] h-[36px] text-[20px] font-bold text-[#505050] whitespace-nowrap">
          اجاره
        </h4>

        <h4 className="w-[41px] h-[36px] text-[20px] font-bold text-[#505050] whitespace-nowrap">
          خرید
        </h4>

        <h4 className="w-[141px] h-[36px] text-[20px] font-bold text-[#505050] whitespace-nowrap">
          املاک و مستغلات
        </h4>

        <h4 className="w-[121px] h-[36px] text-[20px] font-bold text-[#505050] whitespace-nowrap">
          مشاورین املاک
        </h4>

        <h4 className="w-[67px] h-[36px] text-[20px] font-bold text-[#505050] whitespace-nowrap">
          اخبار روز
        </h4>
      </div>

      <div className="flex items-center justify-center shrink-0">
        <img src={LogoImage} alt="Saghfinoo" />
      </div>
    </div>
  );
}

export default Navbar;
