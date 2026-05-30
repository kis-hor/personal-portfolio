export type Project = {
  title: string;
  category: "dev" | "cms";
  description: string;
  shortDescription?: string;
  impact?: string;
  overviewPoints?: string[];
  impactPoints?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  logo?: string;
  screenshots?: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const siteConfig = {
  name: "Kishor Bahadur Gharti Chhetri",
  title: "Full-Stack Developer | E-commerce Specialist | AI Enthusiast",
  description:
    "Portfolio of Kishor Bahadur Gharti Chhetri, a full-stack developer, e-commerce specialist, and AI enthusiast focused on fast, high-converting digital products.",
  url: "https://kishorgharti.np",
  email: "kishorbdrgc95@gmail.com",
  linkedIn: "https://www.linkedin.com/in/kishor-gc-74b380231/",
  github: "https://github.com/kis-hor/",
  upwork: "https://www.upwork.com/freelancers/~018ad80694b0cfd6f3",
  resume: "/kishor-gc-cv.pdf",
  heroImage: "/kishor-gc-coat-image.png",
  highlights: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Businesses Supported", value: "8+" },
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "REST APIs", "MySQL"],
  },
  {
    title: "CMS & E-commerce",
    skills: ["WordPress", "Shopify", "PrestaShop"],
  },
  {
    title: "AI",
    skills: ["OpenAI API basics", "Prompt engineering", "AI integrations"],
  },
  {
    title: "Growth & Marketing",
    skills: ["Technical SEO", "Backlinks", "Copywriting"],
  },
  {
    title: "Tools",
    skills: ["Git/GitHub", "VS Code", "Postman"],
  },
] as const;

