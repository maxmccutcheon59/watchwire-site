import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Watchwire privacy stub — pre-revenue founder tool.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20 prose-invert">
      <p className="section-label mb-3">Legal</p>
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-2 text-sm text-[var(--text-dim)]">
        Last updated: September 16, 2026 · Honest stub for a pre-revenue founder
        tool
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--text-muted)]">
        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Short version
          </h2>
          <p>
            The Watchwire CLI is designed not to phone home. This marketing site
            may use standard hosting/analytics provided by your deploy platform
            (e.g. Vercel). Payments go through Stripe. We do not sell personal
            data.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            The CLI product
          </h2>
          <p>
            Watchwire (the open-source CLI at{" "}
            <a
              className="text-[var(--accent)] hover:underline"
              href="https://github.com/maxmccutcheon59/watchwire"
            >
              github.com/maxmccutcheon59/watchwire
            </a>
            ) runs locally. By design it does not include network clients or
            telemetry for uploading your filesystem contents. Findings are
            redacted in output. Review the source — that is the privacy
            guarantee.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            This website
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Hosting providers may collect IP addresses, user-agent, and
              request logs as part of normal web hosting.
            </li>
            <li>
              If you start Checkout, Stripe processes payment details under
              Stripe&apos;s privacy policy. Watchwire receives limited billing
              metadata (e.g. plan, email Stripe shares with the merchant).
            </li>
            <li>
              We do not run a customer database or waitlist on this site today.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Contact
          </h2>
          <p>
            Founder: Max McCutcheon. Prefer GitHub issues on the Watchwire repo
            for product questions. This page will be expanded if/when the
            company collects more data.
          </p>
        </section>
      </div>
    </article>
  );
}
