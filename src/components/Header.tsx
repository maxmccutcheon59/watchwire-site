import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(7,10,9,0.85)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--accent-dim)] bg-[rgba(93,255,159,0.08)] font-mono text-sm text-[var(--accent)]"
          >
            ⌁
          </span>
          <span className="font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
            Watchwire
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="nav-scroll flex min-w-0 max-w-full items-center gap-0.5 overflow-x-auto text-sm text-[var(--text-muted)] sm:gap-1"
        >
          <Link
            href="/product"
            className="shrink-0 rounded-md px-2.5 py-1.5 hover:text-[var(--text)] sm:px-3"
          >
            Product
          </Link>
          <Link
            href="/install"
            className="shrink-0 rounded-md px-2.5 py-1.5 hover:text-[var(--text)] sm:px-3"
          >
            Install
          </Link>
          <Link
            href="/pricing"
            className="shrink-0 rounded-md px-2.5 py-1.5 hover:text-[var(--text)] sm:px-3"
          >
            Pricing
          </Link>
          <a
            href="https://github.com/maxmccutcheon59/watchwire"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost ml-1 shrink-0 !px-3 !py-1.5 text-sm"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
