import React from "react";
import homeImage from "./../assets/images/home.png";
import apartmentImage from "./../assets/images/apartment.png";
import vilaImage from "./../assets/images/vila.png";
import shopImage from "./../assets/images/shops.png";
function Classes() {
  return (
   <div className="w-full mt-20">
  <div className="w-157.25 h-11.25 flex items-center">
    <h3 className="text-[32px] font-bold text-[#353535]">
      در سقفینو دنبال چه نوع ملکی هستید؟
    </h3>
  </div>

  <div className="w-full h-85 mt-5 flex items-center justify-between gap-5">
    
    <div className="flex-1 min-w-0 rounded-lg h-full bg-[#D9D9D9]">
      <div>
        <img src={homeImage} className="w-full" />
      </div>

      <div className="w-full flex flex-col items-center mt-2 h-14.5">
        <p className="text-[20px] font-bold text-[#505050]">
          28,900
        </p>

        <p className="text-[16px] text-[#505050] font-medium">
          خانه مسکونی
        </p>
      </div>
    </div>

    <div className="flex-1 min-w-0 rounded-lg h-full bg-[#D9D9D9]">
      <div>
        <img src={apartmentImage} className="w-full" />
      </div>

      <div className="w-full flex flex-col items-center mt-2 h-14.5">
        <p className="text-[20px] font-bold text-[#505050]">
          309,798
        </p>

        <p className="text-[16px] text-[#505050] font-medium">
          آپارتمان و برج
        </p>
      </div>
    </div>

    <div className="flex-1 min-w-0 rounded-lg h-full bg-[#D9D9D9]">
      <div>
        <img src={vilaImage} className="w-full" />
      </div>

      <div className="w-full flex flex-col items-center mt-2 h-14.5">
        <p className="text-[20px] font-bold text-[#505050]">
          946
        </p>

        <p className="text-[16px] text-[#505050] font-medium">
          ویلا
        </p>
      </div>
    </div>

    <div className="flex-1 min-w-0 rounded-lg h-full bg-[#D9D9D9]">
      <div>
        <img src={shopImage} className="w-full" />
      </div>

      <div className="w-full flex flex-col items-center mt-2 h-14.5">
        <p className="text-[20px] font-bold text-[#505050]">
          27,339
        </p>

        <p className="text-[16px] text-[#505050] font-medium">
          تجاری و اداری
        </p>
      </div>
    </div>

  </div>
</div>
  );
}

export default Classes;
