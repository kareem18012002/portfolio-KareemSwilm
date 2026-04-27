export const personalInfo = {
  name: 'Kareem Ezzat',
  role: 'Backend .NET Developer',
  location: 'Zagazig, Egypt',
  email: 'kareemswilm9@gmail.com',
  phone: '+20 101 140 4848',
  github: 'https://github.com/kareem18012002',
  linkedin: 'https://linkedin.com/in/kareem-swilm',
  bio: [
    "I'm a <strong>Backend .NET Developer</strong> based in Zagazig, Egypt — passionate about writing clean, maintainable code and architecting systems that scale.",
    "Fresh graduate with a <strong>B.Sc. in Information Technology</strong> from Zagazig University (GPA: 3.45/4.0) and currently sharpening my skills through the <strong>ITI .NET Track</strong>.",
    "My strength lies in translating business requirements into robust API architectures — applying <strong>SOLID principles</strong>, <strong>Clean Architecture</strong>, and industry-standard patterns to deliver performance-optimized solutions."
  ],
  highlights: ['Clean Architecture','RESTful APIs','JWT Security','IIS Deployment','Flutter Mobile','SQL Server'],
  stats: [
    { num: '18+', label: 'Apps Deployed' },
    { num: '40%', label: 'API Speed Boost' },
    { num: '3.45', label: 'GPA / 4.0' },
    { num: '1+', label: 'Year Experience' },
  ],
  codeProfile: {
    name: 'Kareem Ezzat Gharib',
    role: 'Backend .NET Developer',
    location: 'Zagazig, Egypt',
    experience: '1+ year',
    deployed_apps: 3,
    gpa: 3.45,
    languages: ['Arabic (Native)', 'English (B2)'],
    open_to_work: true
  }
}

export const skills = [
  {
    category: 'Backend',
    icon: '⬡',
    tags: ['C#', 'ASP.NET Core', 'Web API', 'MVC', 'Entity Framework Core', 'LINQ', 'RESTful APIs']
  },
  {
    category: 'Database',
    icon: '◈',
    tags: ['SQL Server', 'Relational DB Design', 'Code-First Migrations', 'Query Optimization']
  },
  {
    category: 'Architecture',
    icon: '◉',
    tags: ['Clean Architecture', 'Layered Architecture', 'SOLID Principles', 'Repository Pattern', 'Unit of Work', 'Dependency Injection']
  },
  {
    category: 'Security & Tools',
    icon: '◆',
    tags: ['JWT Authentication', 'Role-Based Authorization', 'Git & GitHub', 'Postman', 'Swagger / OpenAPI', 'IIS Deployment']
  },
  {
    category: 'Mobile & Cloud',
    icon: '◎',
    tags: ['Flutter', 'Dart', 'Firebase', 'MVVM', 'Cubit']
  },
  {
    category: 'Performance',
    icon: '▲',
    tags: ['Caching', 'AutoMapper', 'DTOs', 'Global Exception Handling', 'Async / Await', 'File Handling']
  }
]

export const projects = [
  {
    id: 'PROJECT_01',
    year: '2024 – PRESENT',
    title: 'ElectroMart',
    subtitle: 'E-Commerce REST API',
    badge: 'LIVE',
    badgeColor: 'green',
    description: 'Scalable e-commerce REST API with 20+ CRUD endpoints, secure image uploads, and static file serving. Deployed to IIS with zero-downtime configuration.',
    metrics: ['↓ 40% response time', '↑ 35% throughput', '20+ endpoints', '10+ DB tables'],
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'EF Core', 'In-Memory Cache', 'IIS'],
    github: 'https://github.com/kareem18012002/ElectroMart',
  },
  {
    id: 'PROJECT_02',
    year: '2023 – 2024',
    title: 'Course Management API',
    subtitle: 'Clean Architecture REST API',
    badge: null,
    description: 'Clean Architecture REST API with JWT authentication, role-based authorization for 3+ user roles, and full Swagger documentation across 15+ endpoints.',
    metrics: ['4+ architecture layers', '3+ user roles', '15+ endpoints', '↓ 50% boilerplate'],
    tech: ['ASP.NET Core', 'C#', 'JWT', 'AutoMapper', 'Repository Pattern', 'Swagger'],
    github: 'https://github.com/kareem18012002',
  },
  {
    id: 'PROJECT_03',
    year: '2023 – 2024',
    title: 'Epilepsy Seizure Assistant',
    subtitle: 'Graduation Project',
    badge: 'HIGH DISTINCTION',
    badgeColor: 'amber',
    description: 'Flutter mobile app for seizure management with real-time chat, push notifications via Firebase, and an integrated ML seizure detection model serving 3+ user roles.',
    metrics: ['3 user roles', '10+ screens', 'Sub-second delivery', 'ML integration'],
    tech: ['Flutter', 'Dart', 'Firebase', 'MVVM', 'Cubit', 'REST API'],
    github: 'https://github.com/kareem18012002',
  }
]

export const experience = [
  {
    period: '2023 — PRESENT',
    title: 'Backend .NET Developer',
    org: 'Self-Employed / Freelance',
    bullets: [
      'Designed, developed, and deployed 3+ production-ready RESTful APIs using ASP.NET Core and C#',
      'Delivered full backend solutions covering architecture design, database modeling, security, and IIS deployment',
      'Applied Clean Architecture, Repository Pattern, and SOLID principles across all projects for maintainability',
      'Collaborated with mobile developers on backend-mobile integration including Firebase and real-time features',
      'Improved system performance 35–40% through caching strategies, async programming, and query optimization'
    ]
  }
]

export const education = [
  {
    year: '2020 — 2024',
    degree: 'B.Sc. Information Technology',
    school: 'Zagazig University',
    badge: 'GPA: 3.45 / 4.0',
    note: 'Graduated with a solid foundation in software engineering, databases, and system design. Graduation project earned High Distinction.'
  },
  {
    year: '2025',
    degree: 'Professional Training — .NET Track',
    school: 'Information Technology Institute (ITI)',
    badge: 'Intensive Program',
    note: 'Completed intensive program covering ASP.NET Core, C#, SQL Server, and software engineering best practices including Clean Architecture and design patterns.'
  }
]

export const typewriterTexts = [
  'Building scalable REST APIs',
  'Clean Architecture advocate',
  'ASP.NET Core specialist',
  'IIS deployment expert',
  'Open to relocation — Dubai 🇦🇪'
]
