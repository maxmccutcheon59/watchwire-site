import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Watchwire terms stub — pre-revenue founder tool.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="section-label mb-3">DRAFT · for lawyer review</p>
      <h1 className="text-3xl font-semibold tracking-tight">Terms of use</h1>
      <p className="mt-2 text-sm text-[var(--text-dim)]">
        Last updated: September 21, 2026 · Pre-revenue founder tool
      </p>
      <p
        role="note"
        className="mt-4 rounded-lg border border-[var(--warn)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--warn)]"
      >
        <strong className="font-semibold text-[var(--text)]">DRAFT — not legal advice.</strong>{" "}
        Lawyer review required before commercial use. This is a minimal stub,
        not a full SaaS Terms of Service.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--text-muted)]">
        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            The software
          </h2>
          <p>
            The Watchwire CLI is MIT-licensed open source. Use of the CLI is
            governed by that license and the project README — including the
            explicit “what Watchwire is NOT” section (not exploit tooling, not
            an EDR replacement, not a coverage claim vs gitleaks/TruffleHog).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            This site & paid tiers
          </h2>
          <p>
            Paid “Builder” and “Team” offerings are founding / early-OSS
            packaging hypotheses. Some features listed on pricing cards are
            roadmap. By checking out you acknowledge early-stage software: no
            SLA, no uptime guarantee, and no claim of enterprise readiness.
            Refunds for unused founding subscriptions can be requested via the
            founder while the company is pre-revenue and solo-operated — we will
            act in good faith.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Defensive use only
          </h2>
          <p>
            Watchwire is positioned for defensive security hygiene. Do not use
            it to attack systems you do not own or lack authorization to assess.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            No warranties
          </h2>
          <p>
            Software and site content are provided “as is” without warranty of
            any kind. Secret-detection heuristics produce false positives and
            false negatives. You are responsible for how you rely on findings.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Contact
          </h2>
          <p>
            Max McCutcheon · Watchwire ·{" "}
            <a
              className="text-[var(--accent)] hover:underline"
              href="mailto:MaxMcCutcheon1@outlook.com"
            >
              MaxMcCutcheon1@outlook.com
            </a>
            . Prefer GitHub for technical issues. These terms will be revised
            if the company incorporates or offers formal contracts.
          </p>
        </section>
      </div>
    </article>
  );
}
