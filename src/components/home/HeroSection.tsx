import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/content/home";
import { siteConfig } from "@/content/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[color:var(--color-glow)] blur-3xl" />
      <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-[color:var(--color-accent)]/16 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="animate-fade-up">
          <p className="terminal-command">
            <span className="terminal-dot" />
            now accepting modernization partners
          </p>
          <p className="mt-5 terminal-kicker">
            {siteConfig.name}
          </p>
          <h1 className="terminal-title mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Modern engineering in terminal mode: precise, observable, and fast.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
            We bridge traditional business needs with modern technology, helping
            teams modernize legacy systems, automate infrastructure, and ship
            reliable software with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="terminal-button-primary" href="/contact">Start a project</Link>
            <Link className="terminal-button-secondary" href="#services">View services</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-xl p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/60"
              >
                <p className="terminal-kicker text-[color:var(--color-accent)]">
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[color:var(--color-border)] shadow-[0_30px_80px_-60px_var(--color-shadow)]">
            <Image
              src="/images/hero-nasa.jpg"
              alt="Satellite view of Earth from space"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d09]/88 via-transparent" />
          </div>
          <div className="glass-panel mt-4 rounded-xl p-4 text-xs text-[color:var(--color-ink-muted)] sm:text-sm">
            <p className="terminal-kicker text-[color:var(--color-accent)]">Live status</p>
            <p className="mt-2">
              Delivering cloud modernization, QA, and automation for teams that
              demand reliability at speed.
            </p>
            <p className="mt-3 font-semibold text-[color:var(--color-brand)]">
              Stable pipelines, secure releases, and faster delivery cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
