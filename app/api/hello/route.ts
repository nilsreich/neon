import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
   const {name} = await request.json()
   console.log(name)
   return NextResponse.json(name)
}
