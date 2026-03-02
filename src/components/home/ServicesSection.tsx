import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/home";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
              Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Comprehensive engineering across your stack.
            </h2>
          </div>
          <Link
            className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            href="/contact"
          >
            Get a consult
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass-panel rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-surface-soft)]">
                  <Image src={service.icon} alt="" width={28} height={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-ink-muted)]">
                {service.items.map((item) => (
                  <li key={item} className="leading-relaxed">
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
