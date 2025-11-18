
import React from "react";

type DiscoverProps = {
  title: string;
  subTitle: string;
  description: string;
  buttonTitle: string;
  imageAlignment?: "left" | "right"; 
};

const Discover: React.FC<DiscoverProps> = ({
  title,
  subTitle,
  description,
  buttonTitle,
  imageAlignment = "right",
}) => {
  return (
    <div className="flex justify-center items-center">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 place-items-center">
          <div className={`${imageAlignment === "left" ? "order-1" : ""}`}>
            <div>
              <h2 className="text-left mb-4 text-[35px] leading-10 xl:text-[44px] xl:leading-12 text-charcoal-200 xl:w-[90%] font-semibold">
                {title}
              </h2>
              <p className="text-sm xl:text-base leading-4 font-semibold text-[#333333cc] w-[63%]">{subTitle}</p>
            </div>

            <div className="mt-[58px]">
              <h3 className="text-2xl font-semibold">{description}</h3>

              <div className="flex mt-4">
                <a
                  href="/#"
                  className="w-[184px] font-medium flex gap-2.5 items-center justify-center bg-[#CA1F34] text-white rounded-full text-base py-4"
                >
                  {buttonTitle}
                  <img src="/images/play-store.png" alt="img" />
                  <img src="/images/dwn-app-store.png" alt="img2" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
        <div className="absolute z-10 bottom-10 border border-[#f0f0f0] shadow-[10px_10px_18px_#00000026] p-2 w-[110px] rounded-2xl place-items-center bg-white ">
          <img className="w-full" src="/images/abg_employee_offers_microsite.png" alt="img3" />
          <p className="text-[#333333cc] text-[10px] text-center font-semibold leading-2.5 px-1 mt-2.5">Scan to download the app</p>
          </div>
        <div className="animate-custom-bounce w-full place-items-baseline">
          <img className="w-[80%] xl:w-[95%]" loading="lazy" src="/images/abg_discover_download_img.png" alt="img3" />
        </div>


          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center gap-[30px] justify-center">
          <div className="order-1 text-center px-2.5">
            <h2 className="text-center mb-4 text-5xl text-charcoal-200 font-medium">
              {title}
            </h2>
            <p className="text-xs font-semibold text-[#333333cc]">{subTitle}</p>
          </div>

          <div className="order-3 mt-[58px] px-7">
            <h3 className="text-2xl font-semibold text-center">{description}</h3>
            <div className="flex mt-4 items-center justify-center">
              <a
               href="#"
              className="w-[184px] flex gap-2.5 items-center justify-center bg-[#CA1F34] text-white rounded-full text-xs leading-[18px] py-4"   >
                {buttonTitle}
                <img src="/images/play-store.png" loading="lazy" alt="img" />
                <img src="/images/dwn-app-store.png" loading="lazy" alt="img2" />
              </a>
            </div>
          </div>

          <div className="animate-custom-bounce place-items-center order-2">
            <img src="/images/abg_discover_download_img.png" loading="lazy" alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
