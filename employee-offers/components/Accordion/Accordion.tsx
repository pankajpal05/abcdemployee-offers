"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
interface DisclaimerAccordianProps {
  AccordianTitle: string;
  children: any;
}

const DisclaimerAccordian = ({
  AccordianTitle,
  children,
}: DisclaimerAccordianProps) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  const accordianHandler = () => {
    setAccordianOpen((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={accordianHandler}
        className={`${
          accordianOpen ? "bg-[#FFF4d9]" : "bg-[#fffbf0]"
        } flex justify-between w-full color-[#353941] text-sm px-4 py-2.5 lg:px-20 lg:py-3.5 `}
      >
        <span>{AccordianTitle}</span>
        <span className="relative inline-block w-4 h-4">
          <span
            className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ease-in-out ${
              accordianOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <Plus />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ease-in-out ${
              accordianOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          >
            <Minus />
          </span>
        </span>
      </button>
      {accordianOpen && (
        <div
          className={`transition-all duration-100 p-4 lg:px-20 ease-in-out${
            accordianOpen
              ? "max-h-[300px] opacity-100 py-4 "
              : "max-h-0 opacity-0 py-0 "
          } bg-[#FFF4d9]`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default DisclaimerAccordian;
