import { NextRequest, NextResponse } from "next/server";
import {
  getStripe,
  resolvePriceId,
  PLAN_FALLBACKS,
  type PlanId,
} from "@/lib/stripe";

export const runtime = "nodejs";

function isPlanId(v: unknown): v is PlanId {
  return v === "builder" || v === "team";
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured. Set STRIPE_SECRET_KEY (and optionally STRIPE_PRICE_BUILDER / STRIPE_PRICE_TEAM).",
        },
        { status: 503 }
      );
    }

    const body = (await req.json()) as { plan?: unknown };
    if (!isPlanId(body.plan)) {
      return NextResponse.json(
        { error: "Invalid plan. Use builder or team." },
        { status: 400 }
      );
    }

    const plan = body.plan;
    const stripe = getStripe();
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const priceId = resolvePriceId(plan);
    const lineItems = priceId
      ? [{ price: priceId, quantity: 1 }]
      : [
          {
            price_data: {
              currency: "usd",
              unit_amount: PLAN_FALLBACKS[plan].unit_amount,
              recurring: { interval: "month" as const },
              product_data: {
                name: PLAN_FALLBACKS[plan].name,
                description: PLAN_FALLBACKS[plan].description,
              },
            },
            quantity: 1,
          },
        ];

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      allow_promotion_codes: true,
      metadata: {
        product: "watchwire",
        plan,
        stage: "founding-hypothesis",
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Checkout session failed";
    console.error("[checkout]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
