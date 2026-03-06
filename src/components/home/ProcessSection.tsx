import { capabilityTags, process } from "@/content/home";

export default function ProcessSection() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="terminal-kicker">
            How we work
          </p>
          <h2 className="terminal-title mt-3 text-3xl sm:text-4xl">
            A delivery process built for clarity and speed.
          </h2>
          <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] sm:text-base">
            We combine strategic planning with hands-on engineering, keeping
            every milestone visible and every release secure.
          </p>
          <div className="mt-8 grid gap-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="glass-panel rounded-xl p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/60"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-[color:var(--color-border)] px-3 py-1 text-xs font-semibold text-[color:var(--color-accent)]">
                    {item.step}
                  </span>
                  <p className="font-display text-base font-semibold text-[color:var(--color-ink)]">
                    {item.title}
                  </p>
                </div>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel-strong rounded-2xl p-8">
          <p className="terminal-kicker">
            Core capabilities
          </p>
          <h3 className="terminal-title mt-3 text-2xl">
            Platforms and tools we deliver with.
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {capabilityTags.map((tag) => (
              <span key={tag} className="terminal-chip">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-5 text-sm text-[color:var(--color-ink-muted)]">
            Need something specific? We tailor stacks to match legacy
            constraints, compliance requirements, and modern delivery targets.
          </div>
        </div>
      </div>
    </section>
  );
}
