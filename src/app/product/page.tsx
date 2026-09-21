import type { Metadata } from "next";
import Link from "next/link";
import { cliRepo, cliRelease, productVersion } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Watchwire v0.5.0 deep-dive: scan, proc, hygiene, pre-commit, GitHub Action (optional run-hygiene), SARIF/JSON, watchwire.toml, policy packs, entropy FP — local-first, no telemetry.",
};

const surfaces = [
  {
    title: "scan",
    cmd: "watchwire scan PATH [--json|--sarif]",
    body: "Secret leak scan with regex + Shannon entropy. Redacted findings. Exit 1 on hits (CI-friendly). Machine-readable JSON and SARIF 2.1.0.",
  },
  {
    title: "proc",
    cmd: "watchwire proc [pid]",
    body: "Linux /proc process summary: cmdline, open FDs, VmRSS / VmSize, state. Read-only — no signals. Injectable /proc root for tests. JSON available.",
  },
  {
    title: "hygiene",
    cmd: "watchwire hygiene PATH [--json]",
    body: "Flags world-writable, setuid, and setgid entries under a tree. Host permission hygiene — not EDR. Also available in the Action via optional run-hygiene (default false).",
  },
];

const integrations = [
  {
    title: "Official pre-commit",
    detail: (
      <>
        Hook id <code className="font-mono text-xs text-[var(--accent)]">watchwire-scan</code>.
        Pin <code className="font-mono text-xs text-[var(--accent)]">rev: {productVersion}</code>{" "}
        in <code className="font-mono text-xs">.pre-commit-config.yaml</code>. Scans staged paths;
        fails on findings.
      </>
    ),
  },
  {
    title: "Composite GitHub Action",
    detail: (
      <>
        <code className="font-mono text-xs text-[var(--accent)]">
          uses: maxmccutcheon59/watchwire@{productVersion}
        </code>
        . Runs scan + optional SARIF. Optional{" "}
        <code className="font-mono text-xs text-[var(--accent)]">run-hygiene</code>{" "}
        input (default false) also runs{" "}
        <code className="font-mono text-xs">watchwire hygiene</code> on the same path.
      </>
    ),
  },
  {
    title: "SARIF / JSON",
    detail: (
      <>
        <code className="font-mono text-xs text-[var(--accent)]">--json</code> and{" "}
        <code className="font-mono text-xs text-[var(--accent)]">--sarif</code> on scan;
        JSON on hygiene and proc. Fits PR bots and security dashboards without
        uploading your tree to us.
      </>
    ),
  },
  {
    title: "watchwire.toml + policy packs",
    detail: (
      <>
        Exclude globs, rule toggles, entropy thresholds. Loaded from{" "}
        <code className="font-mono text-xs">./watchwire.toml</code> or{" "}
        <code className="font-mono text-xs">--config</code>. Shipped packs:{" "}
        <code className="font-mono text-xs">examples/policies/student.toml</code>,{" "}
        <code className="font-mono text-xs">indie.toml</code>,{" "}
        <code className="font-mono text-xs">small-team.toml</code>. Foundation for
        possible paid team policies later — not a claim that org sync ships today.
      </>
    ),
  },
  {
    title: "Entropy false-positive pass",
    detail:
      "Auto-suppresses common noise classes: UUIDs, pure hex digests, low-diversity base64 padding. Heuristics still have FPs/FNs — we do not claim to beat gitleaks or TruffleHog on coverage.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="wire-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Product · {productVersion}</p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Local-first defensive CLI — deep dive
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Secret scan,{" "}
            <code className="font-mono text-sm text-[var(--accent)]">/proc</code>
            , permission hygiene — plus pre-commit, GitHub Action (optional{" "}
            <code className="font-mono text-sm text-[var(--accent)]">run-hygiene</code>
            ), SARIF/JSON, <code className="font-mono text-sm text-[var(--accent)]">watchwire.toml</code>
            , and student/indie/small-team policy packs — without sending
            filesystem contents off-box.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/install" className="btn-primary">
              Install &amp; demo
            </Link>
            <a
              href={cliRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Release {productVersion}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Three commands</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What exists today
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
            Python 3.10+, stdlib runtime, MIT. No network clients or telemetry
            in the CLI by design. 80 tests · CI green (3.10 / 3.12 / 3.13 +
            ruff).
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {surfaces.map((s) => (
              <div key={s.title} className="card p-5">
                <p className="font-mono text-xs text-[var(--accent)]">{s.title}</p>
                <pre className="mt-3 overflow-x-auto rounded-lg bg-[var(--bg)] px-3 py-2 font-mono text-xs text-[var(--text)]">
                  {s.cmd}
                </pre>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">CI &amp; policy</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Same local check in hooks and Actions
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
            Integrations run on <em className="not-italic text-[var(--text)]">your</em>{" "}
            runners — not a vendor upload of your tree to Watchwire cloud.
          </p>
          <ul className="mt-10 space-y-5">
            {integrations.map((item) => (
              <li key={item.title} className="card p-5">
                <h3 className="font-medium text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Scope lock</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What Watchwire is not
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-sm text-[var(--text-muted)]">
            {[
              "Not exploit tooling, remote-target scanning, or a pentest kit",
              "Not a replacement for Vault/KMS, gitleaks/TruffleHog at scale, or EDR",
              "Not a SaaS product or telemetry product today",
              "Not enterprise SecOps / compliance SKU — ICP is students, early-career, indie/solo Linux",
              "No invented customers, ARR, waitlists, or download counts",
              "No coverage-win claim vs gitleaks or TruffleHog",
            ].map((line) => (
              <li
                key={line}
                className="flex gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3"
              >
                <span className="text-[var(--text-dim)]" aria-hidden>
                  —
                </span>
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Full source and CHANGELOG:{" "}
            <a
              href={cliRepo}
              className="text-[var(--accent)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cliRepo.replace("https://", "")}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
