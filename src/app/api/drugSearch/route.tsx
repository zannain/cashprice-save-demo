import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let data = [];
  const searchTerm = request.nextUrl.searchParams.get("drug");
  const searchEndpoint = `https://enavvi-api.azurewebsites.net/CashPrice/Search?planGuid=CostPlusDrug&searchTerm=${searchTerm}`;
  try {
    const response = await fetch(searchEndpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const results = await response.json();
    data = results?.classResults?.results[0].data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return NextResponse.json({ data });
}
