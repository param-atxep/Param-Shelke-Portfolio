export type Project = {
  slug: string;
  number: string;
  category: string;
  name: string;
  description: string;
  image?: string;
  tags: string[];
  status: "ACTIVE" | "BUILDING" | "EXPERIMENTAL";
  href?: string;
  github?: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "altfaze", number: "01", category: "FREELANCER MARKETPLACE", name: "ALTFaze",
    description: "A global freelancer marketplace connecting clients with verified talent through project-based hiring, collaboration, and templates.",
    image: "/project3altfaze.png", tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
    status: "ACTIVE", href: "https://altfaze.in/", github: "https://github.com/param-atxep/ALTFAZE",
    problem: "Traditional freelance workflows fragment discovery, communication, project management, and payment.",
    solution: "A unified workflow brings talent discovery, project execution, collaboration, and payment-oriented workflows into one system.",
    architecture: ["CLIENT", "NEXT.JS APP ROUTER", "SERVER ACTIONS / API", "DOMAIN SERVICES", "PRISMA", "POSTGRESQL"],
    features: ["Client / freelancer roles", "Authentication", "Project posting", "Hiring workflow", "Templates marketplace"],
  },
  {
    slug: "all-job-mitra", number: "02", category: "HYPERLOCAL SERVICES", name: "ALL JOB MITRA",
    description: "A hyperlocal service and job platform designed to connect customers, workers, and service providers through location-aware discovery.",
    image: "/project6alljobmitra.png", tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Maps", "Real-Time APIs"],
    status: "BUILDING", github: "https://github.com/param-atxep",
    problem: "Local service discovery is often fragmented across informal channels with little structure around matching and booking.",
    solution: "A location-aware service workflow gives customers and providers a clearer path from discovery to request.",
    architecture: ["CLIENT", "NEXT.JS", "LOCATION SERVICES", "SERVICE WORKFLOW", "POSTGRESQL"],
    features: ["Service discovery", "Worker-client matching", "Location-based services", "Service booking"],
  },
  {
    slug: "justkit", number: "03", category: "E-COMMERCE PLATFORM", name: "JustKit",
    description: "A modern e-commerce platform focused on electronics, gadgets, and men's lifestyle products.",
    image: "/project5justkit.png", tags: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary", "Payments", "Tailwind CSS"],
    status: "BUILDING", github: "https://github.com/param-atxep",
    problem: "A focused commerce experience needs dependable catalog, media, and payment foundations without unnecessary complexity.",
    solution: "A modular commerce foundation brings product discovery, media delivery, and checkout concerns into one maintainable application.",
    architecture: ["CLIENT", "NEXT.JS", "CATALOG", "CLOUDINARY", "PAYMENTS", "POSTGRESQL"],
    features: ["Product catalog", "Electronics and lifestyle discovery", "Media management", "Payment workflows"],
  },
  {
    slug: "reqguard", number: "04", category: "REQUIREMENT INTELLIGENCE", name: "ReqGuard",
    description: "An AI-powered requirement engineering workspace for detecting conflicts, ambiguity, duplication, and consistency issues.",
    image: "/project1reqguard.png", tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
    status: "ACTIVE", href: "https://reqgaurd.vercel.app/", github: "https://github.com/param-atxep/ReqGuard",
    problem: "Requirement documents can hide conflicts, ambiguity, duplicates, and consistency issues until late in the delivery cycle.",
    solution: "ReqGuard turns document analysis into a structured review workflow with explainable findings.",
    architecture: ["BROWSER", "NEXT.JS APP ROUTER", "ROUTE HANDLERS", "DOMAIN SERVICES", "PRISMA", "POSTGRESQL"],
    features: ["Document upload", "Requirement parsing", "Conflict detection", "Consistency review", "Explainable findings"],
  },
  {
    slug: "growthpilot-ai", number: "05", category: "AI RETAIL ANALYTICS", name: "GrowthPilot AI",
    description: "A production-oriented multi-tenant SaaS platform for retail merchants with AI-driven insights, inventory intelligence, and sales analytics.",
    image: "/project4growthai.png", tags: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "React", "Docker"],
    status: "EXPERIMENTAL", github: "https://github.com/param-atxep/Growth-AI-Full-Code",
    problem: "Retail teams need useful signals from inventory and sales data without stitching together disconnected tools.",
    solution: "GrowthPilot explores a multi-tenant analytics workspace where operational data can become focused, actionable insight.",
    architecture: ["REACT / VITE", "EXPRESS API", "TENANT SERVICES", "PRISMA", "POSTGRESQL", "AI PROVIDER"],
    features: ["Multi-tenant foundation", "Inventory intelligence", "Sales analytics", "AI-assisted insights"],
  },
  {
    slug: "opsmind-ai", number: "06", category: "AI / SOP INTELLIGENCE", name: "OpsMind AI",
    description: "A production-grade AI platform concept for uploading SOP PDFs and interacting with them through context-grounded responses and document search.",
    image: "/project2sopaiagent.png", tags: ["Next.js", "TypeScript", "Node.js", "MongoDB Atlas", "Gemini API"],
    status: "EXPERIMENTAL", github: "https://github.com/param-atxep",
    problem: "Operational knowledge is difficult to search when standard operating procedures are trapped in long documents.",
    solution: "OpsMind explores document-aware interaction that keeps responses grounded in uploaded operational context.",
    architecture: ["NEXT.JS", "DOCUMENT INGESTION", "VECTOR SEARCH", "CONTEXT LAYER", "MONGODB ATLAS"],
    features: ["PDF AI chat", "Document search", "Context-grounded responses", "Source-aware workflows"],
  },
];
