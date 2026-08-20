import React from "react";
import card1Image from "./../assets/images/card1.png";
import card2Image from "./../assets/images/card2.png";
import card3Image from "./../assets/images/card3.png";

function Services() {
  return (
    <div className="mt-20">
      <div>
        <div className="w-[629px] flex justify-start mr-8 h-[45px]">
          <h2 className="text-[32px] font-bold text-[#353535]">
            سقفینو چطور به خانه دار شدن شما کمک میکند
          </h2>
        </div>

        <div className="flex justify-between mt-7">
          <div className="w-[392px] h-[511px] flex-col flex items-center bg-[#F9F9F9] rounded-[16px]">
            <div className="flex items-center justify-center">
              <img src={card3Image} />
            </div>
            <div className="flex-col flex justify-center items-center">
              <div className="w-[328px] h-[28px] mt-5 flex items-center justify-center">
                <h3 className="text-[20px] font-bold text-[#353535] ">
                  به آسانی یک خانه اجاره کنید
                </h3>
              </div>
              <div className="w-[328px] flex mt-2 justify-center h-[214px]">
                <p className="text-[14px] font-medium text-[#5050550]">
                  در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود،
                  با استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که
                  در جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید.
                </p>
              </div>
            </div>
            <div className="w-[328px] mt-auto mb-4 flex justify-center items-center h-[40px] bg-[#CB1B1B] rounded-[8px]">
              <button className="text-[#FFFFFF] flex justify-center items-center text-[14px] font-medium">
                اجاره خانه
              </button>
            </div>
          </div>

          <div className="w-[392px] h-[511px] flex-col flex items-center bg-[#F9F9F9] rounded-[16px]">
            <div className="flex items-center justify-center">
              <img src={card2Image} />
            </div>
            <div className="flex-col flex justify-center items-center">
              <div className="w-[328px] h-[28px] mt-5 flex items-center justify-center">
                <h3 className="text-[20px] font-bold text-[#353535] ">
                  خانه مورد علاقه تان را بخرید
                </h3>
              </div>
              <div className="w-[328px] flex mt-2 justify-center h-[214px]">
                <p className="text-[14px] font-medium text-[#5050550]">
                  بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد. ما علاوه
                  بر آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر
                  شهر، تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد.
                </p>
              </div>
            </div>
            <div className="w-[328px] mt-auto mb-4 flex justify-center items-center h-[40px] bg-[#CB1B1B] rounded-[8px]">
              <button className="text-[#FFFFFF] flex justify-center items-center text-[14px] font-medium">
                خرید خانه
              </button>
            </div>
          </div>

          <div className="w-[392px] h-[511px] flex-col flex items-center bg-[#F9F9F9] rounded-[16px]">
            <div className="flex items-center justify-center">
              <img src={card1Image} />
            </div>
            <div className="flex-col flex justify-center items-center">
              <div className="w-[328px] h-[28px] mt-5 flex items-center justify-center">
                <h3 className="text-[20px] font-bold text-[#353535] ">
                  مالک هستید؟
                </h3>
              </div>
              <div className="w-[328px] flex mt-2 justify-center h-[214px]">
                <p className="text-[14px] font-medium text-[#5050550]">
                  آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه
                  بالای هزاران نفر است؟ پس به‌سادگی و با چند کلیک ساده، ملک‌تان
                  را به‌صورت رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن
                  معامله کنید.
                </p>
              </div>
            </div>
            <div className="w-[328px] mt-auto mb-4 flex justify-center items-center h-[40px] bg-[#CB1B1B] rounded-[8px]">
              <button className="text-[#FFFFFF] flex justify-center items-center text-[14px] font-medium">
                ثبت آگهی
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
