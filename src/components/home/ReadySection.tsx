import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function ReadySection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel-strong grid gap-10 rounded-3xl p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-ink-muted)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-brand)]" />
              Typical response within one business day
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
              Ready to build
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Partner with a team that ships with precision.
            </h2>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] sm:text-base">
              Share your goals and timeline. We will respond with a clear plan
              for delivery, risk mitigation, and ongoing support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
                href="/contact"
              >
                Schedule a consult
              </Link>
              <Link
                className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                href={siteConfig.emailHref}
              >
                Email us
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-[color:var(--color-ink-muted)] sm:grid-cols-3">
              <p className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2">
                Discovery call
              </p>
              <p className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2">
                Scope alignment
              </p>
              <p className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2">
                Delivery roadmap
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-8">
            <Image
              src="/images/brand-mark.png"
              alt="Lone Star Labs mark"
              width={120}
              height={120}
              className="h-24 w-24 object-contain"
            />
            <p className="mt-6 text-sm text-[color:var(--color-ink-muted)]">US</p>
            <p className="text-lg font-semibold text-white">{siteConfig.phoneDisplay}</p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">Email</p>
            <Link className="text-lg font-semibold text-white" href={siteConfig.emailHref}>
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
