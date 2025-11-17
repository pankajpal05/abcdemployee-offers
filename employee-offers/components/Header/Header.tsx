"use client"
import { useEffect, useState } from "react";

const Header = ({ headerNote = true }) => {
  const [showTop, setShowTop] = useState(true);
  const [logoScale, setLogoScale] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!headerNote) {
      // 💡 If headerNote is false → no animation
      setShowTop(true);
      setLogoScale(1);
      return;
    }
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
          className="transition-all duration-300 lg:pl-16 pl-[22px]"
          style={{ transform: `scale(${logoScale})`, transformOrigin: "left center", paddingTop: showTop ? `${headerNote ? '20px' : "10px"}` : '0px' ,paddingBottom: showTop ? `${headerNote ? '0px' : "10px"}` : '0px' }}
        >
          <img src="/images/campaign_new_logo.png" alt="Logo" className="max-h-12 w-auto" />
        </div>

        <div className="w-full">
          {
            headerNote &&
            <div
              className={`flex justify-end items-center gap-10 transition-all ease-in-out duration-500 h-[30px]  ${showTop ? "opacity-100 max-h-[40px]" : "opacity-0 max-h-0"}`}
            >
              <p className="max-md:hidden text-[#2A2E34] text-sm">
                Aditya Birla Capital Digital Limited
              </p>
              <a
                href="tel:08035092882"
                className="text-[#CA1F34] text-center text-sm font-bold max-md:text-xs  flex items-center gap-1 pr-2.5 lg:pr-10"
              >
                <img src="/images/phone-call.png" alt="Phone Icon" />
                080 350 92882
              </a>
            </div>

          }


          <div className={`bg-[#CA1F34] px-10 h-16 rounded-bl-2xl items-center text-white flex ${headerNote?"justify-end":"justify-start"}`}>
            <p className={`${headerNote?"md:hidden text-sm":"text-lg font-semibold"}`}>Aditya Birla Capital Digital Limited</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
