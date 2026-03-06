import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/home";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="terminal-kicker">
              Services
            </p>
            <h2 className="terminal-title mt-3 text-3xl sm:text-4xl">
              Comprehensive engineering across your stack.
            </h2>
          </div>
          <Link className="terminal-button-secondary" href="/contact">
            Get a consult
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[color:var(--color-surface-soft)]">
                  <Image src={service.icon} alt="" width={28} height={28} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand)]">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-faint)]">
                Service area {String(index + 1).padStart(2, "0")}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-ink-muted)]">
                {service.items.map((item) => (
                  <li key={item} className="leading-relaxed before:mr-2 before:text-[color:var(--color-brand)] before:content-['>']">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
