import type { Metadata } from "next";
import Link from "next/link";
import Terminal from "@/components/Terminal";
import { cliRepo, cliRelease, productVersion } from "@/lib/site";

export const metadata: Metadata = {
  title: "Install",
  description:
    "Install Watchwire v0.4.0: clone, pip install -e, 2-minute demo, policy packs, pre-commit, and GitHub Action (optional run-hygiene).",
};

export default function InstallPage() {
  return (
    <>
      <section className="wire-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Install · {productVersion}</p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Install and demo in under two minutes
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Requires <strong className="font-medium text-[var(--text)]">Python 3.10+</strong>.
            Runtime is the standard library only. The{" "}
            <code className="font-mono text-sm text-[var(--accent)]">proc</code>{" "}
            subcommand is Linux-oriented (<code className="font-mono text-sm">/proc</code>).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cliRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              CLI repository
            </a>
            <a
              href={cliRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Release {productVersion}
            </a>
            <Link href="/product" className="btn-ghost">
              Product deep-dive
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">1 · Install</p>
          <h2 className="text-2xl font-semibold tracking-tight">Clone and editable install</h2>
          <Terminal title="bash">
{`git clone https://github.com/maxmccutcheon59/watchwire.git
cd watchwire
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"`}
          </Terminal>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">2 · Demo</p>
          <h2 className="text-2xl font-semibold tracking-tight">Three commands</h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Fixture trees use fake patterns only — never real secrets. Matches
            are redacted. <code className="font-mono text-xs">scan</code> /{" "}
            <code className="font-mono text-xs">hygiene</code> exit{" "}
            <code className="font-mono text-xs">1</code> if findings exist.
          </p>
          <Terminal title="demo">
{`# 1) Scan fixture tree
watchwire scan tests/fixtures/

# 2) Summarize processes (read-only /proc)
watchwire proc
watchwire proc 1

# 3) Permission hygiene
watchwire hygiene .

# Machine-readable
watchwire scan tests/fixtures --sarif
watchwire hygiene . --json
watchwire proc --json`}
          </Terminal>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">3 · Policy</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            watchwire.toml + policy packs
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Optional local policy from{" "}
            <code className="font-mono text-xs">./watchwire.toml</code> or{" "}
            <code className="font-mono text-xs">--config</code>. Shipped packs
            under <code className="font-mono text-xs">examples/policies/</code>:{" "}
            student, indie, small-team.
          </p>
          <Terminal title="policy">
{`watchwire scan ./my-project
watchwire scan ./my-project --config ./examples/watchwire.toml
watchwire scan . --config examples/policies/indie.toml
watchwire scan . --config examples/policies/student.toml
watchwire scan . --config examples/policies/small-team.toml`}
          </Terminal>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">4 · Pre-commit</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Official hook · pin {productVersion}
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            In another repo&apos;s{" "}
            <code className="font-mono text-xs">.pre-commit-config.yaml</code>:
          </p>
          <Terminal title=".pre-commit-config.yaml">
{`repos:
  - repo: https://github.com/maxmccutcheon59/watchwire
    rev: ${productVersion}
    hooks:
      - id: watchwire-scan`}
          </Terminal>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">5 · GitHub Action</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Composite Action · pin {productVersion}
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Scan + optional SARIF. Optional{" "}
            <code className="font-mono text-xs">run-hygiene</code> (default{" "}
            <code className="font-mono text-xs">false</code>) also runs hygiene
            on the same path.
          </p>
          <Terminal title="workflow.yml">
{`- uses: actions/checkout@v4

- name: Scan with Watchwire
  id: ww
  uses: maxmccutcheon59/watchwire@${productVersion}
  with:
    path: "."
    sarif-file: watchwire.sarif
    fail-on-findings: "true"
    run-hygiene: "false"   # set "true" to also run watchwire hygiene

- name: Upload SARIF (optional)
  if: success() || failure()
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: \${{ steps.ww.outputs.sarif-path }}`}
          </Terminal>
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            More examples live under{" "}
            <code className="font-mono text-xs">examples/</code> in the{" "}
            <a
              href={cliRepo}
              className="text-[var(--accent)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLI repo
            </a>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
          <h2 className="text-xl font-semibold tracking-tight">
            Prefer the full README?
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Install, demos, and CI notes stay authoritative on GitHub.
          </p>
          <a
            href={cliRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-block"
          >
            Open CLI README
          </a>
        </div>
      </section>
    </>
  );
}
