import Link from "next/link";
import { faqs } from "@/content/home";

export default function FaqSection() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-panel-strong rounded-3xl p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Answers before kickoff.
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-[color:var(--color-ink-muted)] sm:text-base">
            If your question is not listed, send us a note and we will respond
            with concrete next steps tailored to your environment.
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-5"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
            >
              Talk to our team
            </Link>
            <Link
              href="/#services"
              className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Compare services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
