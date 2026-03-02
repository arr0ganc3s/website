export const siteConfig = {
  name: "Lone Star Labs",
  legalName: "Lone Star Tech Solutions LLC",
  tagline: "Innovate. Transform. Excel.",
  description:
    "Empowering innovation through cloud, automation, QA, and modern software delivery.",
  url: "https://lstsolutions.net",
  phoneDisplay: "+1 (228) 249-7957",
  phoneHref: "tel:+12282497957",
  email: "info@lstsolutions.net",
  emailHref: "mailto:info@lstsolutions.net",
  location: "League City, Texas",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about-us", label: "About us" },
  { href: "/contact", label: "Contact us" },
] as const;
