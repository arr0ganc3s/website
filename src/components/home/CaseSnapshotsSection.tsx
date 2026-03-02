import { caseSnapshots } from "@/content/home";

export default function CaseSnapshotsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
              Program snapshots
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              What modern delivery looks like in the field.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[color:var(--color-ink-muted)]">
            Representative outcomes from modernization, QA transformation, and
            cloud reliability engagements.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseSnapshots.map((item) => (
            <article
              key={item.title}
              className="glass-panel group relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[color:var(--color-glow)] blur-2xl transition duration-300 group-hover:opacity-100" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-ink-muted)]">
                {item.sector}
              </p>
              <h3 className="relative mt-3 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                <span className="font-semibold text-white/90">Challenge:</span> {item.challenge}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                <span className="font-semibold text-white/90">Outcome:</span> {item.outcome}
              </p>
              <p className="relative mt-5 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand)]">
                {item.metric}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
