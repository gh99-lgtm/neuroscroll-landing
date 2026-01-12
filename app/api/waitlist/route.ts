import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    const normalizedEmail = (email || "").toString().trim().toLowerCase();
    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_WAITLIST_URL;
    if (!scriptUrl) {
      return NextResponse.json(
        { ok: false, error: "Missing GOOGLE_WAITLIST_URL in .env.local" },
        { status: 500 }
      );
    }

    const googleRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: normalizedEmail,
        source: (source || "website").toString(),
      }),
      cache: "no-store",
    });

    const text = await googleRes.text();

    // Try parse JSON; fallback to raw text
    let googlePayload: any = null;
    try {
      googlePayload = JSON.parse(text);
    } catch {
      googlePayload = { raw: text };
    }

    // If Google returned non-2xx, pass it through as an error
    if (!googleRes.ok) {
      return NextResponse.json(
        { ok: false, error: "Google Script request failed", google: googlePayload },
        { status: 502 }
      );
    }

    // If Google responded with ok:false, treat as error
    if (googlePayload && googlePayload.ok === false) {
      return NextResponse.json(
        { ok: false, error: googlePayload.error || "Google Script rejected request", google: googlePayload },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, google: googlePayload });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || err?.toString?.() || "Unknown error" },
      { status: 500 }
    );
  }
}
