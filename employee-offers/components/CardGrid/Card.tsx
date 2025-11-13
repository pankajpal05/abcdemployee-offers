import React from "react";
interface cardProps {
  title: string;
  subTitle: string;
  bgImage: string;
  width?: string | number;
}
const Card = ({ title, subTitle, bgImage, width }: cardProps) => {
  return (
    <div className="relative w-full h-full">
      <img src={bgImage} className=" rounded-3xl w-full h-full object-fill" />
      <div className="absolute top-0 left-0 w-full h-full p-[30px]">
        <h4 className="text-[26px] leading-[30px] text-[#1f1f1f] mb-4">
          {title}
        </h4>
        <p className={`text-[#333333cc] text-4`} style={{ width: width }}>
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
