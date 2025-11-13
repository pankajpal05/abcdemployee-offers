const Discover = ({title,subTitle,description,buttonTitle,imageAlignment}) => {
  return (
    <div className="grid grid-cols-2 items-center justify-between">
      <div className={`${imageAlignment == "left" ? "order-1" : ""}`}>
        <div>
          <h1 className="text-left mb-4 text-4xl text-black font-medium">
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
      <div className="animate-custom-bounce">
        <img src="/images/abg_discover_download_img.png" alt="img3" />
      </div>
    </div>
  );
};

export default Discover;