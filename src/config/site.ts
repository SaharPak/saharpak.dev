/**
 * Central content config for saharpak.dev
 *
 * This is the single source of truth for everything on the site.
 * Edit this file to update copy, links, projects, and stats.
 * You should rarely need to touch the components themselves.
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

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  /** One honest line on the motivation behind the project. */
  why: string;
  status: ProjectStatus;
  links?: ProjectLink[];
  /** Optional call to action shown on the card. */
  cta?: ProjectLink;
}

export interface ProjectCategory {
  id: string;
  title: string;
  blurb: string;
  projects: Project[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

/* -------------------------------------------------------------------------- */
/* Site-wide / SEO                                                            */
/* -------------------------------------------------------------------------- */

export const site = {
  url: "https://saharpak.dev",
  title: "Sahar Pakseresht — Product Architect, Community Builder, AI Toolmaker",
  description:
    "Personal website of Sahar Pakseresht, founder of Tech Immigrants, building community-powered AI tools for immigrant careers, product builders, automation, and personal growth.",
  /** Path to the social preview image inside /public. */
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
  roles: ["Product Architect", "Community Builder", "AI Toolmaker"],
  location: "Espoo, Finland",
  availability: "Open to partnerships & collaboration",
};

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const nav = {
  brand: "saharpak.dev",
  links: [
    { href: "#about", label: "About" },
    { href: "#tech-immigrants", label: "Tech Immigrants" },
    { href: "#projects", label: "Projects" },
    { href: "#focus", label: "Now" },
    { href: "#collaborate", label: "Collaborate" },
    { href: "#contact", label: "Contact" },
  ],
};

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Hi, I'm Sahar",
  headline: "Building community-powered AI tools for the immigrant tech journey.",
  subheadline:
    "I'm Sahar Pakseresht, a product architect and founder of Tech Immigrants. I build practical AI tools, open-source projects, and community products from real problems I see in immigrant, career, founder, and personal growth journeys.",
  primaryCta: { label: "View my projects", href: "#projects" },
  secondaryCta: { label: "Partner / collaborate", href: "#collaborate" },
  tertiaryCta: { label: "Follow my build journey", href: "#focus" },
  signals: [
    { label: "Open to partnerships", live: true },
    { label: "Espoo, Finland", live: false },
    { label: "Community-led building", live: false },
  ],
};

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  heading: "I build from real problems, not abstract ideas.",
  paragraphs: [
    "I'm an Iranian-born product builder based in Espoo, Finland. I spent a decade in product architecture and platform work, and I've learned that the best products come from listening closely to people, not from chasing trends.",
    "I'm the founder of Tech Immigrants, a community for people navigating tech careers across borders. Running it taught me that there are thousands of repeated, unsolved problems hiding in everyday immigrant, career, and founder journeys.",
    "Today I work where AI, community intelligence, open-source, and automation overlap. I turn the patterns I see in the community into practical tools, then build them in the open.",
  ],
  interests: [
    "AI tools",
    "Community intelligence",
    "Open source",
    "Automation",
    "Career tooling",
    "Personal growth tools",
  ],
};

/* -------------------------------------------------------------------------- */
/* Tech Immigrants                                                            */
/* -------------------------------------------------------------------------- */

export const techImmigrants = {
  heading: "Tech Immigrants is the ecosystem everything connects to.",
  intro:
    "Tech Immigrants is a community for people building tech careers and companies across borders. It's where I listen, learn, and discover the real problems worth solving. Most of my products start as something a community member actually needed.",
  channels: [
    {
      label: "YouTube & live sessions",
      description: "Long-form interviews, AMAs, and live build sessions.",
      href: "https://www.youtube.com/@TechImmigrants",
    },
    {
      label: "Telegram community",
      description: "Day-to-day questions, support, and peer help.",
      href: "https://t.me/TwitterImmigrant",
    },
    {
      label: "LinkedIn & X",
      description: "Announcements, updates, and build-in-public notes.",
      href: "https://www.linkedin.com/in/saharpak/",
    },
  ],
  trustNote:
    "We do not sell community trust or community data. Tech Immigrants exists to help its members first.",
};

