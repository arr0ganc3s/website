import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Cloud Solutions and Integration",
    icon: "/images/service-1.png",
    items: [
      "Cloud Migration and Legacy System Modernization",
      "Cloud Infrastructure Management (AWS, Azure, GCP)",
      "Integration of SDN Applications with Legacy Systems",
    ],
  },
  {
    title: "Testing and Quality Assurance",
    icon: "/images/service-2.png",
    items: [
      "Software Testing and Quality Assurance",
      "Penetration Testing for Enhanced Security",
      "Telecommunication Protocol/Application Testing",
      "Automated Testing and Test Tool Development",
    ],
  },
  {
    title: "Infrastructure Automation and Deployment",
    icon: "/images/service-3.png",
    items: [
      "Infrastructure as Code (IaC) using Terraform, Ansible",
      "Continuous Integration and Deployment Pipelines",
      "Kubernetes and Containerization Solutions",
    ],
  },
  {
    title: "Support and Maintenance",
    icon: "/images/service-4.png",
    items: [
      "Ongoing Application Support and Maintenance",
      "System Monitoring and Performance Optimization",
      "Security Updates and Compliance Management",
    ],
  },
  {
    title: "Web and Mobile Solutions",
    icon: "/images/service-5.png",
    items: [
      "Responsive Web Design and Development",
      "Mobile App Development for iOS and Android",
      "API-Based Application Development",
    ],
  },
  {
    title: "Custom Software Development",
    icon: "/images/service-6.png",
    items: [
      "Telecom and Networking Application Development",
      "Open-source Control and Data Plane Development",
      "SDN Application/API Development",
      "E-Commerce Solutions and Backend Development",
      "IoT Application Development",
    ],
  },
];

const highlights = [
  {
    title: "Cloud modernization",
    copy: "Legacy renewals, migration planning, and platform engineering for AWS, Azure, and GCP.",
  },
  {
    title: "Security-led QA",
    copy: "Penetration testing, protocol validation, and automated quality gates built into delivery.",
  },
  {
    title: "Automation at scale",
    copy: "IaC, CI/CD, Kubernetes, and infrastructure automation that keeps delivery predictable.",
  },
  {
    title: "Custom engineering",
    copy: "Telecom, SDN, IoT, and bespoke software development for complex environments.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    copy: "Align on goals, constraints, and success metrics across teams and stakeholders.",
  },
  {
    step: "02",
    title: "Architecture",
    copy: "Design secure, scalable systems with clear delivery milestones and accountability.",
  },
  {
    step: "03",
    title: "Build + Validate",
    copy: "Implement, test, and harden releases with automation, QA, and security reviews.",
  },
  {
    step: "04",
    title: "Launch + Support",
    copy: "Deploy confidently and stay aligned through monitoring, optimization, and support.",
  },
];

const capabilityTags = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "CI/CD",
  "SDN",
  "IoT",
  "Python",
  "C/C++",
  "Java",
  "Go",
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[color:var(--color-glow)] blur-3xl" />
        <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
              Lone Star Tech Solutions
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Modern engineering for cloud, automation, and secure delivery.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
              We bridge traditional business needs with modern technology, helping
              teams modernize legacy systems, automate infrastructure, and ship
              reliable software with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
                href="/contact"
              >
                Start a project
              </Link>
              <Link
                className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                href="#services"
              >
                View services
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="glass-panel rounded-2xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[color:var(--color-border)] shadow-[0_30px_80px_-60px_var(--color-shadow)]">
              <Image
                src="/images/hero-nasa.jpg"
                alt="Satellite view of Earth from space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/85 via-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[color:var(--color-surface-strong)]/90 p-4 text-sm text-[color:var(--color-ink-muted)] backdrop-blur">
                Delivering cloud modernization, QA, and automation for teams that
                demand reliability at speed.
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {[
              {
                src: "/images/team-collab.jpg",
                alt: "Engineering team collaborating",
              },
              {
                src: "/images/data-center.jpg",
                alt: "Data center infrastructure",
              },
              {
                src: "/images/dev-workstation.jpg",
                alt: "Developer workstation",
              },
            ].map((image) => (
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

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
              How we work
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              A delivery process built for clarity and speed.
            </h2>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] sm:text-base">
              We combine strategic planning with hands-on engineering, keeping
              every milestone visible and every release secure.
            </p>
            <div className="mt-8 grid gap-4">
              {process.map((item) => (
                <div key={item.step} className="glass-panel rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs font-semibold text-[color:var(--color-ink-muted)]">
                      {item.step}
                    </span>
                    <p className="font-display text-base font-semibold text-white">
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
          <div className="glass-panel-strong rounded-3xl p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
              Core capabilities
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              Platforms and tools we deliver with.
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {capabilityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-5 text-sm text-[color:var(--color-ink-muted)]">
              Need something specific? We tailor stacks to match legacy
              constraints, compliance requirements, and modern delivery targets.
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-panel-strong grid gap-10 rounded-3xl p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-ink-muted)]">
                Ready to build
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                Partner with a team that ships with precision.
              </h2>
              <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] sm:text-base">
                Share your goals and timeline. We will respond with a clear plan
                for delivery, risk mitigation, and ongoing support.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-[#041b1a] transition hover:bg-[color:var(--color-brand-dark)]"
                  href="/contact"
                >
                  Schedule a consult
                </Link>
                <Link
                  className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  href="mailto:info@lstsolutions.net"
                >
                  Email us
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-8">
              <Image
                src="/images/brand-mark.png"
                alt="Lone Star Tech Solutions mark"
                width={120}
                height={120}
                className="h-24 w-24 object-contain"
              />
              <p className="mt-6 text-sm text-[color:var(--color-ink-muted)]">US</p>
              <p className="text-lg font-semibold text-white">+1 (228) 249-7957</p>
              <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">Email</p>
              <Link className="text-lg font-semibold text-white" href="mailto:info@lstsolutions.net">
                info@lstsolutions.net
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
