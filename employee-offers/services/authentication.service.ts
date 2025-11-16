// import { httpService } from "@/lib/httpservice"

export const generateUserToken = async () => {
  try {
    const url = process.env.NEXT_GENERATE_TOKEN_API;
    const basic_token = process.env.NEXT_GENERATE_TOKEN_AUTH_TOKEN;
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic_token}`,
      },
    });
    if (!response.ok) {
        console.log(response,"error fetching token");
        return;
    }
    const data = await response.json();
    return data?.access_token
 
  } catch (error) {
    console.log(error,"error fetching token");
    return;
  }
};


// export const generateOTPService = async (
//   email,
//   numValue,
//   userToken,
//   employeeType,
//   bearerToken,
// ) => {
//   const payload =
//     employeeType === "ABG Employee"
//       ? { emailID: email }
//       : { mobileNo: numValue };

//   const otpBody = payload?.mobileNo
//     ? {
//         Source: process.env.NEXT_PUBLIC_ABCD_OTP_SOURCE,
//         Functionality: process.env.NEXT_PUBLIC_ABCD_OTP_MOBILE_FUNCTIONALITY,
//         MobileNo: payload?.mobileNo,
//       }
//     : {
//         Source: process.env.NEXT_PUBLIC_ABCD_OTP_SOURCE,
//         Functionality: process.env.NEXT_PUBLIC_ABCD_OTP_EMAIL_FUNCTIONALITY,
//         EmailId: payload?.emailID,
//       };

//   const payloadIV = encryptData(otpBody);
//   const payloadCV = encryptData(userToken);

//   const combinedPayload = {
//     payloadIV,
//     payloadCV,
//   };

//   return httpService.post("/api/client/generate-otp", combinedPayload, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${bearerToken}`,
//     },
//   });
// };

// export const validateOTPService = async (
//   email,
//   numValue,
//   allValues,
//   userToken,
//   bearerToken,
// ) => {
//   const payload = email
//     ? { email, OTP: Number(allValues.join("")) }
//     : { mobileNo: numValue, OTP: Number(allValues.join("")) };

//   const otpBody = payload?.mobileNo
//     ? {
//         Source: process.env.NEXT_PUBLIC_ABCD_OTP_SOURCE,
//         Functionality: process.env.NEXT_PUBLIC_ABCD_OTP_MOBILE_FUNCTIONALITY,
//         MobileNo: payload?.mobileNo,
//         OTP: payload?.OTP,
//       }
//     : {
//         Source: process.env.NEXT_PUBLIC_ABCD_OTP_SOURCE,
//         Functionality: process.env.NEXT_PUBLIC_ABCD_OTP_EMAIL_FUNCTIONALITY,
//         EmailId: payload?.email,
//         OTP: payload?.OTP,
//       };

//   const payloadCV = encryptData(userToken);
//   const payloadSource = encryptData(otpBody);

//   const combinedEncryptedPayload = {
//     payloadCV,
//     payloadSource,
//   };

//   return httpService.post(
//     "/api/client/validate-otp",
//     combinedEncryptedPayload,
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${bearerToken}`,
//       },
//     },
//   );
// };