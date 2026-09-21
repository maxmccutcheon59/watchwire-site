"use client";

import { useState } from "react";

export default function Terminal({
  title,
  children,
  className = "mt-4",
}: {
  title: string;
  children: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(children.replace(/^\n/, "").replace(/\n$/, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={`terminal ${className}`.trim()}>
      <div className="terminal-bar items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="ml-3 font-mono text-xs text-[var(--text-dim)]">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={copy}
          className="rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)] hover:bg-[rgba(93,255,159,0.08)] hover:text-[var(--accent)]"
          aria-label={copied ? "Copied" : "Copy command"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[var(--text-muted)]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
