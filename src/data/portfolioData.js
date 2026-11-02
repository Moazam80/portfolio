export const personalInfo = {
  name: "Moazam Ali",
  role: "DevOps & Cloud Engineer",
  tagline: "Building scalable cloud architectures, containerized systems, and automated CI/CD pipelines on AWS.",
  location: "Multan, Pakistan",
  email: "moazamali517500@gmail.com",
  phone: "03267998589",
  cgpa: "3.65",
  university: "Bahauddin Zakariya University (BZU), Multan",
  degree: "Bachelor of Science in Computer Engineering",
  semester: "3rd Semester",
  github: "https://github.com/moazamali-dev",
  linkedin: "https://linkedin.com/in/moazam-ali-dev",
};

export const stats = [
  { label: "Academic CGPA", value: "3.65", detail: "Computer Engineering (BZU)" },
  { label: "AWS Services", value: "5+ Core", detail: "Amplify, S3, CloudFront, EC2, IAM" },
  { label: "Containerization", value: "Multi-Tier", detail: "Docker Compose & Microservices" },
  { label: "Deployment", value: "CI/CD", detail: "Automated GitHub Pipelines" },
];

export const skillsData = {
  "Cloud & AWS": [
    { name: "AWS Amplify Hosting", level: 90, desc: "Global continuous deployments & CDN integration" },
    { name: "Amazon S3", level: 90, desc: "High-durability object storage & static hosting" },
    { name: "Amazon CloudFront", level: 85, desc: "Global edge caching with low latency" },
    { name: "Amazon EC2", level: 85, desc: "Virtual instances & security groups" },
    { name: "AWS IAM", level: 80, desc: "Least-privilege role-based access control" },
  ],
  "Containers & Docker": [
    { name: "Docker & Compose", level: 90, desc: "Multi-container orchestration & custom Dockerfiles" },
    { name: "Multi-Stage Builds", level: 85, desc: "Optimizing container footprints and caching" },
    { name: "Network Isolation", level: 88, desc: "Private bridge networks for microservices" },
    { name: "Volume Persistence", level: 85, desc: "State management across container restarts" },
  ],
  "CI/CD & Automation": [
    { name: "CI/CD Pipelines", level: 85, desc: "Automated build, test, and release workflows" },
    { name: "Git & GitHub", level: 92, desc: "Version control & repository management" },
    { name: "Bash Scripting", level: 88, desc: "Automated monitoring & backup scripts" },
    { name: "Linux Administration", level: 90, desc: "Ubuntu server management & systemd" },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Containerized 3-Tier Enterprise Web Stack",
    category: "Docker & Infrastructure",
    badge: "Production Architecture",
    description: "Architected a full multi-tier web application decoupled into dedicated microservices: React Frontend, REST API Backend, and PostgreSQL with persistent volumes and isolated Docker networks.",
    tech: ["Docker", "Docker Compose", "Multi-Tier", "Linux", "Networking"],
    highlights: [
      "Built custom multi-stage Dockerfiles reducing image footprint by 45%",
      "Engineered bridge network isolation preventing public database exposure",
      "Configured automated container restart policies and environment-driven secrets",
    ],
    github: "https://github.com/moazamali-dev/containerized-3tier-architecture",
  },
  {
    id: 2,
    title: "AWS Cloud Portfolio & CI/CD Pipeline",
    category: "AWS Cloud",
    badge: "AWS Hackathon 2026",
    description: "Built and deployed an ultra-fast editorial cloud portfolio on AWS Amplify Hosting, Amazon S3, and Amazon CloudFront CDN with Git continuous deployment and interactive superpowers vault.",
    tech: ["AWS Amplify", "Amazon S3", "CloudFront CDN", "React", "Tailwind CSS"],
    highlights: [
      "100/100 Lighthouse performance through global CloudFront edge caching",
      "Automated CI/CD pipeline triggered on every GitHub commit",
      "Interactive Superpower Vault featuring web audio synthesis and confetti",
    ],
    github: "https://github.com/moazamali-dev/aws-student-portfolio-hackathon",
  },
  {
    id: 3,
    title: "Containerized 2-Tier Microservice Stack",
    category: "Docker & Infrastructure",
    badge: "Microservices",
    description: "Developed and orchestrated a 2-tier application with isolated client and service layers, automated health checks, and Docker Compose configuration for instant local bootstrapping.",
    tech: ["Docker Compose", "YAML", "Health Checks", "Linux Bash"],
    highlights: [
      "Configured Docker health checks to guarantee zero-downtime startup sequence",
      "Utilized volume mounting for state persistence across container teardowns",
      "Standardized development environment across multiple machines",
    ],
    github: "https://github.com/moazamali-dev/2tier-docker-microservice",
  },
  {
    id: 4,
    title: "Automated Linux Server Monitor & S3 Sync",
    category: "Automation & Cloud",
    badge: "Bash & AWS S3",
    description: "Production Bash automation script that monitors system metrics (CPU, RAM, Disk I/O), triggers alert thresholds, and securely syncs encrypted log backups to Amazon S3 via AWS CLI.",
    tech: ["Bash Scripting", "AWS CLI", "Amazon S3", "Linux Cron", "Systemd"],
    highlights: [
      "Automated hourly server telemetry and disk threshold notifications",
      "Integrated AWS CLI with IAM least-privilege credentials for S3 bucket uploads",
      "Scheduled via Linux Crontab with zero manual intervention required",
    ],
    github: "https://github.com/moazamali-dev/linux-system-monitor-s3-backup",
  },
];

export const superpowers = [
  {
    id: 1,
    title: "The Containerization Alchemist",
    subtitle: "Turns chaotic code into predictable, lightweight Docker containers",
    tag: "LEGENDARY",
    story: "Moazam can look at a complex multi-dependency application and package it into a multi-stage Docker container that builds in seconds and runs identically on any cloud environment.",
    quote: "\"If it doesn't run in Docker, it doesn't leave localhost.\"",
  },
  {
    id: 2,
    title: "The 2 AM Automation Reflex",
    subtitle: "Refuses to repeat repetitive manual operational tasks",
    tag: "EPIC",
    story: "Whenever a routine workflow requires more than two manual clicks or three bash commands, Moazam transforms it into an automated pipeline or cron-triggered script.",
    quote: "\"Automate early, sleep peacefully.\"",
  },
  {
    id: 3,
    title: "The 3.65 CGPA Discipline",
    subtitle: "Computer Engineering rigor meets hands-on cloud systems",
    tag: "ACADEMIC",
    story: "Balancing high academic honors in 3rd-semester Computer Engineering at BZU with deep self-driven mastery of AWS, Linux, and modern DevOps tooling.",
    quote: "\"Engineering is building systems that survive real-world scale.\"",
  },
  {
    id: 4,
    title: "AWS Cloud Native Vision",
    subtitle: "High availability, least-privilege security & global CDN edge",
    tag: "CLOUD-NATIVE",
    story: "From S3 object lifecycle rules to CloudFront global edge distributions and IAM security policies, Moazam builds with cloud-first resilience from day one.",
    quote: "\"Design for failure, and your architecture will never fail.\"",
  },
];
