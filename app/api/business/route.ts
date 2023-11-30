import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get("location")
  const searchBy = request.nextUrl.searchParams.get("searchBy")
  const keyword = request.nextUrl.searchParams.get("keyword")
  try {
    const res = await fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&${searchBy}=${keyword}`,{
      headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
          'Client-ID': 'DSj6I8qbyHf-Zm2fGExuug',
        },
      }
    );
    const result = await res.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};