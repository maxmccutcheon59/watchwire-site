import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Watchwire — Local-first defensive CLI",
    template: "%s · Watchwire",
  },
  description:
    "Local-first defensive security CLI: scan secrets (regex + entropy), inspect /proc, flag risky permissions — without sending your tree off-box. Early OSS · pre-revenue · founder-built.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Watchwire — Local-first defensive CLI",
    description:
      "Scan secrets, inspect /proc, flag risky permissions — on-box, auditable, no telemetry.",
    type: "website",
    url: siteUrl,
    siteName: "Watchwire",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watchwire — Local-first defensive CLI",
    description:
      "Scan secrets, inspect /proc, flag risky permissions — on-box, auditable, no telemetry. Early OSS · pre-revenue.",
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
