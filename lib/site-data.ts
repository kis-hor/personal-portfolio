export type Project = {
  title: string;
  description: string;
  impact?: string;
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
    description:
      "Developed a full ERP platform for small businesses with inventory, authentication, workflow automation, and executive dashboards to replace manual tracking.",
    impact: "Reduced repetitive ops work and improved reporting speed with centralized business data.",
    techStack: ["Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/MinetaKun/felt_erp/tree/kishorrr",
  },
  {
    title: "Bookmandu Library Management System",
    description:
      "Built a .NET library management system with cataloging, issue/return workflows, fines logic, and admin controls backed by PostgreSQL.",
    impact: "Improved record accuracy and reduced turnaround time for borrower operations.",
    techStack: [".NET", "PostgreSQL", "C#"],
    githubUrl: "https://github.com/kis-hor/Bookmandu",
  },
  {
    title: "Income Expense Tracker",
    description:
      "Created a finance tracker with transaction logs, category-level insights, budget charts, and export-ready reporting.",
    impact: "Enabled faster financial reviews and clearer month-to-month spending patterns.",
    techStack: [".NET", "C#", "CSV"],
    githubUrl: "https://github.com/MinetaKun/22067495-Kishor-GC-Income-Expense-Tracking-System",
  },
  {
    title: "Ecommerce Website (MVC Web App)",
    description:
      "Designed a Java MVC e-commerce web app with product listings, cart flow, account support, and checkout simulation.",
    impact: "Strengthened conversion flow design by improving product discovery and purchase-path structure.",
    techStack: ["Java MVC", "MySQL", "JSP"],
    githubUrl: "https://github.com/kis-hor/BubblesandWhirls",
  },
  {
    title: "ImageForge",
    description:
      "Built an image optimization and conversion platform for JPG, PNG, and WebP with quality controls and automated compression workflows.",
    impact: "Improved page speed potential and Core Web Vitals readiness for e-commerce and content-heavy sites.",
    techStack: ["Next.js", "TypeScript", "Node.js", "SEO"],
    githubUrl: "https://github.com/kis-hor/image-forge",
  },
  {
    title: "Felt & Yarn",
    description:
      "Led PrestaShop storefront execution across catalog quality, SEO content, and onsite merchandising for export-focused product lines.",
    impact: "Helped increase qualified organic traffic and conversion consistency through better listing and funnel quality.",
    techStack: ["PrestaShop", "Technical SEO", "Copywriting"],
    liveUrl: "https://feltandyarn.com",
    logo: "/fny-logo.jpg",
    screenshots: ["/felt-yarn-website.png", "/felt-yarn-etsy.png"],
  },
  {
    title: "Whiskers Home",
    description:
      "Optimized a Shopify store through structure updates, listing improvements, and conversion-oriented UX refinements.",
    impact: "Improved user journey clarity, product discoverability, and sales-readiness of landing and collection pages.",
    techStack: ["Shopify", "Liquid", "Analytics"],
    liveUrl: "https://whiskershome.com",
    logo: "/whiskers-home-logo.avif",
    screenshots: ["/whiskers-home-website.png"],
  },
  {
    title: "Go Get Nepal",
    description:
      "Enhanced a WordPress business site with SEO-ready architecture, improved content hierarchy, and performance-focused cleanup.",
    impact: "Increased crawl clarity, improved engagement signals, and supported steady organic visibility gains.",
    techStack: ["WordPress", "PHP", "Technical SEO"],
    liveUrl: "https://gogetnepal.com",
    logo: "/go-get-nepal-logo.webp",
    screenshots: ["/gogetnepal-website.png"],
  },
  {
    title: "Maata Banasthali Production Management System",
    description:
      "Owned and enhanced a production management system using Core PHP MVC and MySQL, including modules for reports, dashboards, and transaction workflows.",
    impact: "Handled PMS operations end-to-end, including petty cash tracking, algorithmic calculations, and management-ready reporting.",
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
