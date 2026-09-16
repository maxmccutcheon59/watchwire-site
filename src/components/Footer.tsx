import Link from "next/link";
import { contactEmail, cliRepo } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-[var(--accent)]">⌁</span>
            <span className="font-semibold">Watchwire</span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Local-first defensive CLI. Scan secrets, inspect{" "}
            <code className="font-mono text-xs text-[var(--accent)]">/proc</code>,
            flag risky permissions — without sending your tree off-box.
          </p>
          <p className="mt-3 text-xs text-[var(--text-dim)]">
            Founder: Max McCutcheon · Pre-revenue · Early OSS · MIT · v0.4.0
          </p>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Contact:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-[var(--accent)] hover:underline"
            >
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:gap-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
              Product
            </p>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>
                <Link href="/product" className="hover:text-[var(--accent)]">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/install" className="hover:text-[var(--accent)]">
                  Install
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[var(--accent)]">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href={cliRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  CLI on GitHub
                </a>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[var(--accent)]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
              Legal
            </p>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>
                <Link href="/privacy" className="hover:text-[var(--accent)]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--accent)]">
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-[var(--accent)]"
                >
                  Email Max
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-5 py-4 text-center text-xs text-[var(--text-dim)]">
        © {new Date().getFullYear()} Watchwire · Defensive tooling only · No
        telemetry by design
      </div>
    </footer>
  );
}
