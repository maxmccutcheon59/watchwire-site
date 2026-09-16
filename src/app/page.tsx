import Link from "next/link";
import PricingCards from "@/components/PricingCards";

const commands = [
  {
    cmd: "watchwire scan PATH [--json|--sarif]",
    title: "scan",
    body: "Secret leak scan with regex + Shannon entropy. Redacted findings. Exit 1 on hits. JSON + SARIF 2.1.0.",
  },
  {
    cmd: "watchwire proc [pid]",
    title: "proc",
    body: "Linux /proc process summary: cmdline, FDs, memory, state. Read-only. Injectable /proc root for tests.",
  },
  {
    cmd: "watchwire hygiene PATH",
    title: "hygiene",
    body: "Flags world-writable, setuid, and setgid entries under a tree — host permission hygiene, not EDR.",
  },
];

const steps = [
  {
    n: "01",
    title: "Install the CLI",
    body: "Python 3.10+, stdlib runtime. Clone the repo, pip install -e, run against fixtures in under two minutes.",
  },
  {
    n: "02",
    title: "Run local checks",
    body: "scan before push. proc when you need a fast read-only process picture. hygiene for risky perms under a tree.",
  },
  {
    n: "03",
    title: "Wire into habit",
    body: "Official pre-commit hook + composite GitHub Action ship in v0.2.0 — gates that run in your runners, not a vendor upload of your tree to us.",
  },
];

const faqs = [
  {
    q: "Is Watchwire a SaaS secret scanner?",
    a: "No. Today it is a local-first OSS CLI. Paid Builder/Team tiers are founding hypotheses for policy + packaging later — local stays the default.",
  },
  {
    q: "Do you beat gitleaks or TruffleHog on coverage?",
    a: "We do not claim that. Those tools are mature at CI/enterprise scale. Watchwire’s wedge is local + auditable + proc/hygiene in one small defensive CLI.",
  },
  {
    q: "Does anything leave my machine?",
    a: "The CLI has no network clients or telemetry by design. Findings are redacted in output. Stripe Checkout on this site only handles payment if you choose a paid tier.",
  },
  {
    q: "Who is this for right now?",
    a: "CS students, early-career engineers, and indie/solo Linux operators who want a demoable local check. Enterprise SecOps fleets and EDR replacements are out of scope for v0.",
  },
  {
    q: "Are the paid prices final?",
    a: "No. ~$12/mo Builder and ~$39/seat/mo Team are packaging hypotheses from the commercialization brief — labeled founding / early OSS. Community remains $0.",
  },
  {
    q: "Is this exploit / offensive tooling?",
    a: "No. Defensive only. No remote targeting, no exploit development, no “red team in a box.”",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="wire-grid relative overflow-hidden border-b border-[var(--border)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(93,255,159,0.08),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="section-label mb-4">Local-first · Defensive · Early OSS</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl sm:leading-[1.1]">
            The local wire for secrets
            <span className="text-glow text-[var(--accent)]"> and host hygiene</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Watchwire is a defensive CLI that finds leaked secrets (regex +
            entropy), summarizes Linux processes via{" "}
            <code className="font-mono text-sm text-[var(--accent)]">/proc</code>
            , and flags risky permissions —{" "}
            <em className="not-italic text-[var(--text)]">
              without sending filesystem contents off-box
            </em>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/maxmccutcheon59/watchwire"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
            <Link href="/pricing" className="btn-ghost">
              Founding pricing
            </Link>
          </div>
          <p className="mt-5 text-xs text-[var(--text-dim)]">
            Founder: Max McCutcheon · JMU CS · Pre-revenue · No fake customers,
            waitlists, or ARR claims
          </p>

          <div className="terminal mt-12 max-w-2xl glow-accent">
            <div className="terminal-bar">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="ml-3 font-mono text-xs text-[var(--text-dim)]">
                demo · under 2 minutes
              </span>
            </div>
            <pre className="p-4 text-[var(--text-muted)]">
              <code>
                <span className="text-[var(--text-dim)]">$</span>{" "}
                <span className="text-[var(--text)]">pip install -e &quot;.[dev]&quot;</span>
                {"\n"}
                <span className="text-[var(--text-dim)]">$</span>{" "}
                <span className="text-[var(--accent)]">watchwire scan</span>{" "}
                tests/fixtures
                {"\n"}
                <span className="text-[var(--text-dim)]">$</span>{" "}
                <span className="text-[var(--accent)]">watchwire proc</span>
                {"\n"}
                <span className="text-[var(--text-dim)]">$</span>{" "}
                <span className="text-[var(--accent)]">watchwire hygiene</span> .
                {"\n"}
                <span className="text-[var(--text-dim)]">#</span>{" "}
                <span className="text-[var(--text-dim)]">also: pre-commit hook · GitHub Action · --sarif</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Problem</p>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Secrets still land on disk. Many teams will not upload the tree.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Local residue",
                d: "Env dumps, scratch files, and AI-agent artifacts leave secrets on disk before any CI gate runs.",
              },
              {
                t: "Upload refusal",
                d: "Privacy-sensitive workflows will not ship source to a cloud scanner — and still need a trustworthy check.",
              },
              {
                t: "More than patterns",
                d: "Operators also need fast, read-only answers: what is this process doing, and are there risky perms under this tree?",
              },
            ].map((item) => (
              <div key={item.t} className="card p-5">
                <h3 className="font-medium text-[var(--text)]">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands */}
      <section id="commands" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Three commands</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Shipped v0.2.0 — scan · proc · hygiene · Action · pre-commit
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
            No network scan, no remote targets, no autofill, no agent. Heuristics
            have false positives and negatives.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {commands.map((c) => (
              <div key={c.title} className="card p-5">
                <p className="font-mono text-xs text-[var(--accent)]">{c.title}</p>
                <pre className="mt-3 overflow-x-auto rounded-lg bg-[var(--bg)] px-3 py-2 font-mono text-xs text-[var(--text)]">
                  {c.cmd}
                </pre>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local-first trust */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Local-first trust</p>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Privacy is the wedge — auditable by design
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Stdlib-only runtime — small dependency surface you can read",
              "Redaction by default in findings output",
              "No HTTP clients / telemetry in the CLI by design",
              "CI-friendly exit codes; injectable /proc for tests",
              "MIT license · v0.2.0 · 35 tests · CI across 3.10 / 3.12 / 3.13 · pre-commit + Action + SARIF",
              "Paid path prefers policy on your runners — not “upload to Watchwire cloud”",
            ].map((line) => (
              <li
                key={line}
                className="flex gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-muted)]"
              >
                <span className="text-[var(--accent)]" aria-hidden>
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">How it works</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Install · check · make it habit
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <span className="font-mono text-3xl font-semibold text-[rgba(93,255,159,0.2)]">
                  {s.n}
                </span>
                <h3 className="mt-2 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Community free · founding paid hypotheses
          </h2>
          <div className="mt-10">
            <PricingCards />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Straight answers
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="border-b border-[var(--border)] pb-6 last:border-0"
              >
                <dt className="font-medium text-[var(--text)]">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="wire-grid">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ship the check before the push
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
            Open-source core on GitHub. This site is the for-profit company
            surface — early, honest, defensive-only.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/maxmccutcheon59/watchwire"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              github.com/maxmccutcheon59/watchwire
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
