"use client";
import { createLeadService, validateOTPService } from "@/services/authentication.service";
import { createPayload } from "@/utils/common.util";
import { encryptData } from "@/utils/encryption";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
const OTP_LENGTH = 6;

const OtpVerification = ({ formData }: { formData: any }) => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [otpMessage, setOtpMessage] = useState<string>(" OTP Sent Successfully.");
    const [isOtpVerified, setIsOtpVerified] = useState<boolean>(false);
    const isOtpComplete = otp.every((digit) => digit !== "");
    const router = useRouter();
    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return;
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        if (value && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH);

        if (!/^\d+$/.test(pasted)) return;

        const values = pasted.split("");
        const updatedOtp = [...otp];

        values.forEach((digit, i) => {
            updatedOtp[i] = digit;
            if (inputRefs.current[i]) {
                inputRefs.current[i]!.value = digit;
            }
        });

        setOtp(updatedOtp);
        inputRefs.current[values.length - 1]?.focus();
    };

    const handleSubmit = async () => {
        const fullOtp = otp.join("");
      const response =  await validateOTPService(fullOtp, formData.mobileNumber)
    if (response.data?.Error) {
     setOtpMessage("Invalid OTP. Please input correct OTP.");
     } else if (response.data?.message === "Valid OTP") {
     const payload = createPayload(formData);
      setIsOtpVerified(true);
      const encryptPayload = encryptData(payload);
      await createLeadService(encryptPayload);
   sessionStorage.setItem("thankyouToken", Date.now().toString());
      router.push("/campaign/addvantage-employee-offers/thankyou");
    }
    };

    return (
            <div
                className="w-[431px] p-[35px] rounded-[18px] text-center"
                style={{
                    background:
                        "radial-gradient(92.49% 103.55% at 89.79% 89.84%, rgba(79, 79, 79, 0.9) 0%, rgba(17, 17, 17, 0.9) 100%)",
                }}
            >
                {isOtpVerified ? (
                <div className="text-white text-lg font-medium">
                   <h2 className="text-2xl font-bold my-5">OTP Verified Successfully!</h2> 
                   <div className=""> 
                    <img src="/images/successfull_tick.gif" alt="Success" className="mx-auto mb-4 w-15 h-15" />
                   <p>OTP Succesfully Verified!</p>
                   </div>
                </div>
            ) : (
                
                <div className="wrapper"> 
                <div className="mb-[18px]">
                    <h2 className="text-[28px] font-medium mb-2 text-white mt-[120px]">
                        OTP Verification
                    </h2>
                    <div className="flex justify-between  mb-4" onPaste={handlePaste}>
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                ref={(el: any) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-[53px] text-xs h-[53px]  bg-[#ffffff1a] rounded-lg  text-[#f2f2f2] font-normal
                         text-center focus:outline-none focus:border-white transition"
                            />
                        ))}
                    </div>
                </div>
                {/* Status message */}
                <p className="text-[#ff919d] text-sm text-start mb-4 font-medium">
                    {otpMessage}
                </p>
                <button
                    onClick={handleSubmit}
                    disabled={!isOtpComplete}
                    className={`w-full py-3 rounded-full  text-[#ca1f34] font-bold tracking-wider
                     text-lg  ${isOtpComplete
                            ? "bg-white  cursor-pointer"
                            : "bg-[#c6c5c9] cursor-not-allowed"
                        }`}

                >
                    VERIFY OTP
                </button>
          </div>
            )}

            </div>
      
    );
};

export default OtpVerification;
