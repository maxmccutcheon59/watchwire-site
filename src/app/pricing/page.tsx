import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Watchwire is free and open source (MIT). There are no paid plans; teams that need more can tell the founder what to build.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="section-label mb-3">Pricing</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Free and open source
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
        The whole Watchwire CLI is MIT-licensed and free — no account, no
        telemetry, nothing to buy.
      </p>
      <div className="mt-12">
        <PricingCards />
      </div>
    </div>
  );
}
