import Image from "next/image";
import { showcaseImages } from "@/content/home";

export default function ShowcaseSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="terminal-kicker">
            Tailored Solutions and Exceptional Support
          </p>
          <h2 className="terminal-title mt-3 text-3xl sm:text-4xl">
            Built for ambitious teams with complex systems.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-ink-muted)] sm:text-base">
            From modernization to ongoing support, we align with your roadmap
            and deliver with clarity, speed, and a security-first mindset.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {showcaseImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--color-border)] shadow-[0_24px_70px_-50px_var(--color-shadow)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b08]/82 via-[#020b08]/28 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/95">
                {index === 0 && "Cross-functional engineering collaboration"}
                {index === 1 && "Scalable infrastructure and platform operations"}
                {index === 2 && "Modern delivery workstations and tooling"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
