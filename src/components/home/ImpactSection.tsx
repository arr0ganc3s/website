import { impactMetrics, trustSignals } from "@/content/home";

export default function ImpactSection() {
  return (
    <section className="pb-10 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel-strong rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
                Delivery impact
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                Modernization measured in outcomes, not buzzwords.
              </h2>
            </div>
            <p className="text-sm text-[color:var(--color-ink-muted)]">
              Practical engineering for high-availability environments.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/60"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="font-display text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-ink-muted)]">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                  {metric.note}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-[color:var(--color-border)] pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Trusted in complex environments
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