export const projects: Project[] = [
  {
    title: "ERP System (Final Year Project)",
    category: "dev",
    description:
      "Developed a full ERP platform for small businesses with inventory, authentication, workflow automation, and executive dashboards to replace manual tracking.",
    shortDescription: "ERP platform with inventory, auth, automation, and dashboards.",
    impact: "Reduced repetitive ops work and improved reporting speed with centralized business data.",
    overviewPoints: [
      "Built inventory, user-auth, and workflow automation modules in Laravel.",
      "Created role-aware dashboards for management-level visibility.",
      "Replaced manual tracking with centralized digital operations.",
    ],
    impactPoints: [
      "Reduced repetitive operational tasks through process automation.",
      "Improved reporting turnaround with structured dashboard views.",
      "Increased data accuracy by moving from manual sheets to one system.",
    ],
    techStack: ["Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/MinetaKun/felt_erp/tree/kishorrr",
  },
  {
    title: "Bookmandu Library Management System",
    category: "dev",
    description:
      "Built a .NET library management system with cataloging, issue/return workflows, fines logic, and admin controls backed by PostgreSQL.",
    shortDescription: "Library workflow platform for cataloging, issue/return, and fines.",
    impact: "Improved record accuracy and reduced turnaround time for borrower operations.",
    overviewPoints: [
      "Implemented cataloging, borrowing, returns, and fine-management flows.",
      "Built admin controls for record and member operations.",
      "Used PostgreSQL-backed data structure for reliable transactions.",
    ],
    impactPoints: [
      "Improved record consistency across library operations.",
      "Reduced service time for issue/return workflows.",
    ],
    techStack: [".NET", "PostgreSQL", "C#"],
    githubUrl: "https://github.com/kis-hor/Bookmandu",
  },
  {
    title: "Income Expense Tracker",
    category: "dev",
    description:
      "Created a finance tracker with transaction logs, category-level insights, budget charts, and export-ready reporting.",
    shortDescription: "Finance tracker with budgets, charts, and reporting workflows.",
    impact: "Enabled faster financial reviews and clearer month-to-month spending patterns.",
    overviewPoints: [
      "Built categorized transaction logging and budget tracking.",
      "Added report-ready summaries and chart-based trend views.",
      "Enabled export workflows for periodic financial checks.",
    ],
    impactPoints: [
      "Improved monthly financial visibility for faster decisions.",
      "Reduced manual reconciliation effort via structured reporting.",
    ],
    techStack: [".NET", "C#", "CSV"],
    githubUrl: "https://github.com/MinetaKun/22067495-Kishor-GC-Income-Expense-Tracking-System",
  },
  {
    title: "Ecommerce Website (MVC Web App)",
    category: "dev",
    description:
      "Designed a Java MVC e-commerce web app with product listings, cart flow, account support, and checkout simulation.",
    shortDescription: "Java MVC commerce app with listing, cart, and checkout flow.",
    impact: "Strengthened conversion flow design by improving product discovery and purchase-path structure.",
    overviewPoints: [
      "Developed product listing, cart, and account journey in Java MVC.",
      "Structured checkout simulation to model conversion path behavior.",
      "Integrated MySQL-backed catalog and user data layers.",
    ],
    impactPoints: [
      "Improved UX flow clarity from product view to checkout intent.",
      "Strengthened understanding of funnel bottlenecks in MVC commerce flows.",
    ],
    techStack: ["Java MVC", "MySQL", "JSP"],
    githubUrl: "https://github.com/kis-hor/BubblesandWhirls",
  },
  {
    title: "ImageForge",
    category: "dev",
    description:
      "Built an image optimization and conversion platform for JPG, PNG, and WebP with quality controls and automated compression workflows.",
    shortDescription: "Image optimization tool for speed, Core Web Vitals, and SEO readiness.",
    impact: "Improved page speed potential and Core Web Vitals readiness for e-commerce and content-heavy sites.",
    overviewPoints: [
      "Built JPG/PNG/WebP conversion with configurable compression control.",
      "Designed speed-focused image pipeline for web delivery use cases.",
      "Implemented developer-friendly flow for quick optimization cycles.",
    ],
    impactPoints: [
      "Improved Core Web Vitals readiness via lighter media payloads.",
      "Supported faster page loads and better user retention potential.",
      "Strengthened technical SEO performance foundation for media-heavy pages.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "SEO"],
    githubUrl: "https://github.com/kis-hor/image-forge",
  },
  {
    title: "Felt & Yarn",
    category: "cms",
    description:
      "Led PrestaShop storefront execution across catalog quality, SEO content, and onsite merchandising for export-focused product lines.",
    shortDescription: "PrestaShop and Etsy growth execution for product discovery and conversion.",
    impact: "Helped increase qualified organic traffic and conversion consistency through better listing and funnel quality.",
    overviewPoints: [
      "Managed PrestaShop storefront execution and catalog merchandising.",
      "Optimized product listings, metadata, and funnel copy for conversion.",
      "Aligned content structure with technical SEO and discoverability goals.",
      "Extended brand visibility through Etsy storefront optimization.",
    ],
    impactPoints: [
      "Increased qualified search visibility through SEO-focused listing updates.",
      "Improved conversion consistency by refining product and category pages.",
      "Supported revenue growth readiness with stronger merchandising execution.",
    ],
    techStack: ["PrestaShop", "Technical SEO", "Copywriting"],
    liveUrl: "https://feltandyarn.com",
    logo: "/fny-logo.jpg",
    screenshots: ["/felt-yarn-website.png", "/felt-yarn-etsy.png"],
  },
  {
    title: "Whiskers Home",
    category: "cms",
    description:
      "Optimized a Shopify store through structure updates, listing improvements, and conversion-oriented UX refinements.",
    shortDescription: "Shopify optimization for UX clarity, discoverability, and conversions.",
    impact: "Improved user journey clarity, product discoverability, and sales-readiness of landing and collection pages.",
    overviewPoints: [
      "Refined Shopify storefront structure and category-level navigation.",
      "Enhanced listing quality, product content, and UX hierarchy.",
      "Improved mobile usability and conversion-focused visual flow.",
    ],
    impactPoints: [
      "Increased product discoverability across collections and search.",
      "Improved conversion readiness through cleaner purchase pathways.",
      "Supported higher engagement with improved storefront clarity.",
    ],
    techStack: ["Shopify", "Liquid", "Analytics"],
    liveUrl: "https://whiskershome.com",
    logo: "/whiskers-home-logo.avif",
    screenshots: ["/whiskers-home-website.png"],
  },
  {
    title: "Go Get Nepal",
    category: "cms",
    description:
      "Enhanced a WordPress business site with SEO-ready architecture, improved content hierarchy, and performance-focused cleanup.",
    shortDescription: "WordPress structure and SEO improvements for better visibility.",
    impact: "Increased crawl clarity, improved engagement signals, and supported steady organic visibility gains.",
    overviewPoints: [
      "Enhanced WordPress site architecture and content hierarchy.",
      "Implemented on-page technical SEO and speed-focused cleanup.",
      "Improved listing and service-page organization for usability.",
    ],
    impactPoints: [
      "Improved crawl efficiency and technical indexability signals.",
      "Supported stable organic growth through better page structure.",
      "Strengthened user engagement by reducing friction in navigation.",
    ],
    techStack: ["WordPress", "PHP", "Technical SEO"],
    liveUrl: "https://gogetnepal.com",
    logo: "/go-get-nepal-logo.webp",
    screenshots: ["/gogetnepal-website.png"],
  },
  {
    title: "Maata Banasthali Production Management System",
    category: "dev",
    description:
      "Owned and enhanced a production management system using Core PHP MVC and MySQL, including modules for reports, dashboards, and transaction workflows.",
    shortDescription: "Core PHP MVC PMS with dashboards, reports, and petty cash workflows.",
    impact: "Handled PMS operations end-to-end, including petty cash tracking, algorithmic calculations, and management-ready reporting.",
    overviewPoints: [
      "Built and maintained Core PHP MVC modules across production lifecycle.",
      "Delivered dashboards, order tracking, and dispatch/QC visibility tools.",
      "Implemented petty cash, transaction logs, and algorithm-based calculations.",
      "Developed management-ready reports for operations and finance teams.",
    ],
    impactPoints: [
      "Improved operational visibility with real-time dashboard reporting.",
      "Reduced manual reconciliation by digitizing petty cash workflows.",
      "Strengthened decision-making with structured, export-ready reports.",
    ],
    techStack: ["PHP", "MySQL", "MVC"],
    githubUrl: "https://github.com/kis-hor/maata_banasthali_pms",
    screenshots: ["/maata-banasthali-pms.png"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "PHP Developer",
    company: "Felt and Yarn Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Nov 2023 - Present",
    responsibilities: [
      "Developed a production management system for two manufacturing factories using core PHP and MySQL",
      "Built a petty cash management system to manage daily expenses, balances, and approvals",
      "Implemented a self-assessment system to collect, store, and review employee performance data",
      "Designed dynamic forms, validation logic, and reporting views for internal systems",
      "Created role-based access control for admin and staff users across internal applications",
      "Integrated Excel-style reporting with import/export for operations and finance review",
      "Maintained and enhanced existing internal PHP applications based on business feedback",
      "Converted manual spreadsheet-based processes into structured web applications",
    ],
  },
  {
    role: "E-commerce Associate",
    company: "Felt and Yarn Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Nov 2023 - Present",
    responsibilities: [
      "Managed and optimized product listings across multiple platforms with focus on accuracy and SEO",
      "Updated titles, descriptions, keywords, variations, and pricing to improve visibility and conversions",
      "Analyzed sales, traffic, and performance data in Excel and Google Sheets for decisions",
      "Maintained bulk listings and category structures to streamline catalog management",
      "Coordinated order processing, inventory tracking, and listing updates to reduce delays",
      "Supported seasonal campaign execution by updating keywords, images, and promotional content",
      "Prepared structured operational and performance reports for management review",
      "Supported cross-functional teams with data cleanup, documentation, and workflow improvements",
    ],
  },
  {
    role: "Data Entry Clerk",
    company: "Felt and Yarn Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Oct 2022 - Oct 2023",
    responsibilities: [
      "Managed high-volume financial data entry in Excel and Google Sheets with strong accuracy",
      "Designed and maintained finance dashboards to track expenses, payments, and cash flow",
      "Built structured spreadsheet workflows to improve internal finance processes",
      "Assisted payroll by preparing salary sheets, attendance data, and payment calculations",
      "Prepared financial documents, reports, and internal records for finance operations",
      "Collaborated with finance team members to verify data and resolve discrepancies",
      "Improved reporting efficiency by automating calculations and standardizing formats",
    ],
  },
  {
    role: "E-commerce & Digital Growth Role",
    company: "Whisker's Home (E-commerce Project)",
    location: "Kathmandu, Nepal",
    period: "Project Engagement",
    responsibilities: [
      "Managed website performance including product listings, user flow, and conversion optimization",
      "Customized Shopify themes with Liquid to improve storefront structure and functionality",
      "Revamped website design and layout for better usability, branding, and customer experience",
      "Optimized mobile responsiveness to improve navigation across devices",
      "Implemented technical SEO including meta tags, keywords, image optimization, and linking",
      "Planned and optimized blog content to support organic traffic growth",
      "Monitored sales performance and customer behavior to identify improvement opportunities",
      "Improved product discoverability and site structure for better traffic and order volume",
      "Coordinated updates across content, products, and promotional pages with business goals",
    ],
  },
  {
    role: "Web & E-commerce Support / SEO Assistant",
    company: "GoGetNepal Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Project Engagement",
    responsibilities: [
      "Assisted in building and maintaining website structure for smooth functionality",
      "Managed product and service listings with proper categorization and formatting",
      "Supported website maintenance including content updates, bug fixes, and structure improvements",
      "Worked on technical SEO improvements including meta tags, keywords, and on-page updates",
      "Improved listing visibility and organization to enhance UX and search performance",
      "Supported platform-wide improvements for better performance and usability",
    ],
  },
];

export const services: Service[] = [
  {
    title: "Custom Web Development",
    description: "Business-focused web apps and websites built for performance, maintainability, and scale.",
    deliverables: [
      "Full-stack development with Next.js, PHP, Laravel, and MySQL",
      "MVC architecture planning and clean, maintainable code structure",
      "Internal tools, dashboards, and workflow automation systems",
    ],
  },
  {
    title: "E-commerce Growth & Optimization",
    description: "End-to-end CMS and e-commerce execution from setup to optimization and scale.",
    deliverables: [
      "Full Shopify, WordPress, and PrestaShop store setup and launch support",
      "Theme setup/customization, navigation structure, and app/tool integrations",
      "Product page and collection flow optimization for conversion",
      "Catalog structure, listing quality, and merchandising support",
      "Ongoing performance, UX, and conversion optimization cycles",
    ],
  },
  {
    title: "AI Copywriting & Content Workflows",
    description: "AI-assisted copywriting and content systems built for rankings, conversions, and consistent publishing.",
    deliverables: [
      "Keyword research, clustering, and search-intent mapping",
      "SEO product copywriting, landing page copy, and blog content creation",
      "AEO/GEO-ready content structuring for AI and answer engines",
      "Automated content workflows for briefs, drafting, optimization, and publishing",
      "Content refresh strategy to improve rankings and engagement over time",
    ],
  },
  {
    title: "SEO, AEO & GEO Optimization",
    description: "Visibility-focused optimization across search engines and AI-driven discovery channels.",
    deliverables: [
      "Technical SEO audits and on-page optimization",
      "AEO and GEO-aligned content structuring for answer engines",
      "Core Web Vitals and crawl-efficiency performance improvements",
    ],
  },
  {
    title: "Business Systems & Reporting",
    description: "Operational platforms that improve decisions through accurate data and clear reporting.",
    deliverables: [
      "PMS modules for orders, production, QC, and dispatch",
      "Petty cash, transaction tracking, and algorithm-based calculations",
      "Management-ready reports and KPI dashboards",
    ],
  },
];