/* -------------------------------------------------------------------------- */
/* Community Intelligence                                                      */
/* -------------------------------------------------------------------------- */

export const communityIntelligence = {
  heading: "My roadmap is backed by real community signals.",
  intro:
    "Instead of guessing what to build, I look at what the community actually asks for. These are aggregate signals from years of Tech Immigrants conversations. They point clearly at where useful tools are needed.",
  stats: [
    { value: "53,000+", label: "Cross-platform reach" },
    { value: "134,814", label: "Telegram messages analyzed" },
    { value: "10,587", label: "Unique contributors" },
    { value: "66,596", label: "Questions asked" },
    { value: "27,503", label: "Pain signals" },
    { value: "2,356", label: "Explicit product / service requests" },
  ] as Stat[],
  highlight: "CV & job search is the strongest demand area.",
  privacyNote:
    "Insights are aggregate and anonymized. No personal community data is shared or sold.",
  report: {
    available: false,
    label: "Report coming soon",
    href: "#",
  },
};

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export const projectCategories: ProjectCategory[] = [
  {
    id: "career",
    title: "Immigrant Career Tools",
    blurb: "Practical tools for the strongest demand area: jobs and careers.",
    projects: [
      {
        name: "CVRoast",
        status: "Demo",
        description: "Fast AI feedback for CVs and job applications.",
        why: "Job seekers needed honest CV feedback without paying for a coach.",
        links: [{ label: "Visit", href: "https://cvroast.dev" }],
      },
      {
        name: "Tech Immigrants CV Builder",
        status: "Open Source",
        description:
          "Community-built, privacy-first CV builder for tech job seekers.",
        why: "Turning CVRoast into a contributor-driven, free tool the community owns.",
        links: [
          { label: "GitHub", href: "https://github.com/TechImmigrants/cv-builder" },
        ],
      },
      {
        name: "LinkedIn Optimizer / Job Playbooks",
        status: "Idea",
        description:
          "Guided tooling and playbooks for profiles, outreach, and applications.",
        why: "The same career questions come up again and again in the community.",
      },
    ],
  },
  {
    id: "builder",
    title: "Community & Builder Tools",
    blurb: "Helping community members ship and showcase their own products.",
    projects: [
      {
        name: "Product Builders",
        status: "Pilot",
        description:
          "A platform and Demo Day format where builders submit projects, receive votes, and demo live with advisor feedback.",
        why: "Builders in the community needed a real stage and honest feedback.",
      },
      {
        name: "Tech Immigrants Demo Day",
        status: "Pilot",
        description: "Manual-first showcase for community builders.",
        why: "Start manual, prove the format works, then automate what matters.",
      },
      {
        name: "Community Dashboard",
        status: "Demo",
        description: "n8n-powered community analytics and automation demo.",
        why: "I needed a trust-safe way to understand community signals at a glance.",
      },
    ],
  },
  {
    id: "automation",
    title: "Content & Automation Tools",
    blurb: "Local-first tooling that keeps content and operations sustainable.",
    projects: [
      {
        name: "Persian Clip Finder",
        status: "Internal Tool",
        description:
          "Local-first tool for finding clips from long Persian videos and turning them into short-form content.",
        why: "Repurposing long videos by hand was eating too many hours.",
      },
      {
        name: "Trillion / Operator Agent",
        status: "Internal Tool",
        description:
          "Local-first operator agent to help manage projects, content, priorities, and trust-safe monetization workflows.",
        why: "Running an ecosystem solo needs an operator that respects privacy.",
      },
    ],
  },
  {
    id: "personal",
    title: "Personal OS Experiments",
    blurb: "Local-first experiments in personal growth and well-being.",
    projects: [
      {
        name: "Therapy Insight",
        status: "Experiment",
        description:
          "Local-first therapy notes and reflection companion. Not a medical product.",
        why: "Reflection works better when notes stay private and on-device.",
      },
      {
        name: "Readiness Coach",
        status: "Experiment",
        description:
          "Oura / readiness dashboard that translates sleep and energy data into daily planning guidance. Not medical advice.",
        why: "I wanted my energy data to actually shape how I plan a day.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Current focus (build-in-public)                                            */
/* -------------------------------------------------------------------------- */

export const currentFocus = {
  heading: "What I'm focused on right now.",
  intro: "I build in public. Here's where my energy is going this season.",
  items: [
    "Stabilizing my project ecosystem so each tool is easy to maintain.",
    "Turning Tech Immigrants insights into useful career tools.",
    "Running Product Builders and Demo Day.",
    "Building trust-safe monetization around real community value.",
    "Learning and teaching n8n through real community automation projects.",
  ],
};

/* -------------------------------------------------------------------------- */
/* Speaking & events                                                          */
/* -------------------------------------------------------------------------- */

export const speaking = {
  heading: "Speaking & events.",
  intro:
    "I host and join sessions on community building, AI tooling, and automation. Links are added as events are confirmed.",
  items: [
    {
      title: "Tech Immigrants live sessions",
      detail: "Regular community interviews and AMAs.",
      href: "https://www.youtube.com/@TechImmigrants",
    },
    {
      title: "Product Builders Demo Day",
      detail: "Live showcase for community builders.",
      href: "#projects",
    },
    {
      title: "n8n automation events",
      detail: "Talks and workshops on practical automation.",
      href: "#contact",
    },
    {
      title: "Workshops & community talks",
      detail: "Invite me to speak with your community or team.",
      href: "#collaborate",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Collaboration                                                              */
/* -------------------------------------------------------------------------- */

export const collaboration = {
  heading: "Work with me.",
  intro:
    "I'm open to partnerships that create genuine value for the community. If that sounds like you, let's talk.",
  options: [
    "Partner with Tech Immigrants",
    "Sponsor useful community events",
    "Invite me for a workshop or talk",
    "Collaborate on open-source tools",
    "Advise Product Builders Demo Day",
    "Support immigrant tech talent",
    "Work on community intelligence / product strategy",
  ],
  trustNote:
    "I only collaborate with people and organizations that create real value for the community.",
  cta: { label: "Start a conversation", href: "#contact" },
};

/* -------------------------------------------------------------------------- */
/* Contact & socials                                                          */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's build something useful together.",
  intro:
    "Reach out about partnerships, collaboration, speaking, or anything community and product related. LinkedIn is the fastest way to reach me.",
  // No public email inbox is configured yet. Keep this false until an inbox
  // exists, then set it to true and fill in `email` to show a mailto button.
  emailPublished: false,
  email: "", // TODO: set a real, configured address before publishing it.
  // Primary way to get in touch while no public email is configured.
  primaryAction: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/saharpak/",
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saharpak/",
      handle: "linkedin.com/in/saharpak",
    },
    {
      label: "GitHub",
      href: "https://github.com/SaharPak",
      handle: "github.com/SaharPak",
    },
    // TODO: add X / Twitter once the real handle is confirmed.
    {
      label: "YouTube — Tech Immigrants",
      href: "https://www.youtube.com/@TechImmigrants",
      handle: "@TechImmigrants",
    },
    {
      label: "Tech Immigrants Telegram",
      href: "https://t.me/TwitterImmigrant",
      handle: "t.me/TwitterImmigrant",
    },
    {
      label: "Product Builders",
      href: "#projects",
      handle: "Demo Day & builder platform",
    },
  ] as SocialLink[],
};

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export const footer = {
  mission:
    "Community data, real problems, useful tools, trust-safe monetization, impact.",
  trustNote:
    "Insights are aggregate and anonymized. No personal community data is shared or sold.",
};
