"use client";

import { useState } from "react";
import { contactEmail } from "@/lib/site";

type PlanId = "builder" | "team";

const isStatic =
  process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export default function CheckoutButton({
  plan,
  label,
  className = "",
}: {
  plan: PlanId;
  label: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (isStatic) {
    const subject = encodeURIComponent(
      `Watchwire ${plan === "builder" ? "Builder" : "Team"} (founding)`
    );
    const body = encodeURIComponent(
      `Hi Max — interested in the founding ${plan} tier when Checkout is live on Vercel+Stripe.\n\n(This site is currently on GitHub Pages; paid Checkout needs the Vercel path — see DEPLOY.md.)`
    );
    return (
      <div className="w-full">
        <a
          href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
          className={`btn-ghost w-full text-center text-sm font-medium inline-block ${className}`}
        >
          Email about {plan === "builder" ? "Builder" : "Team"}
        </a>
        <p className="mt-2 text-center text-[10px] leading-relaxed text-[var(--text-dim)]">
          Stripe Checkout needs the Vercel deploy (API route). This Pages build
          shows pricing only — founding hypotheses, not a live storefront.
        </p>
      </div>
    );
  }

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${basePath}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout unavailable");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className={`btn-primary w-full text-center ${className}`}
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error && (
        <p className="mt-2 text-center text-xs text-[var(--danger)]">{error}</p>
      )}
    </div>
  );
}
