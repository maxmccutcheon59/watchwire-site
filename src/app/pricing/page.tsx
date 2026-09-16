import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Watchwire founding pricing hypotheses: Community $0 forever, Builder ~$12/mo, Team ~$39/seat/mo. Early OSS — honest labels.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="section-label mb-3">Pricing</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Founding pricing — labeled honestly
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
        Watchwire is pre-revenue early OSS. Paid tiers are packaging hypotheses
        from the commercialization pack — not live SKUs with customers. Prefer
        selling policy + packaging on{" "}
        <strong className="font-medium text-[var(--text)]">your runners</strong>{" "}
        over uploading a repo to a Watchwire cloud. No fake traction, ARR,
        waitlists, or enterprise SLA claims.
      </p>
      <div className="mt-12">
        <PricingCards showNote={false} />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-medium">What you get today</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Community is the full OSS CLI v0.4.0:{" "}
            <code className="font-mono text-xs text-[var(--accent)]">scan</code>,{" "}
            <code className="font-mono text-xs text-[var(--accent)]">proc</code>,{" "}
            <code className="font-mono text-xs text-[var(--accent)]">hygiene</code>,
            pre-commit, Action, SARIF/JSON,{" "}
            <code className="font-mono text-xs text-[var(--accent)]">watchwire.toml</code>,
            policy packs, entropy FP. Builder and Team remain founding
            hypotheses — sell only after real solo / team demand; some listed
            features are roadmap and labeled as such.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-medium">Checkout availability</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Stripe stays in{" "}
            <strong className="font-medium text-[var(--text)]">test mode</strong>{" "}
            until Max is ready for live charges. Live Checkout needs the{" "}
            <strong className="font-medium text-[var(--text)]">Vercel</strong>{" "}
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
