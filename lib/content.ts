// ---------------------------------------------------------------------------
// Portfolio content
// ---------------------------------------------------------------------------
// Single source of truth for the whole site. Edit values here and everything
// updates. Fields marked `// TODO:` are placeholders to confirm/fill in.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Aditya Rajaram",
  role: "Full-stack Developer",
  company: "Syntags Professional Services",
  product: "Invocreto",
  location: "Navi Mumbai, Maharashtra, India",
  tagline:
    "Full-stack developer building a multi-location inventory & billing SaaS end to end — from PostgreSQL schemas and payment integrations to the Next.js and Angular UIs on top.",
  bio: `Full-stack engineer building Invocreto — a multi-location inventory and billing SaaS — end to end at Syntags. I own core services from the data model up: tax-accurate GST reporting, payment integrations, a relational catalog architecture, and the microservices behind it, plus the Next.js and Angular front-ends that sit on top. I care about correctness where it matters most (money, taxes, inventory) and pragmatic architecture over complexity for its own sake. Currently leading a small team into backend development.`,
  email: "aditya.rajaram13@gmail.com",
  phone: "+91 98206 51625",
  resumeUrl: "/resume", // in-site resume page (printable to PDF)
  socials: {
    github: "https://github.com/AdityaRajaram13",
    linkedin: "https://www.linkedin.com/in/aditya-r-364a88248/",
    twitter: "",
  },
  stats: [
    { value: "3+ yrs", label: "Shipping full-stack production software" },
    { value: "Invocreto", label: "Inventory & billing SaaS owned end-to-end" },
    { value: "Team lead", label: "Leading backend dev & mentoring at Syntags" },
  ],
};

export type ExperienceGroup = {
  title: string;
  points: string[];
};

