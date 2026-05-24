import { NextRequest, NextResponse } from "next/server";
import { query } from "@src/lib/db";
import { T } from "@src/lib/tables";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: "fullName, email, and message are required" },
        { status: 400 },
      );
    }

    // Insert contact message into database
    const result = await query(
      `INSERT INTO ${T.contactMessages} (fullName, email, phone, subject, message, created_at)
			 VALUES ($1, $2, $3, $4, $5, NOW())
			 RETURNING id`,
      [fullName, email, phone || null, subject || null, message],
    );

    return NextResponse.json(
      {
        message: "Contact message sent successfully",
        id: result[0].id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { message: "Failed to send contact message" },
      { status: 500 },
    );
  }
}
