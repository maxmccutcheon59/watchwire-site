import { cliRepo, contactEmail, productVersion } from "@/lib/site";

const included = [
  "watchwire scan · proc · hygiene",
  "Official pre-commit hook",
  "Composite GitHub Action + SARIF/JSON output",
  "watchwire.toml + student/indie/small-team policy packs",
  "watchwire init · .watchwireignore · scan --staged · suppressions",
  "Entropy false-positive pass · no telemetry · no upload",
  "Full MIT source on GitHub",
];

const teamIdeas = [
  "Shared policy packs across repos",
  "Org-wide baseline config",
  "Anything your CI setup is missing",
];

const teamMail = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Watchwire for my team",
)}&body=${encodeURIComponent(
  "Hi Max,\n\nWe use (or want to use) Watchwire. What our team needs:\n",
)}`;

export default function PricingCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="card glow-accent relative flex flex-col border-[var(--accent-dim)] p-6 ring-1 ring-[rgba(93,255,159,0.2)]">
        <h3 className="text-lg font-semibold text-[var(--text)]">Watchwire CLI</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
          Open source · {productVersion}
        </p>
        <div className="mb-3 mt-4 flex items-baseline gap-1">
          <span className="text-3xl font-semibold tracking-tight">$0</span>
          <span className="text-sm text-[var(--text-muted)]">forever · MIT</span>
        </div>
        <ul className="mb-6 flex-1 space-y-2.5 text-sm text-[var(--text-muted)]">
          {included.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-0.5 text-[var(--accent)]" aria-hidden>
                ▸
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={cliRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center text-sm font-medium"
        >
          Get the CLI
        </a>
      </div>

      <div className="card flex flex-col p-6">
        <h3 className="text-lg font-semibold text-[var(--text)]">For teams</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
          Not built · tell me what you need
        </p>
        <p className="mb-5 mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
          There are no paid plans. If your team would use features beyond the
          CLI, email me — real requests decide what gets built next.
        </p>
        <ul className="mb-6 flex-1 space-y-2.5 text-sm text-[var(--text-muted)]">
          {teamIdeas.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-0.5 text-[var(--text-dim)]" aria-hidden>
                ○
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href={teamMail} className="btn-ghost w-full text-center text-sm font-medium">
          Email Max
        </a>
      </div>
    </div>
  );
}
