import { NextResponse } from "next/server";

// This route is a stub. Wire it to a real email service before launch:
//
// Option A — Mailchimp: use their Marketing API `POST /lists/{list_id}/members`
// Option B — ConvertKit: `POST https://api.convertkit.com/v3/forms/{form_id}/subscribe`
// Option C — Resend + your own DB: send a transactional email + store the
//   subscriber in a table (Postgres/Supabase) for later newsletters.
//
// Store your API key in an environment variable (e.g. CONVERTKIT_API_KEY)
// in Vercel project settings — never hardcode it here.

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: replace with a real call to your email service provider.
  // Example (ConvertKit):
  // await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
  // });

  console.log("New subscriber:", email);

  return NextResponse.json({ ok: true });
}
