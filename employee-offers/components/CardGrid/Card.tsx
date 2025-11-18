import React, { ReactNode } from "react";
interface cardProps {
  title: string;
  subTitle: ReactNode;
  bgDesktopImage: string;
  bgMobileImage: string;
  width?: string | number;
}
const Card = ({ title, subTitle, bgDesktopImage, bgMobileImage, width }: cardProps) => {
  return (
    <div className="relative w-full h-full">
        {/* Mobile Image */}
      <img
        src={bgMobileImage}
        className="rounded-xl w-full h-full object-fill md:hidden"
        loading="lazy"
      />

      {/* Desktop Image */}
      <img
        src={bgDesktopImage}
         loading="lazy"
        className="rounded-3xl w-full h-full object-fill hidden md:block"
      />
      <div className="absolute top-0 left-0 w-full h-full p-5 xl:p-[30px]">
       <div className="w-[85%] h-full">
        <div className="h-full ">
          <h4 className="text-base lg:text-base xl:text-[26px] font-semibold leading-4.5 xl:leading-7 text-[#1f1f1f] mb-2.5 xl:mb-4">
            {title}
          </h4>
            <p className={`text-[#333333cc] text-xs md:text-sm leading-4.5 xl:leading-5.5 xl:text-base ${width}`} >
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
