import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Watchwire founding pricing hypotheses: Community $0, Builder ~$12/mo, Team ~$39/seat/mo. Early OSS — honest labels.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="section-label mb-3">Pricing</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Founding pricing — labeled honestly
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
        Watchwire is pre-revenue early OSS. Paid tiers exist as packaging
        hypotheses so founding supporters can pay when features land — not as a
        claim that SaaS is shipped today. Enterprise = problem framing + roadmap
        only.
      </p>
      <div className="mt-12">
        <PricingCards showNote={false} />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-medium">What you get today</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            The Community CLI is real:{" "}
            <code className="font-mono text-xs text-[var(--accent)]">scan</code>,{" "}
            <code className="font-mono text-xs text-[var(--accent)]">proc</code>,{" "}
            <code className="font-mono text-xs text-[var(--accent)]">hygiene</code>.
            Builder and Team checkout charges founding amounts; some listed
            features are roadmap and labeled as such on the cards.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-medium">Checkout availability</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Live Stripe Checkout needs the <strong className="font-medium text-[var(--text)]">Vercel</strong>{" "}
            deploy with <code className="font-mono text-xs">STRIPE_SECRET_KEY</code>.
            On <strong className="font-medium text-[var(--text)]">GitHub Pages</strong>{" "}
            (static export), paid CTAs degrade to email — pricing is still shown
            as founding hypotheses. See DEPLOY.md.
          </p>
        </div>
      </div>
    </div>
  );
}
