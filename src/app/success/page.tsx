import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout success",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id;

  return (
    <div className="mx-auto max-w-lg px-5 py-24 text-center">
      <p className="section-label mb-3">Stripe</p>
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
        Payment started successfully
      </h1>
      <p className="mt-4 text-[var(--text-muted)]">
        Thanks for supporting Watchwire at founding pricing. The OSS CLI stays
        local-first — paid features will land honestly as they ship.
      </p>
      {sessionId && (
        <p className="mt-4 break-all font-mono text-xs text-[var(--text-dim)]">
          session: {sessionId}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://github.com/maxmccutcheon59/watchwire"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the CLI repo
        </a>
        <Link href="/" className="btn-ghost">
          Back home
        </Link>
      </div>
    </div>
  );
}
