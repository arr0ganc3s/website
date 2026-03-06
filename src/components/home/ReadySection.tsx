import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function ReadySection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel-strong grid gap-10 rounded-2xl p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="terminal-command">
              <span className="terminal-dot" />
              Typical response within one business day
            </p>
            <p className="mt-5 terminal-kicker">
              Ready to build
            </p>
            <h2 className="terminal-title mt-3 text-3xl sm:text-4xl">
              Partner with a team that ships with precision.
            </h2>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] sm:text-base">
              Share your goals and timeline. We will respond with a clear plan
              for delivery, risk mitigation, and ongoing support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="terminal-button-primary" href="/contact">
                Schedule a consult
              </Link>
              <Link className="terminal-button-secondary" href={siteConfig.emailHref}>
                Email us
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-[color:var(--color-ink-muted)] sm:grid-cols-3">
              <p className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2">
                Discovery call
              </p>
              <p className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2">
                Scope alignment
              </p>
              <p className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2">
                Delivery roadmap
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-8">
            <Image
              src="/images/brand-mark.png"
              alt="Lone Star Labs mark"
              width={120}
              height={120}
              className="h-24 w-24 object-contain"
            />
            <p className="mt-6 text-sm text-[color:var(--color-ink-muted)]">US</p>
            <p className="text-lg font-semibold text-[color:var(--color-ink)]">{siteConfig.phoneDisplay}</p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">Email</p>
            <Link className="text-lg font-semibold text-[color:var(--color-ink)]" href={siteConfig.emailHref}>
              {siteConfig.email}
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-faint)]">
              League City, Texas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
