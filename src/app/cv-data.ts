export interface ContactLink {
  label: string;
  href?: string;
  icon: 'mail' | 'github' | 'linkedin' | 'phone' | 'location' | 'external';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  arrangement?: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  kind: string;
  period: string;
  summary: string;
  stack: string[];
  challenge: string;
  solution: string;
  takeaway: string;
  outcome?: string;
  href?: string;
  hrefLabel?: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const cvData = {
  name: 'Kareem Ezzat Gharib Ali',
  shortName: 'Kareem Ezzat',
  role: '.NET Backend Developer',
  location: 'Cairo, Egypt',
  email: 'kareemswilm9@gmail.com',
  phone: '+20 101 140 4848',
  summary:
    'I build REST APIs with C# and ASP.NET Core, and I have worked freelance since 2023. I studied Information Technology at Zagazig University, completed the ITI .NET track, and spent a year teaching programming at eYouth.',
  aboutNote:
    'At eYouth, I taught C#, backend development, and programming fundamentals, then helped trainees work through their code and assignments.',
  heroLine: '.NET backend developer in Cairo, building REST APIs with C# and ASP.NET Core.',
  links: {
    github: 'https://github.com/kareem18012002',
    linkedin: 'https://linkedin.com/in/kareem-swilm-26b21b227',
    portfolio: 'https://kareem18012002.github.io/portfolio-KareemSwilm/',
    electroMart: 'https://github.com/kareem18012002/ElectroMart'
  },
  contacts: [
    { label: 'Email', href: 'mailto:kareemswilm9@gmail.com', icon: 'mail' },
    { label: 'GitHub', href: 'https://github.com/kareem18012002', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kareem-swilm-26b21b227', icon: 'linkedin' },
    { label: 'Phone', href: 'tel:+201011404848', icon: 'phone' },
    { label: 'Location', icon: 'location' }
  ] satisfies ContactLink[],
  experience: [
    {
      role: 'Backend .NET Developer',
      organization: 'Freelance, Self-Employed',
      arrangement: 'Freelance',
      period: '2023 — Present',
      highlights: [
        'Designed, developed, and deployed 3+ production-ready RESTful APIs using ASP.NET Core and C# for real-world use cases.',
        'Applied Clean Architecture, Repository Pattern, Unit of Work, and SOLID principles to keep codebases maintainable and scalable.',
        'Secured APIs with JWT authentication and role-based authorization across 3+ user roles.',
        'Reduced API response time by 40% and improved throughput by 35% through caching, async programming, and query optimization.',
        'Deployed applications to IIS using Web Deploy with a zero-downtime configuration.',
        'Collaborated with mobile developers to integrate backend APIs with Firebase and real-time features.'
      ]
    },
    {
      role: 'Programming Instructor',
      organization: 'eYouth',
      period: '2025',
      highlights: [
        'Delivered training on C#, backend development, and programming fundamentals to students and beginners as part of a one-year program.',
        'Reviewed trainees’ code and provided hands-on technical support during practical projects and assignments.'
      ]
    }
  ] satisfies ExperienceItem[],
  projects: [
    {
      name: 'ElectroMart',
      kind: 'E-commerce REST API',
      period: '2024 — Present',
      summary: 'A production e-commerce backend, built and deployed as the sole backend developer.',
      stack: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'IIS', 'Web Deploy'],
      challenge: 'Reduce response time on a production e-commerce API.',
      solution: 'Implemented caching strategies, including in-memory and response caching, alongside async programming and query optimization.',
      takeaway: 'Caching was one part of the fix; async work and query optimization were part of the same effort.',
      outcome: '40% faster API response time; 35% higher throughput; 20+ CRUD endpoints; 5+ entity relationships; 10+ relational tables.',
      href: 'https://github.com/kareem18012002/ElectroMart',
      hrefLabel: 'View on GitHub'
    },
    {
      name: 'Course Management API',
      kind: 'REST API',
      period: '2023 — 2024',
      summary: 'A course management API organized around Clean Architecture and consistent endpoint behavior.',
      stack: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'JWT', 'AutoMapper', 'Swagger/OpenAPI'],
      challenge: 'Reduce coupling across 4+ layers and lower data-access boilerplate.',
      solution: 'Applied Clean Architecture, Repository and Unit of Work patterns, DTOs, AutoMapper, and global exception handling.',
      takeaway: 'The architecture choices were there to reduce coupling and repeated data-access code, not to add ceremony.',
      outcome: '50% less data-access boilerplate; consistent behavior across 15+ endpoints; authorization for 3+ roles.'
    },
    {
      name: 'Epilepsy Seizure Management Assistant',
      kind: 'Graduation project',
      period: '2023 — 2024',
      summary: 'A Flutter application integrating with backend APIs to support patients, doctors, and caregivers.',
      stack: ['Flutter', 'Firebase', 'MVVM', 'Cubit'],
      challenge: 'Support real-time communication and seizure-related recommendations across patient, doctor, and caregiver roles.',
      solution: 'Added Firebase real-time chat and push notifications, and integrated an ML model for seizure detection and recommendations.',
      takeaway: 'The app brought together a mobile client, real-time communication, and an ML model for different user roles.',
      outcome: 'Sub-second message delivery; graduated with High Distinction.'
    }
  ] satisfies ProjectItem[],
  skills: [
    { category: 'Backend', skills: ['C#', 'ASP.NET Core', 'Web API', 'MVC', 'Entity Framework Core', 'LINQ', 'AutoMapper', 'RESTful APIs', 'Clean Architecture', 'Layered Architecture', 'SOLID', 'Repository Pattern', 'Unit of Work', 'Dependency Injection', 'DTOs', 'Async/Await', 'Caching', 'Global exception handling'] },
    { category: 'Databases', skills: ['SQL Server', 'Relational database design', 'Code-First migrations', 'SQL'] },
    { category: 'DevOps / Tools', skills: ['Git', 'GitHub', 'Postman', 'Swagger/OpenAPI', 'IIS', 'Web Deploy', 'Firebase'] },
    { category: 'Security', skills: ['JWT Authentication', 'Role-Based Authorization'] },
    { category: 'Languages & Mobile', skills: ['Dart', 'Flutter'] }
  ] satisfies SkillGroup[],
  education: [
    { title: 'B.Sc. in Information Technology', institution: 'Zagazig University', period: '2020 — 2024', details: 'GPA: 3.45 / 4.0 · Graduated with High Distinction' },
    { title: 'ITI .NET Track (Professional Training)', institution: 'Information Technology Institute (ITI)', period: '2025' }
  ] satisfies EducationItem[],
  languages: ['Arabic (Native)', 'English (B2)'],
  softSkills: ['Problem solving', 'Analytical thinking', 'Code review', 'Teamwork', 'Working independently', 'Communication']
} as const;

export type CvData = typeof cvData;
