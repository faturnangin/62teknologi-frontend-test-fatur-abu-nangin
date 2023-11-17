import { NextRequest, NextResponse } from "next/server";
const data = require('../../../data/nyc.json')

export const GET =async (req:NextRequest) => {
    return NextResponse.json({data})   
}