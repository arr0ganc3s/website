import Image from "next/image";
import { showcaseImages } from "@/content/home";

export default function ShowcaseSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
            Tailored Solutions and Exceptional Support
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Built for ambitious teams with complex systems.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-ink-muted)] sm:text-base">
            From modernization to ongoing support, we align with your roadmap
            and deliver with clarity, speed, and a security-first mindset.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {showcaseImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--color-border)] shadow-[0_24px_70px_-50px_var(--color-shadow)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
