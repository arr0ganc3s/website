import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { edges, focusAreas } from "@/content/about";
import { siteConfig } from "@/content/site";

const aboutDescription =
  "Learn about Lone Star Labs and our mission to bridge traditional business needs with modern technology.";

export const metadata: Metadata = {
  title: "About us",
  description: aboutDescription,
  alternates: {
    canonical: "/about-us/",
  },
  openGraph: {
    title: `About us | ${siteConfig.name}`,
    description: aboutDescription,
    url: "/about-us/",
    type: "website",
    images: [
      {
        url: "/images/team-collab.jpg",
        width: 1200,
        height: 630,
        alt: "Engineering team collaborating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About us | ${siteConfig.name}`,
    description: aboutDescription,
    images: ["/images/team-collab.jpg"],
  },
};

export default function AboutUs() {
  return (
    <div>
      <section className="relative overflow-hidden py-24">
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-[color:var(--color-glow)] blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
              About {siteConfig.name}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              A fresh, ambitious technology partner based in Texas.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-muted)]">
              Welcome to Lone Star Labs, a modern technology service
              provider based in League City, Texas. As a new player in the tech
              industry, we bring a unique blend of youthful energy and
              cutting-edge expertise to the table.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-muted)]">
              Our mission is to bridge the gap between traditional business needs
              and modern technological solutions, delivering results that not
              only meet but exceed expectations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
                href="/contact"
              >
                Work with us
              </Link>
              <Link
                className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                href="/#services"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[color:var(--color-border)] shadow-[0_30px_80px_-60px_var(--color-shadow)]">
            <Image
              src="/images/team-collab.jpg"
              alt="Engineering team collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
                What we do
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                End-to-end services for modern delivery.
              </h2>
            </div>
            <Image
              src="/images/brand-mark.png"
              alt="Lone Star Labs mark"
              width={84}
              height={84}
              className="hidden h-16 w-16 object-contain sm:block"
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="glass-panel rounded-3xl p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {area.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
            Our edge
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            A team built for depth, speed, and reliability.
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {edges.map((edge) => (
              <div key={edge.title} className="glass-panel rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                  {edge.title}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {edge.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-panel-strong rounded-3xl p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
                  Partner with us
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Let&apos;s modernize your systems together.
                </h2>
                <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] sm:text-base">
                  From strategy to execution, we bring clarity, technical depth,
                  and proactive communication to every engagement.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link
                  className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
                  href="/contact"
                >
                  Schedule a call
                </Link>
                <Link
                  className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  href={siteConfig.emailHref}
                >
                  Email us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
