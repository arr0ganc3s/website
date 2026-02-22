import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Connect with Lone Star Labs to discuss cloud modernization, QA, automation, and custom software needs.",
};

export default function Contact() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-panel-strong min-h-[70vh] rounded-3xl p-10 sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.6fr_1fr]">
              <div className="flex justify-center lg:justify-start">
                <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-6 shadow-[0_24px_60px_-50px_var(--color-shadow)]">
                  <Image
                    src="/images/brand-mark.png"
                    alt="Lone Star Labs mark"
                    width={140}
                    height={140}
                    className="h-28 w-28 object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
                  Reach us directly
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Reach us directly.
                </h1>
                <p className="mt-6 text-base text-[color:var(--color-ink-muted)] sm:text-lg">
                  Call or email and we will respond quickly with next steps and
                  a clear engagement plan.
                </p>
                <div className="mt-10 grid gap-8 text-base text-[color:var(--color-ink-muted)] sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em]">US</p>
                    <p className="mt-2 text-2xl font-semibold text-white">+1 (228) 249-7957</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em]">Email</p>
                    <Link
                      className="mt-2 block text-2xl font-semibold text-white"
                      href="mailto:info@lstsolutions.net"
                    >
                      info@lstsolutions.net
                    </Link>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
                    href="mailto:info@lstsolutions.net"
                  >
                    Email us
                  </Link>
                  <Link
                    className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                    href="tel:+12282497957"
                  >
                    Call the US line
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
