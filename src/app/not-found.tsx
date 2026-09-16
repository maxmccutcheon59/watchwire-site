import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wire-grid border-b border-[var(--border)]">
      <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-24 sm:py-32">
        <p className="section-label mb-3">404</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Signal lost
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          That path isn&apos;t on the wire. The CLI still lives on GitHub — this
          page just isn&apos;t part of the marketing site.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back home
          </Link>
          <Link href="/install" className="btn-ghost">
            Install
          </Link>
          <a
            href="https://github.com/maxmccutcheon59/watchwire"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            CLI on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
