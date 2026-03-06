import { testimonials } from "@/content/home";

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="terminal-kicker">
            Client perspective
          </p>
          <h2 className="terminal-title mt-3 text-3xl sm:text-4xl">
            Teams trust us when reliability cannot be optional.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={`${item.name}-${item.company}`} className="glass-panel rounded-2xl p-6">
              <p className="text-sm tracking-[0.24em] text-[color:var(--color-accent)]">[rated 5.0]</p>
              <blockquote className="mt-4 text-base leading-relaxed text-[color:var(--color-ink)]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-[color:var(--color-border)] pt-4">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                  {item.role}
                </p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{item.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
