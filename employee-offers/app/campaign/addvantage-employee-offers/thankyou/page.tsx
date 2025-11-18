"use client";
import FooterNote from "@/components/FooterNote/FooterNote";
import Header from "@/components/Header/Header";
import MaxwidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Thankyou = () => {

    const router = useRouter();
    useEffect(() => {
        const token = sessionStorage.getItem("thankyouToken");
        if (!token) {
            router.replace("/campaign/addvantage-employee-offers");
            return;
        }
    }, []);

    return (
        <div className="h-screen">
            <Header headerNote={false} />
            <MaxwidthContainer extraClasses="w-full px-4 md:!px-10 2xl:!px-0 md:!pb-8 md:!pt-[90px] ">
                <div className="h-screen">
                    <div className=" grid grid-cols-1 lg:rounded-4xl rounded-xl lg:grid-cols-2 xl:gap-[100px] min-h-[85vh] items-center bg-[#70b86533] md:px-12">
                        {/* LEFT SIDE */}
                        <div className="flex flex-col items-center justify-center p-[15px]">
                            <img
                                src="/images/successfull_tick.gif"
                                className="lg:max-w-[200px] max-w-[120px] w-full"
                                alt="Success"
                            />

                            <h3 className="sm:text-2xl text-lg font-semibold leading-7 text-center mb-4 text-[#1f1f1fcc]">
                                Thank you for sharing your responses. Our Regional
                                <br className="lg:hidden max-sm:hidden" /> Manager will
                                contact you soon.
                            </h3>

                            <div className=" xl:mt-[72px]">
                                <p className="text-[#111111cc] max-sm:text-sm text-lg mb-6 leading-[22px] text-center">
                                    From{" "}
                                    <i>
                                        smart investments to insurance, seamless payments to instant
                                        loans,
                                        <br className="lg:hidden max-sm:hidden" />
                                    </i>
                                    <i>and track-your-life tools</i> – All In One Convenient App.
                                </p>

                                {/* BUTTON GROUP */}
                                <div className="flex gap-4 max-sm:flex-col justify-center items-center">
                                    <a
                                        href="https://www.adityabirlacapital.com/?utm_source=abg_employee&utm_medium=organic&utm_campaign=microsite"
                                        target="_blank"
                                        className="bg-[#c91429] outline-0 uppercase text-white max-sm:px-14 lg:px-6 xl:px-10 px-12 md:px-6 py-3 rounded-full font-medium hover:bg-[#c91429] transition"
                                    >
                                        Explore Our Website
                                    </a>

                                    <a
                                        href="https://adityabirlacapitaldigital.onelink.me/vYLv/5lc79n1l"
                                        target="_blank"
                                        className="border-2 uppercase border-[#c91429] text-[#c91429] lg:px-6 xl:px-10 px-12 md:px-6 py-3 rounded-full font-medium hover:bg-red-50 transition flex items-center gap-2"
                                    >
                                        Download App
                                        <span className="store-span flex gap-2 items-center">
                                            <img
                                                src="/images/ty-play-store.svg"
                                                alt="Play Store"
                                                className="w-6"
                                            />
                                            <img
                                                src="/images/ty-app-store.svg"
                                                alt="App Store"
                                                className="w-6"
                                            />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex justify-center items-center">
                            <div className="relative w-full flex justify-center items-center">
                                <picture>
                                    <source
                                        media="(min-width:991px)"
                                        srcSet="/images/thankyouApp-img.png"
                                    />
                                    <img
                                        src="/images/thankyouApp-img-mob.svg"
                                        alt="Thank You"
                                        className="w-full max-w-[535px] h-auto object-contain"
                                    />
                                </picture>

                                {/* QR CODE BOX – only visible on md+ */}
                                {/* <div className="absolute bottom-0 z-50"> */}
                                <div className="hidden absolute max-w-50 w-full bottom-30 right-0 lg:flex justify-center items-center mt-6">
                                    <img
                                        src="/images/downloadApp-textimg.png"
                                        alt="Download App"
                                        className="max-w-40 w-full mb-4 absolute"
                                    />

                                    <div className="absolute">
                                        <img
                                            src="/images/abg_employee_offers_microsite.png"
                                            alt="QR Code"
                                            className="max-w-20 max-h-20 w-full object-contain"
                                        />
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </MaxwidthContainer>
            <FooterNote />
        </div>
    );
};

export default Thankyou;