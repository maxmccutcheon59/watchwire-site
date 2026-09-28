import type { Metadata } from "next";
import { redirect } from "next/navigation";

// Stripe checkout was removed; old return links go home.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function Redirect() {
  redirect("/");
}
