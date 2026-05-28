export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  logo?: string;
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
      "Developed a comprehensive ERP platform for small businesses using Laravel, PHP, and MySQL with inventory management, authentication, dashboards, and process automation.",
    techStack: ["Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/MinetaKun/felt_erp/tree/kishorrr",
  },
  {
    title: "Bookmandu Library Management System",
    description:
      "Built a .NET-based library management application with book cataloging, borrowing and returns, fines calculation, and admin controls backed by PostgreSQL.",
    techStack: [".NET", "PostgreSQL", "C#"],
    githubUrl: "https://github.com/kis-hor/Bookmandu",
  },
  {
    title: "Income Expense Tracker",
    description:
      "Created a .NET personal finance app for transaction logging, expense categories, reports, and budget charts with CSV-backed persistence.",
    techStack: [".NET", "C#", "CSV"],
    githubUrl: "https://github.com/MinetaKun/22067495-Kishor-GC-Income-Expense-Tracking-System",
  },
  {
    title: "Ecommerce Website (MVC Web App)",
    description:
      "Designed a Java MVC e-commerce web app for washing machines with product listing, cart flow, account support, and payment integration simulation.",
    techStack: ["Java MVC", "MySQL", "JSP"],
    githubUrl: "https://github.com/kis-hor/BubblesandWhirls",
  },
  {
    title: "ImageForge",
    description:
      "Built an image optimization and conversion tool supporting JPG, PNG, and WebP with lossless compression for faster pages and better e-commerce performance.",
    techStack: ["Next.js", "TypeScript", "Node.js", "SEO"],
    githubUrl: "https://github.com/kis-hor/image-forge",
  },
  {
    title: "Felt & Yarn",
    description:
      "E-commerce execution and improvements for a PrestaShop-based storefront with operational and merchandising support.",
    techStack: ["PrestaShop", "Technical SEO", "Copywriting"],
    liveUrl: "https://feltandyarn.com",
    logo: "/fny-logo.jpg",
  },
  {
    title: "Whiskers Home",
    description:
      "Shopify store optimization focused on product discoverability, listing quality, and conversion-friendly storefront updates.",
    techStack: ["Shopify", "Liquid", "Analytics"],
    liveUrl: "https://whiskershome.com",
    logo: "/whiskers-home-logo.avif",
  },
  {
    title: "Go Get Nepal",
    description:
      "WordPress website enhancements with content structure improvements, SEO setup, and practical speed optimization.",
    techStack: ["WordPress", "PHP", "Technical SEO"],
    liveUrl: "https://gogetnepal.com",
    logo: "/go-get-nepal-logo.webp",
  },
  {
    title: "Maata Banasthali Production Management System",
    description:
      "Refactored and enhanced an internal production management system using MVC with PHP and MySQL to improve maintainability and scalability.",
    techStack: ["PHP", "MySQL", "MVC"],
    githubUrl: "https://github.com/kis-hor/maata_banasthali_pms",
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
