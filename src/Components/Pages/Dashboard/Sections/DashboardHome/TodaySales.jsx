import React from "react";
import icon from "../../../../../assets/Icon.svg";
import icon1 from "../../../../../assets/Icon1.svg";
import icon2 from "../../../../../assets/Icon2.svg";
import icon3 from "../../../../../assets/Icon3.svg";
// import chart from '../../../../../assets/Frame10.svg'
import visitor from "../../../../../assets/visitor.png";
// import purple from '../../../../../assets/purple.svg'
// import red from '../../../../../assets/red.svg'
// import green from '../../../../../assets/green.svg'
const TodaySales = () => {

  return (
    <div className="flex flex-col xl:grid xl:grid-cols-[60%_1fr]   gap-[31px] pl-5 ">
      <div className=" bg-white p-8 drop-shadow-2xl rounded-[20px]">
        <div className="  flex justify-between">
          
          <div>
            <p className="text-xl font-semibold text-[#05004E]">
              Today's Sales
            </p>
            <span className="text-base text-[#737791]">Sales Summery</span>
          </div>
          <div className="flex items-center gap-2 border-2 rounded-lg border-[#C3D3E] px-4 py-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1007 5.11257L8.43899 2.83138C8.31472 2.72244 8.15784 2.66671 8.00013 2.66663C7.89223 2.66657 7.78393 2.69257 7.68544 2.74541C7.64154 2.76889 7.59984 2.79757 7.56128 2.83138L4.89959 5.11257C4.62003 5.35217 4.58763 5.77303 4.82723 6.0526C5.06683 6.33216 5.4877 6.36456 5.76726 6.12496L7.33342 4.78268V9.94578C7.33342 10.314 7.6319 10.6124 8.00009 10.6124C8.36828 10.6124 8.66676 10.314 8.66676 9.94578L8.66676 4.78261L10.233 6.12496C10.5126 6.36456 10.9334 6.33216 11.173 6.0526C11.4126 5.77303 11.3802 5.35217 11.1007 5.11257ZM4.00008 9.33329C4.00008 8.9651 4.29856 8.66663 4.66675 8.66663H5.66675C6.03494 8.66663 6.33341 8.36815 6.33341 7.99996C6.33341 7.63177 6.03494 7.33329 5.66675 7.33329H4.66675C3.56218 7.33329 2.66675 8.22872 2.66675 9.33329V11.3333C2.66675 12.4379 3.56218 13.3333 4.66675 13.3333H11.3334C12.438 13.3333 13.3334 12.4379 13.3334 11.3333V9.33329C13.3334 8.22872 12.438 7.33329 11.3334 7.33329H10.3334C9.96522 7.33329 9.66675 7.63177 9.66675 7.99996C9.66675 8.36815 9.96522 8.66663 10.3334 8.66663H11.3334C11.7016 8.66663 12.0001 8.9651 12.0001 9.33329V11.3333C12.0001 11.7015 11.7016 12 11.3334 12H4.66675C4.29856 12 4.00008 11.7015 4.00008 11.3333V9.33329Z"
                fill="#0F3659"
              />
            </svg>
            <a href="" className="text-base font-medium">
              Export
            </a>
          </div>
        </div>
        <div className="2xl:flex gap-[31px] mt-11 xl:flex lg:flex md:flex grid sm:grid-cols-2">
          <div className="w-full">
            <div className="bg-[#FFE2E5] p-[20px] space-y-3 rounded-2xl">
              <img src={icon} alt="" />
              <h1 className="text-2xl font-semibold">$1k</h1>
              <p className="text-[16px] font-medium text-[#425166]">
                Total Sales
              </p>
              <span className="text-xs text-[#4079ED]">+8% from yesterday</span>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#FFE2E5] p-[20px] space-y-3 rounded-2xl">
              <img src={icon1} alt="" />
              <h1 className="text-2xl font-semibold">$1k</h1>
              <p className="text-[16px] font-medium text-[#425166]">
                Total Sales
              </p>
              <span className="text-xs text-[#4079ED]">+8% from yesterday</span>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#FFF4DE] p-[20px] space-y-3 rounded-2xl">
              <img src={icon2} alt="" />
              <h1 className="text-2xl font-semibold">$1k</h1>
              <p className="text-[16px] font-medium text-[#425166]">
                Total Sales
              </p>
              <span className="text-xs text-[#4079ED]">+8% from yesterday</span>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#DCFCE7] p-[20px] space-y-3 rounded-2xl">
              <img src={icon3} alt="" />
              <h1 className="text-2xl font-semibold">$1k</h1>
              <p className="text-[16px] font-medium text-[#425166]">
                Total Sales
              </p>
              <span className="text-xs text-[#4079ED]">+8% from yesterday</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full " >
          <img src={visitor} className="h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default TodaySales;
