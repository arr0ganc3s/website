import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/content/home";
import { siteConfig } from "@/content/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[color:var(--color-glow)] blur-3xl" />
      <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-brand)]" />
            Accepting New Modernization Partners
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Modern engineering for cloud, automation, and secure delivery.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
            We bridge traditional business needs with modern technology, helping
            teams modernize legacy systems, automate infrastructure, and ship
            reliable software with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
              href="/contact"
            >
              Start a project
            </Link>
            <Link
              className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              href="#services"
            >
              View services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/60"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up-delay">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[color:var(--color-border)] shadow-[0_30px_80px_-60px_var(--color-shadow)]">
            <Image
              src="/images/hero-nasa.jpg"
              alt="Satellite view of Earth from space"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/85 via-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[color:var(--color-surface-strong)]/90 p-4 text-sm text-[color:var(--color-ink-muted)] backdrop-blur">
              Delivering cloud modernization, QA, and automation for teams that
              demand reliability at speed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
