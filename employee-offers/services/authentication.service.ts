 import { httpService } from "@/lib/httpservice"

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
        return;
    }
    const data = await response.json();
    return data?.access_token
 
  } catch (error) {
    console.error(error,"error fetching token");
    return;
  }
};

export const generateOTPService = async (phoneNo: string) => {
 
  try {
    const response = await httpService.post('/api/generate-otp', {
      phoneNo :phoneNo,
    });   
  const data = response.data;
  return data;
  } catch (error) {
    console.error("Error in generateOTPService:", error);
    throw "Error generating OTP";
  }
}

export const validateOTPService = async ( otp: string, mobile: string,) => {
  try {
    const response = await httpService.post('/api/validate-otp', {
      mobile,
      otp
        })
    const data = response.data;
    return data;
  }catch (error) {
    console.error("Error in validateOTPService:", error);
    throw "Error validating OTP";
  } 
}

export const createLeadService = async (leadData: any) => {
  try {
    const response = await httpService.post('/api/create-lead', leadData);  
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error in createLeadService:", error);
    throw "Error creating lead";
  }
}