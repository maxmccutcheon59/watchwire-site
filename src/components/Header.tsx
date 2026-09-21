import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(7,10,9,0.85)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Watchwire home">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--accent-dim)] bg-[rgba(93,255,159,0.08)] font-mono text-sm text-[var(--accent)]"
          >
            ⌁
          </span>
          <span className="font-semibold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
            Watchwire
          </span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1 text-sm text-[var(--text-muted)]">
          <Link
            href="/product"
            className="rounded-md px-2.5 py-1.5 hover:text-[var(--text)] sm:px-3"
          >
            Product
          </Link>
          <Link
            href="/install"
            className="rounded-md px-2.5 py-1.5 hover:text-[var(--text)] sm:px-3"
          >
            Install
          </Link>
          <Link
            href="/pricing"
            className="rounded-md px-2.5 py-1.5 hover:text-[var(--text)] sm:px-3"
          >
            Pricing
          </Link>
          <a
            href="https://github.com/maxmccutcheon59/watchwire"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost ml-1 !px-3 !py-1.5 text-sm"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
