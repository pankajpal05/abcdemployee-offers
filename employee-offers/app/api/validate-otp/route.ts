import { cookies } from "next/headers";
import { NextResponse } from "next/server";
 
export async function POST(request : Request) {
  try {
    const { otp, mobile } = await request.json();
 
    if (!otp) {
      return NextResponse.json(
        { error: "OTP is required" },
        { status: 400 },
      );
    }
    const otpUrl = process.env.NEXT_VERIFY_OTP_API;
    const cookieStore = await cookies();
     const access_token = cookieStore.get('access_token')
    const otpData = await fetch(`${otpUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":  `${access_token?.value}`,
      },
      body: JSON.stringify({
        Source: process?.env?.NEXT_VERIFY_OTP_SOURCE,
        Functionality: process?.env?.NEXT_VERIFY_OTP_FUNCTIONALITY,
        MobileNo: mobile,
        OTP: otp,
      }),
    });
    const otpResponse = await otpData.json();
    return NextResponse.json(
      {
        success: true,
        message: "Verify OTP successfully",
        data: otpResponse,
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
 
 