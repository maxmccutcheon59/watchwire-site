import Stripe from "stripe";

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key);
}

export type PlanId = "builder" | "team";

export function resolvePriceId(plan: PlanId): string | null {
  if (plan === "builder") {
    return process.env.STRIPE_PRICE_BUILDER ?? null;
  }
  if (plan === "team") {
    return process.env.STRIPE_PRICE_TEAM ?? null;
  }
  return null;
}

/** Fallback amounts (cents) when Price IDs are not configured — Stripe test mode. */
export const PLAN_FALLBACKS: Record<
  PlanId,
  { name: string; unit_amount: number; description: string }
> = {
  builder: {
    name: "Watchwire Builder (founding)",
    unit_amount: 1200,
    description: "Solo founding pricing — hypothesis tier, early access.",
  },
  team: {
    name: "Watchwire Team (founding)",
    unit_amount: 3900,
    description: "Per-seat founding pricing — hypothesis tier, early access.",
  },
};
