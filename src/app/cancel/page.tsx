import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout canceled",
};

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-24 text-center">
      <p className="section-label mb-3">Stripe</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Checkout canceled
      </h1>
      <p className="mt-4 text-[var(--text-muted)]">
        No charge was made. Community stays free on GitHub whenever you are
        ready — paid tiers are optional founding support.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/pricing" className="btn-primary">
          Back to pricing
        </Link>
        <Link href="/" className="btn-ghost">
          Home
        </Link>
      </div>
    </div>
  );
}
