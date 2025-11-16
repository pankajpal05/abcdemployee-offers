//generate-otp
import {generateUserToken} from "@/services/authentication.service";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request : Request) {
  try {
    const { phoneNo } = await request.json();
 
    if (!phoneNo) {
      return NextResponse.json(
        { error: "Phone Number is required" },
        { status: 400 },
      );
    }
    const accessToken  = await generateUserToken();
    if (!accessToken) {
      return NextResponse.json(
        { error: "Access token not found in token response" },
        { status: 500 },
      );
    }
    const cookieStore = await cookies()
    cookieStore.set("access_token", accessToken, {
      httpOnly: true,          
      secure: true,            
      sameSite: "strict",      
      path: "/",               
      maxAge: 60 * 60 * 24,    
    });

    const otpUrl = process.env.NEXT_GET_OTP_API;
    const otpData = await fetch(`${otpUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": accessToken || "",
      },
      body: JSON.stringify({
        Source: process?.env?.NEXT_GET_OTP_SOURCE,
        Functionality: process?.env?.NEXT_GET_OTP_FUNCTIONALITY,
        MobileNo: phoneNo,
      }),
    });
 
    if (!otpData?.ok) {
      const message =
        otpData?.status === 400
          ? "Please wait 60 seconds before requesting a new OTP."
          : "Failed to generate OTP";
 
      return NextResponse.json(
        {
          error: message,
          details: otpData.statusText,
        },
        { status: otpData.status },
      );
    }
    const otpResponse = await otpData.json();
    return NextResponse.json(
      {
        success: true,
        message: "OTP generated successfully",
        data: otpResponse,
        token: accessToken,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in generate otp", error);
 
    return NextResponse.json(
      { error: error || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
 
 