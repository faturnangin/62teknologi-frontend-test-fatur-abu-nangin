import { NextRequest, NextResponse } from "next/server";  

  export const GET =async (req:NextRequest) => {
    const token = process.env.API_TOKEN;
    return NextResponse.json({token})   
  }