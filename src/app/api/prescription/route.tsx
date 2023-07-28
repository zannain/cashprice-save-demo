import { API_ENDPOINTS } from "@/constants/endpoints";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let results = {};
  try {
    let data = await request.json();
    const response = await fetch(API_ENDPOINTS.SAVE_PRESCRIPTION, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    results = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return NextResponse.json({ results });
}