export type Experience = {
  role: string;
  company: string;
  product?: string;
  type?: string; // Full-time, Internship, etc.
  period: string;
  duration?: string;
  location?: string;
  summary?: string;
  groups?: ExperienceGroup[];
  skills?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-stack Developer",
    company: "Syntags Professional Services",
    product: "Invocreto",
    type: "Full-time · Team Lead",
    period: "Apr 2024 – Present",
    duration: "2 yrs 3 mos",
    location: "Navi Mumbai, Maharashtra, India · On-site",
    summary:
      "Building Invocreto, a multi-location inventory and billing SaaS, end to end — owning core services and leading a small team into backend development.",
    groups: [
      {
        title: "Core Development",
        points: [
          "Designed and implemented automated GST (Goods and Services Tax) reporting within a Node.js/Express backend, handling accurate tax computation and report generation for a multi-location billing system.",
          "Built a vector/embedding-based search system for HSN (Harmonized System Nomenclature) code matching, improving accuracy and speed of product-to-tax-code classification over traditional keyword lookup.",
          "Used Redis for caching across payment and high-traffic read paths to reduce response latency.",
        ],
      },
      {
        title: "Data Architecture & Catalog",
        points: [
          // NOTE: flagged [CONFIRM/EDIT] in your source notes — verify before publishing.
          "Led the migration of the core data layer from MongoDB to PostgreSQL (via Sequelize), moving to a relational model for complex joins across products, variants, and location-based inventory, and transactional integrity for billing data.",
          "Architected a Product & Variant catalog model separating variant-level data from location-specific pricing, using dual hasMany associations for price fallback logic without raw SQL.",
          "Built reusable, chainable ProductQueryBuilder and VariantQueryBuilder classes to standardize complex catalog queries.",
          "Audited and fixed 5 production bugs in the catalog/inventory service, including a silent pagination break and a GraphQL field-naming mismatch breaking category filters.",
          "Kept GraphQL (Apollo Server) for read/query operations only, with all mutations handled via REST.",
        ],
      },
      {
        title: "Infrastructure & DevOps",
        points: [
          "Architected a microservices system using RabbitMQ for asynchronous, decoupled inter-service communication.",
          "Containerized services with Docker; deployed initially on Kubernetes, then led a pragmatic migration to Docker Swarm once K8s overhead exceeded the product's actual scaling needs.",
        ],
      },
      {
        title: "Integrations & Frontend",
        points: [
          "Integrated the WhatsApp Business API so customers can generate invoices/proformas and place orders inside WhatsApp; built the email + WhatsApp notification services behind it.",
          "Integrated Razorpay's Partner API, letting client companies onboard their own Razorpay accounts for independent payment collection.",
          "Built a bank-statement reconciliation pipeline (Excel import, debit/credit reconciliation, XML output for accounting/ERP).",
          "Built and maintained Next.js apps (SSR, reusable components, SEO) and led an Angular upgrade (v19 → v22) across three releases, adopting Signal Forms and zoneless change detection.",
        ],
      },
      {
        title: "Leadership",
        points: [
          "Leading backend development for the company's kiosk product line, owning the full backend implementation.",
          "Designed and delivered a structured backend learning curriculum to transition manual QA testers into backend development roles.",
        ],
      },
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Unipolar Technologies Pvt. Ltd.",
    type: "Full-time",
    period: "Aug 2023 – Apr 2024",
    duration: "9 mos",
    location: "Navi Mumbai, Maharashtra, India · On-site",
    summary:
      "Built and shipped full-stack features across the product, working primarily in the MERN stack.",
    // TODO: refine this skill list — LinkedIn lists \"MongoDB, Node.js and +6 skills\".
    skills: ["MongoDB", "Node.js", "Express", "React", "JavaScript", "REST APIs"],
  },
  {
    role: "Software Engineer",
    company: "Unipolar Technologies Pvt. Ltd.",
    type: "Internship",
    period: "Feb 2023 – Jul 2023",
    duration: "6 mos",
    location: "Navi Mumbai, Maharashtra, India · On-site",
    summary:
      "First professional role — contributed to web application features and learned production engineering practices.",
    // TODO: refine — LinkedIn lists \"JavaScript, MongoDB and +5 skills\".
    skills: ["JavaScript", "MongoDB", "Node.js", "HTML & CSS", "Git"],
  },
  {
    role: "MIS Head",
    company: "Alegria — The Festival of Joy",
    type: "Leadership",
    period: "Oct 2019 – Mar 2021",
    duration: "1 yr 6 mos",
    location: "Navi Mumbai · On-site",
    summary:
      "Led the MIS team for Alegria — one of India's biggest college festivals, held at Pillai College, New Panvel — coordinating data and operations across the event.",
    skills: ["Team leadership", "MIS", "Operations"],
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Angular", "Server-side rendering", "HTML & CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "GraphQL (Apollo)", "REST APIs", "RabbitMQ"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "Sequelize", "MongoDB", "Redis", "Vector / Embedding search"],
  },
  {
    title: "Infra & DevOps",
    skills: ["Docker", "Docker Swarm", "Kubernetes", "Microservices"],
  },
  {
    title: "Integrations",
    skills: ["Razorpay Partner API", "WhatsApp Business API", "GST / Tax reporting", "ERP / Bank reconciliation"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  link?: string;
  repo?: string;
};

// Derived from real work on Invocreto. Edit blurbs, add links, or swap in side projects.
export const projects: Project[] = [
  {
    title: "gst-reporting-engine",
    blurb:
      "Automated Goods & Services Tax computation and report generation for a multi-location billing system — accurate tax math and compliant outputs built into the backend.",
    tags: ["Node.js", "Express", "PostgreSQL", "Tax"],
  },
  {
    title: "hsn-vector-search",
    blurb:
      "Embedding-based search matching products to HSN tax codes, replacing brittle keyword lookup with semantic matching for higher accuracy and speed.",
    tags: ["Vector search", "Embeddings", "Node.js"],
  },
  {
    title: "whatsapp-commerce",
    blurb:
      "Let customers generate invoices, create proformas, and place orders directly inside WhatsApp via the Business API, with email + WhatsApp notification services behind it.",
    tags: ["WhatsApp API", "Notifications", "Integrations"],
  },
  {
    title: "bank-reconciliation",
    blurb:
      "Parses and imports Excel bank statements, reconciles debits/credits against voucher types, and emits XML for downstream accounting/ERP systems.",
    tags: ["Data pipeline", "ERP", "XML"],
  },
  {
    title: "catalog-data-model",
    blurb:
      "A relational catalog architecture separating variant data from location-specific pricing, with chainable query-builder classes standardizing complex queries.",
    tags: ["PostgreSQL", "Sequelize", "Architecture"],
  },
  {
    title: "rabbitmq-microservices",
    blurb:
      "Asynchronous, decoupled inter-service communication via RabbitMQ, containerized with Docker and deployed on Docker Swarm after a pragmatic migration off Kubernetes.",
    tags: ["RabbitMQ", "Docker Swarm", "Microservices"],
  },
];

// A short how-to write-up, rendered as a terminal "doc" section. Demonstrates
// the WhatsApp Flows integration pattern behind Invocreto's in-chat ordering.
export const whatsappFlowGuide = {
  title: "Using WhatsApp Flows via the Meta Business API",
  intro:
    "How interactive WhatsApp Flows are built and wired into the WhatsApp Cloud API — the pattern behind Invocreto's in-chat invoicing and ordering.",
  steps: [
    {
      cmd: "build & publish the flow",
      text: "Create the Flow in WhatsApp Manager (or via the Flows API): design the screens from components — TextInput, Dropdown, DatePicker, RadioButtons — as Flow JSON, then publish it to get a flow_id.",
    },
    {
      cmd: "register encryption keys",
      text: "Upload your business public key to Meta. For data-driven flows, the payloads exchanged between Meta and your endpoint are AES-encrypted and signed; you decrypt them with your private key.",
    },
    {
      cmd: "send the flow message",
      text: 'POST to /{phone-number-id}/messages with an interactive message of type "flow", passing the flow_id, a unique flow_token, the CTA label, and a flow_action — "navigate" for a static form, "data_exchange" for a dynamic, backend-driven one.',
    },
    {
      cmd: "serve dynamic screens (optional)",
      text: "When flow_action is data_exchange, Meta calls your registered Endpoint URI on each screen. Decrypt the request, then return the next screen plus its data so the form can branch on live backend state (e.g. real product/price lists).",
    },
    {
      cmd: "receive the response",
      text: "On submit, your webhook receives an interactive message of type nfm_reply containing response_json. Parse it to create the invoice/order, then reply with a confirmation message.",
    },
  ],
  snippet: `POST /v19.0/{phone-number-id}/messages
{
  "messaging_product": "whatsapp",
  "to": "<customer-wa-id>",
  "type": "interactive",
  "interactive": {
    "type": "flow",
    "body": { "text": "Tap below to create your invoice" },
    "action": {
      "name": "flow",
      "parameters": {
        "flow_message_version": "3",
        "flow_token": "<unique-token>",
        "flow_id": "<your-flow-id>",
        "flow_cta": "Create invoice",
        "flow_action": "data_exchange"
      }
    }
  }
}`,
};

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#flows", label: "flows" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];
