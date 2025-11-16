"use client"
import{ useEffect, useState } from "react";

const Header = () => {
  const [showTop, setShowTop] = useState(true);
  const [logoScale, setLogoScale] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      
      if (currentScrollY > lastScrollY) {
        // Scrolling up
        setShowTop(false);
        setLogoScale(0.8);
      } else {
        // Scrolling down
        setShowTop(true);
        setLogoScale(1);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300"
    >
      <div className="flex items-center gap-5 justify-between">
       
        <div
          className="transition-transform duration-300 pl-5"
          style={{ transform: `scale(${logoScale})`, transformOrigin: "left center" }}
        >
          <img src="/images/campaign_new_logo.png" alt="Logo" className="max-h-12 w-auto" />
        </div>

        <div className="w-full">
       
          <div
            className={`flex justify-end gap-10 transition-all ease-in-out duration-500${
              showTop ? " opacity-100 min-h-[30px] items-center " : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <p className="max-md:hidden text-[#2A2E34] text-sm">
              Aditya Birla Capital Digital Limited
            </p>
            <a
              href="tel:08035092882"
              className="text-[#CA1F34] text-center text-sm flex items-center gap-2.5 pr-2.5 lg:pr-10"
            >
              <img src="/images/phone-call.png" alt="Phone Icon" />
              080 350 92882
            </a>
          </div>

      
          <div className="bg-[#CA1F34] px-10 h-16 rounded-bl-2xl flex items-center text-white">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
