"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};
const readSessionId = () =>
  new URLSearchParams(window.location.search).get("session_id");
const serverSessionId = () => null;

/** Client-only session id display — keeps /success static-exportable. */
export default function SessionIdNote() {
  const sessionId = useSyncExternalStore(noopSubscribe, readSessionId, serverSessionId);

  if (!sessionId) return null;
  return (
    <p className="mt-4 break-all font-mono text-xs text-[var(--text-dim)]">
      session: {sessionId}
    </p>
  );
}
