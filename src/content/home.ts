export type Service = {
  title: string;
  icon: string;
  items: string[];
};

export const services: Service[] = [
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

export const highlights = [
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

export const process = [
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

export const capabilityTags = [
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

export const showcaseImages = [
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
];

export type ImpactMetric = {
  value: string;
  label: string;
  note: string;
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: "99.95%",
    label: "Release reliability",
    note: "Consistent uptime and safe rollouts through automated quality gates.",
  },
  {
    value: "40%",
    label: "Faster delivery",
    note: "Improved cycle time with IaC workflows and structured CI/CD orchestration.",
  },
  {
    value: "24/7",
    label: "Operational coverage",
    note: "Global support model for observability, incident response, and hardening.",
  },
  {
    value: "150+",
    label: "Automated checks",
    note: "Security, regression, and integration checks embedded per release path.",
  },
];

export const trustSignals = [
  "Telecom & Networking",
  "Cloud Platforms",
  "IoT Ecosystems",
  "Enterprise SaaS",
  "Critical Infra",
  "Public Sector Programs",
];

export type CaseSnapshot = {
  title: string;
  sector: string;
  challenge: string;
  outcome: string;
  metric: string;
};

export const caseSnapshots: CaseSnapshot[] = [
  {
    title: "Legacy Telecom Modernization",
    sector: "Telecommunications",
    challenge:
      "A legacy operations stack created slow releases, fragile integrations, and limited observability.",
    outcome:
      "Introduced automated validation, containerized services, and staged rollout controls to stabilize delivery.",
    metric: "35% reduction in rollback incidents",
  },
  {
    title: "Cloud Reliability Program",
    sector: "Fintech Infrastructure",
    challenge:
      "A rapidly scaling platform needed stronger deployment controls across multi-cloud workloads.",
    outcome:
      "Implemented policy-based pipelines, drift detection, and release guardrails with repeatable IaC modules.",
    metric: "52% faster environment provisioning",
  },
  {
    title: "Security-Led QA Transformation",
    sector: "Enterprise Product Team",
    challenge:
      "Quality checks were late in the cycle, creating production risk and delayed releases.",
    outcome:
      "Shifted test and penetration workflows left, adding continuous checks and release scorecards.",
    metric: "61% faster defect detection before release",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lone Star Labs helped us move from reactive firefighting to predictable releases with a clear modernization path.",
    name: "Director of Engineering",
    role: "Platform Operations",
    company: "Regional Telecom Provider",
  },
  {
    quote:
      "Their QA and automation approach gave us immediate confidence in every deployment and shortened our release windows.",
    name: "VP of Product Delivery",
    role: "Software Delivery",
    company: "Enterprise SaaS Company",
  },
  {
    quote:
      "They integrated quickly with our team, modernized our tooling, and consistently delivered high-quality outcomes.",
    name: "Cloud Program Manager",
    role: "Digital Transformation",
    company: "Infrastructure Integrator",
  },
];

export const faqs = [
  {
    question: "How quickly can you start a new engagement?",
    answer:
      "Most engagements begin within one to two weeks after discovery. We define scope early, align on priorities, and establish the first delivery milestones before kickoff.",
  },
  {
    question: "Do you work with existing legacy systems and teams?",
    answer:
      "Yes. We are built for hybrid environments and collaborate closely with internal teams. Our process modernizes incrementally to avoid disruption while improving reliability.",
  },
  {
    question: "Can you support both project delivery and ongoing operations?",
    answer:
      "Absolutely. We provide implementation, testing, and deployment support, then continue with monitoring, optimization, and maintenance based on your operating model.",
  },
  {
    question: "What does your security and quality model include?",
    answer:
      "We integrate security and quality checks into the delivery lifecycle, including penetration testing, protocol validation, automated regression, and release gating.",
  },
];
