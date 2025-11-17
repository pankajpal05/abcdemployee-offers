
import {PRODUCT_CONFIG} from '@/constant/constant';

type FormDataType = {
  productType: string;
  fullName: string;
  emailId: string;
  companyName: string;
  pincode: string;
  mobileNumber: string;
  agreeTerms: boolean;
  getUpdates: boolean;
  nameInput?: string;
};

 const validateForm = (data: FormDataType): string => {

  const emailRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
   if (!data.productType) return "Please select the Product."
  if (!data.fullName) return "Please Enter your Name.";
  if (!data.emailId) return "Please Enter Email ID.";
  if (!data.companyName) return "Please select the Company name.";
  if (!data.pincode) return "Please Enter Pincode.";
  if (!data.mobileNumber) return "Please Enter Mobile Number.";
  if (!emailRegex.test(data.emailId))
    return "Please enter a valid email id with the format user@domain.com";
  if (!/^[A-Za-z ]+$/.test(data.fullName))
    return "Name should have only alphabets.";
  if (!/^\d{6}$/.test(data.pincode))
    return "Sorry, Pincode is not serviceable.";

  
  if (!/^\d{10}$/.test(data.mobileNumber))
    return "Must have 10 digits.";
  if (!data.agreeTerms) return "You must agree to the terms and conditions to proceed.";

  return ""; // No errors
};


 const createPayload = (formData: any) => {
  // @ts-ignore
  const config = PRODUCT_CONFIG[formData.productType] || {};

  const userAgent = navigator.userAgent;
  let browserName = "Unknown";

  if (/chrome|crios|crmo/i.test(userAgent) && !/edge|edg|opr|opera/i.test(userAgent)) {
    browserName = "Chrome";
  } else if (/firefox|fxios/i.test(userAgent)) {
    browserName = "Firefox";
  } else if (/safari/i.test(userAgent) && !/chrome|crios|crmo/i.test(userAgent)) {
    browserName = "Safari";
  } else if (/edg/i.test(userAgent)) {
    browserName = "Edge";
  } else if (/opr|opera/i.test(userAgent)) {
    browserName = "Opera";
  }

  const cookies = Object.fromEntries(
    document.cookie.split("; ").map((c) => {
      const [key, value] = c.split("=");
      return [key, decodeURIComponent(value)];
    })
  );

  let GAClient_Idc = "";
  if (cookies._ga && cookies._ga.length > 6) {
    GAClient_Idc = cookies._ga.slice(6);
  }

  return {
    ...formData,
    ...config,
    browserName, 
    GAClient_Idc,
  };
};

export { validateForm, createPayload };