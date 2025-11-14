const Discover = ({title,subTitle,description,buttonTitle,imageAlignment}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="hidden lg:block">
    <div className=" grid grid-cols-2  place-items-center ">
      <div className={`${imageAlignment == "left" ? "order-1" : ""}`}>
        <div>
          <h1 className="text-left mb-4 text-5xl text-[#1f1f1f] w-[90%] font-medium">
           {title}
          </h1>
          <p className="text-md text-[#333333cc] w-[70%]">
           {subTitle}
          </p>
        </div>
        <div className="mt-[58px] ">
          <h3 className="text-2xl ">{description}</h3>
          <div className="flex  mt-4">
            <a
              href="/#"
              className="w-[184px] flex gap-2.5 items-center justify-center bg-[#CA1F34] text-white  rounded-full text-[16px] leading-[18px] py-4"
            >
              {buttonTitle}<img src="/images/play-store.png" alt="img" />{" "}
              <img src="/images/dwn-app-store.png" alt="img2" />
            </a>
          </div>
        </div>
      </div>
      <div className="animate-custom-bounce place-items-center">
        <img src="/images/abg_discover_download_img.png" alt="img3" />
      </div>
    </div>

</div>
<div className="lg:hidden">
  <div className=" flex  flex-col items-center gap-[30px] justify-center ">
 
        <div className="order-1">
          <h1 className="text-center mb-4 text-5xl text-[#1f1f1f] w-full font-medium ">
           {title}
          </h1>
          <p className="text-md text-[#333333cc] w-[91%]">
           {subTitle}
          </p>
        </div>
        <div className=" order-3 ">
          <h3 className="text-2xl ">{description}</h3>
          <div className="flex items-center justify-center">
            <a
              href="/#"
              className="w-[184px] flex gap-2.5 items-center justify-center bg-[#CA1F34] text-white  rounded-full text-[16px] leading-[18px] py-4"
            >
              {buttonTitle}<img src="/images/play-store.png" alt="img" />{" "}
              <img src="/images/dwn-app-store.png" alt="img2" />
            </a>
          </div>
        
      </div>
      <div className="animate-custom-bounce place-items-center order-2">
        <img src="/images/abg_discover_download_img.png" alt="img3" />
      </div>
    </div>

</div>

    </div>
  );
};

export default Discover;