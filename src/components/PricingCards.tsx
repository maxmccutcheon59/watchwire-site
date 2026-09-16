import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
  {
    id: "community" as const,
    name: "Community",
    price: "$0",
    period: "forever",
    badge: "OSS core",
    description:
      "The local CLI + CI hooks you can run today — MIT, v0.3.0.",
    features: [
      "watchwire scan · proc · hygiene",
      "Official pre-commit hook (shipped)",
      "Composite GitHub Action + SARIF/JSON (shipped)",
      "`watchwire.toml` policy + entropy FP pass (shipped)",
      "No telemetry · no upload",
      "Full source on GitHub",
    ],
    cta: { type: "link" as const, href: "https://github.com/maxmccutcheon59/watchwire", label: "Get the CLI" },
    highlight: false,
  },
  {
    id: "builder" as const,
    name: "Builder",
    price: "$12",
    period: "/mo",
    badge: "Founding · hypothesis",
    description:
      "For solo operators who want early paid features when they ship. Not sold as finished SaaS.",
    features: [
      "Everything in Community",
      "Priority pattern updates (when live)",
      "Private founder support channel",
      "Early access to Builder features",
      "Honest early-OSS pricing",
    ],
    cta: { type: "checkout" as const, plan: "builder" as const, label: "Start Builder (Stripe)" },
    highlight: true,
  },
  {
    id: "team" as const,
    name: "Team",
    price: "$39",
    period: "/seat/mo",
    badge: "Founding · hypothesis",
    description:
      "Shared policy packs and org baselines — roadmap until real team pull. Priced as a founding hypothesis.",
    features: [
      "Everything in Builder",
      "Shared policy packs (roadmap)",
      "Org baseline config (roadmap)",
      "CI on your runners first",
      "Local-first stays the default",
    ],
    cta: { type: "checkout" as const, plan: "team" as const, label: "Start Team (Stripe)" },
    highlight: false,
  },
];

export default function PricingCards({ showNote = true }: { showNote?: boolean }) {
  return (
    <div>
      {showNote && (
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
          Paid tiers are{" "}
          <strong className="font-medium text-[var(--text)]">
            founding / early-OSS hypotheses
          </strong>{" "}
          from the commercialization pack (~$12/mo Builder, ~$39/seat/mo Team).
          Community stays free. No fake customers — checkout exists so Max can
          take real founding payments when someone asks.
        </p>
      )}
      <div className="grid gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`card relative flex flex-col p-6 ${
              tier.highlight
                ? "border-[var(--accent-dim)] glow-accent ring-1 ring-[rgba(93,255,159,0.2)]"
                : ""
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {tier.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                  {tier.badge}
                </p>
              </div>
            </div>
            <div className="mb-3 flex items-baseline gap-1">
              <span className="text-3xl font-semibold tracking-tight">
                {tier.price}
              </span>
              <span className="text-sm text-[var(--text-muted)]">
                {tier.period}
              </span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-[var(--text-muted)]">
              {tier.description}
            </p>
            <ul className="mb-6 flex-1 space-y-2.5 text-sm text-[var(--text-muted)]">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-0.5 text-[var(--accent)]" aria-hidden>
                    ▸
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {tier.cta.type === "link" ? (
              <a
                href={tier.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full text-center text-sm font-medium"
              >
                {tier.cta.label}
              </a>
            ) : (
              <CheckoutButton plan={tier.cta.plan} label={tier.cta.label} />
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-[var(--text-dim)]">
        Prefer free forever? Stay on{" "}
        <Link href="https://github.com/maxmccutcheon59/watchwire" className="text-[var(--accent)] hover:underline">
          Community
        </Link>
        . Enterprise needs = problem framing + roadmap only — not a sold SKU yet.
      </p>
    </div>
  );
}
