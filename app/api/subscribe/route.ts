import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Nikhil Patil <onboarding@resend.dev>",
        to: email,
        subject: "Your free QA checklists",
        html: "<p>Thanks for signing up! Your checklists are attached — reply to this email if they don't show up.</p>",
      }),
    });

    console.log("New subscriber:", email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
