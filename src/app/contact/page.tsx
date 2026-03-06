import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

const contactDescription =
  "Connect with Lone Star Labs to discuss cloud modernization, QA, automation, and custom software needs.";

export const metadata: Metadata = {
  title: "Contact us",
  description: contactDescription,
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: `Contact us | ${siteConfig.name}`,
    description: contactDescription,
    url: "/contact/",
    type: "website",
    images: [
      {
        url: "/images/dev-workstation.jpg",
        width: 1200,
        height: 630,
        alt: "Developer workstation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact us | ${siteConfig.name}`,
    description: contactDescription,
    images: ["/images/dev-workstation.jpg"],
  },
};

export default function Contact() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-panel-strong min-h-[70vh] rounded-2xl p-10 sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.6fr_1fr]">
              <div className="flex justify-center lg:justify-start">
                <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-6 shadow-[0_24px_60px_-50px_var(--color-shadow)]">
                  <Image
                    src="/images/brand-mark.png"
                    alt="Lone Star Labs mark"
                    width={140}
                    height={140}
                    className="h-28 w-28 object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="terminal-kicker">
                  Reach us directly
                </p>
                <h1 className="terminal-title mt-4 text-4xl leading-tight sm:text-5xl">
                  Let&apos;s plan your next delivery.
                </h1>
                <p className="mt-6 text-base text-[color:var(--color-ink-muted)] sm:text-lg">
                  Call or email and we will respond quickly with next steps and
                  a clear engagement plan.
                </p>
                <div className="mt-10 grid gap-8 text-base text-[color:var(--color-ink-muted)] sm:grid-cols-2">
                  <div>
                    <p className="terminal-kicker">US</p>
                    <p className="mt-2 text-2xl font-semibold text-[color:var(--color-ink)]">{siteConfig.phoneDisplay}</p>
                  </div>
                  <div>
                    <p className="terminal-kicker">Email</p>
                    <Link
                      className="mt-2 block text-2xl font-semibold text-[color:var(--color-ink)]"
                      href={siteConfig.emailHref}
                    >
                      {siteConfig.email}
                    </Link>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link className="terminal-button-primary" href={siteConfig.emailHref}>
                    Email us
                  </Link>
                  <Link className="terminal-button-secondary" href={siteConfig.phoneHref}>
                    Call the US line
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
