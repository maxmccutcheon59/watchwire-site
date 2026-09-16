"use client";

import { useEffect, useState } from "react";

/** Client-only session id display — keeps /success static-exportable. */
export default function SessionIdNote() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("session_id");
    if (id) setSessionId(id);
  }, []);

  if (!sessionId) return null;
  return (
    <p className="mt-4 break-all font-mono text-xs text-[var(--text-dim)]">
      session: {sessionId}
    </p>
  );
}
