import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import MobileNav from "@/components/MobileNav";
import Starfield from "@/components/Starfield";
import { navLinks, siteConfig } from "@/content/site";
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
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "cloud modernization",
    "software testing",
    "quality assurance",
    "devops automation",
    "kubernetes",
    "terraform",
    "custom software development",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-nasa.jpg",
        width: 1200,
        height: 630,
        alt: "Satellite view of Earth from space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/hero-nasa.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
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
                  alt="Lone Star Labs logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] object-contain shadow-[0_14px_30px_-20px_var(--color-shadow)]"
                />
                <div>
                  <p className="font-display text-base font-semibold tracking-tight">
                    {siteConfig.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-ink-muted)]">
                    {siteConfig.tagline}
                  </p>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--color-ink-muted)] md:flex">
                {navLinks.map((link) => (
                  <Link key={link.href} className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Link
                  className="hidden items-center rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)] md:flex"
                  href="/contact"
                >
                  Start a project
                </Link>
                <MobileNav />
              </div>
            </div>
          </header>
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)]">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
              <div>
                <p className="font-display text-lg font-semibold">
                  {siteConfig.legalName}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  Engineering cloud, automation, and secure delivery for teams
                  that need reliability at speed.
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <p className="text-[color:var(--color-ink-muted)]">US: {siteConfig.phoneDisplay}</p>
                  <Link
                    className="text-[color:var(--color-brand)]"
                    href={siteConfig.emailHref}
                  >
                    {siteConfig.email}
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--color-ink-muted)]">
                  Useful Links
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  {navLinks.map((link) => (
                    <Link key={link.href} className="hover:text-white" href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--color-ink-muted)]">
                  Information
                </p>
                <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
                  Based in {siteConfig.location}, serving teams globally with cloud
                  modernization, QA, and secure delivery.
                </p>
              </div>
            </div>
            <div className="border-t border-[color:var(--color-border)]">
              <p className="mx-auto max-w-6xl px-6 py-6 text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                Copyright © {new Date().getFullYear()} {siteConfig.legalName}. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
