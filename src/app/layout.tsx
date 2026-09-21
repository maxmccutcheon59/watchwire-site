import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Watchwire — Local-first defensive CLI",
    template: "%s · Watchwire",
  },
  description:
    "Local-first defensive CLI (v0.5.0): secret scan, /proc, permission hygiene — plus pre-commit, GitHub Action (optional run-hygiene), SARIF/JSON, watchwire.toml, and policy packs — without sending filesystem contents off-box. Early OSS · pre-revenue.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Watchwire — Local-first defensive CLI",
    description:
      "Scan secrets, inspect /proc, flag risky permissions — on-box, auditable, no telemetry. v0.5.0 · pre-commit · Action · policy packs.",
    type: "website",
    url: siteUrl,
    siteName: "Watchwire",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watchwire — Local-first defensive CLI",
    description:
      "Scan secrets, inspect /proc, flag risky permissions — on-box, auditable, no telemetry. Early OSS · pre-revenue · v0.5.0.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
