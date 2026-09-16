"use client";

import { useState } from "react";

type PlanId = "builder" | "team";

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

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
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
