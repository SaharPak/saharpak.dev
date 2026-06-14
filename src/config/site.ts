/**
 * Central content config for saharpak.dev
 *
 * Single source of truth for the homepage. Edit copy, links, projects,
 * and contact settings here. You should rarely touch the components.
 */

export type ProjectStatus =
  | "Live"
  | "Open Source"
  | "Pilot"
  | "Demo"
  | "Internal Tool"
  | "Experiment"
  | "Coming Soon"
  | "Idea";

export type Accent = "terracotta" | "teal" | "sage" | "purple";

export interface CTA {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeaturedProject {
  name: string;
  status: ProjectStatus;
  /** One short sentence. Keep it under ~20 words. */
  blurb: string;
  accent: Accent;
  cta?: CTA;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export const site = {
  url: "https://saharpak.dev",
  title: "Sahar Pakseresht — Product & Community Builder",
  description:
    "Sahar Pakseresht builds small, practical products and communities, including useful AI tools from real problems. Founder of Tech Immigrants.",
  ogImage: "/og.png",
  locale: "en",
  author: "Sahar Pakseresht",
};

/* -------------------------------------------------------------------------- */
/* Person                                                                     */
/* -------------------------------------------------------------------------- */

export const person = {
  name: "Sahar Pakseresht",
  shortName: "Sahar",
  roles: ["Product Manager", "Community Builder", "AI Toolmaker"],
  location: "Finland",
};

/**
 * Profile photo.
 * Drop a square-ish image at `public/sahar.jpg`, then set `available: true`.
 * Until then a tasteful placeholder card is shown.
 */
export const profile = {
  photo: "/sahar.png",
  available: true,
  alt: "Sahar Pakseresht",
};

/* -------------------------------------------------------------------------- */
/* Contact (safe by default: nothing fake is ever shown)                      */
/* -------------------------------------------------------------------------- */

export const contact = {
  linkedinUrl: "https://www.linkedin.com/in/saharpak/",

  /** Set a real, configured address, then flip `emailPublished` to true. */
  publicEmail: "",
  emailPublished: false,

  /** Set a real Calendly URL to show a "Book a call" button. Empty = hidden. */
  calendlyUrl: "",

  /** "linkedin" | "email" — controls the primary contact button. */
  primaryContactMethod: "linkedin" as "linkedin" | "email",
};

/** True only when a real public email is actually configured. */
export const emailAvailable = contact.emailPublished && contact.publicEmail.length > 0;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const nav = {
  brand: "saharpak.dev",
  links: [
    { href: "#projects", label: "Projects" },
    { href: "#community", label: "Community" },
    { href: "#contact", label: "Contact" },
  ],
};

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  greeting: "Hi, I'm Sahar.",
  headlineAccent: "I build products and communities.",
  subheadline:
    "I'm a product manager, community builder, and founder of Tech Immigrants. I build small, practical products around immigrant careers, builders, automation, and personal growth.",
  now: "Now: building Product Builders and community AI tools.",
  primaryCta: { label: "See what I'm building", href: "#projects" },
  secondaryCta: { label: "Let's talk", href: "#contact" },
  tertiaryCta: {
    label: "Tech Immigrants",
    href: "https://www.youtube.com/@TechImmigrants",
    external: true,
  },
};

/* -------------------------------------------------------------------------- */
/* Identity tags                                                              */
/* -------------------------------------------------------------------------- */

export const identityTags = [
  "Product Manager",
  "Community Builder",
  "AI Toolmaker",
  "Founder of Tech Immigrants",
  "Based in Finland",
];

/* -------------------------------------------------------------------------- */
/* Featured projects (homepage only shows these)                              */
/* -------------------------------------------------------------------------- */

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Tech Immigrants",
    status: "Live",
    blurb: "A 53K+ community helping people navigate tech careers across borders.",
    accent: "terracotta",
    cta: {
      label: "Watch",
      href: "https://www.youtube.com/@TechImmigrants",
      external: true,
    },
  },
  {
    name: "Product Builders",
    status: "Pilot",
    blurb:
      "A Demo Day platform where builders share products and get advisor feedback.",
    accent: "teal",
  },
  {
    name: "CV Builder / CVRoast",
    status: "Open Source",
    blurb: "AI feedback and a privacy-first CV builder for tech job seekers.",
    accent: "sage",
    cta: { label: "Visit", href: "https://cvroast.dev", external: true },
  },
  {
    name: "Community Dashboard",
    status: "Demo",
    blurb: "n8n-powered community analytics and automation that guide what I build.",
    accent: "purple",
  },
  {
    name: "Persian Clip Finder",
    status: "Internal Tool",
    blurb: "Local-first tool that turns long Persian videos into short clips.",
    accent: "terracotta",
  },
  {
    name: "Trillion Operator Agent",
    status: "Internal Tool",
    blurb: "Local-first operator agent for projects, content, and trust-safe workflows.",
    accent: "teal",
  },
];

/* -------------------------------------------------------------------------- */
/* Tech Immigrants proof strip                                                */
/* -------------------------------------------------------------------------- */

export const community = {
  title: "Tech Immigrants in numbers",
  stats: [
    { value: "53K+", label: "Cross-platform reach" },
    { value: "190+", label: "Episodes" },
    { value: "400K+", label: "YouTube views" },
  ] as Stat[],
  line: "Community insights help me decide what to build next.",
  privacyNote: "Aggregate and anonymized. Community data is not sold.",
};

/* -------------------------------------------------------------------------- */
/* Work with me (final CTA)                                                   */
/* -------------------------------------------------------------------------- */

export const workWithMe = {
  title: "Want to build, partner, or talk?",
  text: "I'm open to collaborations around community products, AI tools, immigrant tech talent, product strategy, events, and useful sponsorships.",
  /** Where "Invite me to speak" and "Partner" route when no email is set. */
  speakingTopic: "Speaking invitation",
  partnerTopic: "Partnering with Tech Immigrants",
};

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export const footer = {
  line: "Built by Sahar in Finland.",
};

/** Public social links (only confirmed, real links). */
export const socials: SocialLink[] = [
  { label: "LinkedIn", href: contact.linkedinUrl },
  { label: "GitHub", href: "https://github.com/SaharPak" },
  { label: "YouTube — Tech Immigrants", href: "https://www.youtube.com/@TechImmigrants" },
  { label: "Product Builders", href: "#projects" },
];
