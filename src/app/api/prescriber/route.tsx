import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url =
    "https://npiregistry.cms.hhs.gov/api/?version=2.1&number=1134683816";
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);
  return NextResponse.json({});
}
