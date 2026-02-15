import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import Starfield from "@/components/Starfield";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lone Star Tech Solutions",
    template: "%s | Lone Star Tech Solutions",
  },
  description:
    "Empowering innovation through cloud, automation, QA, and modern software delivery.",
  metadataBase: new URL("https://lstsolutions.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <Starfield />
        <div className="shooting-stars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col bg-transparent text-[color:var(--color-ink)]">
          <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Lone Star Tech Solutions logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] object-contain shadow-[0_14px_30px_-20px_var(--color-shadow)]"
                />
                <div>
                  <p className="font-display text-base font-semibold tracking-tight">
                    Lone Star Tech Solutions
                  </p>
                  <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-ink-muted)]">
                    Innovate. Transform. Excel.
                  </p>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--color-ink-muted)] md:flex">
                <Link className="transition hover:text-white" href="/">
                  Home
                </Link>
                <Link
                  className="transition hover:text-white"
                  href="/#services"
                >
                  Services
                </Link>
                <Link
                  className="transition hover:text-white"
                  href="/about-us"
                >
                  About us
                </Link>
                <Link
                  className="transition hover:text-white"
                  href="/contact"
                >
                  Contact us
                </Link>
              </nav>
              <Link
                className="hidden items-center rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)] md:flex"
                href="/contact"
              >
                Start a project
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)]">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
              <div>
                <p className="font-display text-lg font-semibold">
                  Lone Star Tech Solutions LLC
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  Engineering cloud, automation, and secure delivery for teams
                  that need reliability at speed.
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <p className="text-[color:var(--color-ink-muted)]">US: +1 (228) 249-7957</p>
                  <Link
                    className="text-[color:var(--color-brand)]"
                    href="mailto:info@lstsolutions.net"
                  >
                    info@lstsolutions.net
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--color-ink-muted)]">
                  Useful Links
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <Link className="hover:text-white" href="/">
                    Home
                  </Link>
                  <Link className="hover:text-white" href="/about-us">
                    About us
                  </Link>
                  <Link className="hover:text-white" href="/contact">
                    Contact us
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--color-ink-muted)]">
                  Information
                </p>
                <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
                  Based in League City, Texas, serving teams globally with cloud
                  modernization, QA, and secure delivery.
                </p>
              </div>
            </div>
            <div className="border-t border-[color:var(--color-border)]">
              <p className="mx-auto max-w-6xl px-6 py-6 text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                Copyright © 2024 Lone Star Tech Solutions LLC. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
