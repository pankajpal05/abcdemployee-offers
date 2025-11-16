import { NextResponse } from "next/server";
import fetch from "node-fetch";

export  async function POST() {
  try {
    const tokenURL = process.env.NEXT_GENERATE_TOKEN_API;
    const externalRes = await fetch(`${tokenURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${process.env.ABCD_BASIC_TOKEN}`,
      },
    });
    const tokenData = await externalRes.json();
    if (!externalRes.ok) {
      return NextResponse.json(
        { message: "Failed to fetch token" },
        { status: externalRes.status },
      );
    }
    return NextResponse.json(
      {
        message: "Token generated successfully",
        token: tokenData,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: error || "Unknown error occurred" },
      { status: 500 },
    );
  }
}


