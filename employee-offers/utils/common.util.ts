
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


export { validateForm };