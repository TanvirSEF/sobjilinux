import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params: { id } }) {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch User",
        error,
      },
      {
        status: 500, 
      }
    );
  }
}
