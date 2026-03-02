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
