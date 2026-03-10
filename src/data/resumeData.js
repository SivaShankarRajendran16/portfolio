export const personal = {
  name: 'Siva Shankar Rajendran',
  nameShort: 'SIVA SHANKAR',
  nameLast: 'RAJENDRAN',
  role: 'DevOps Engineer · Full Stack Developer',
  location: 'Chennai, India',
  phone: '+91 63829 20470',
  email: 'rajendransivashankar@gmail.com',
  linkedin: 'https://www.linkedin.com/in/siva-shankar-rajendran-419863303/',
  github: 'https://github.com/SivaShankarRajendran16/',
}

export const stats = [
  { target: 2, suffix: '+', label: 'Years Exp' },
  { target: 20, suffix: '+', label: 'Tech Skills' },
  { target: 4, suffix: '+', label: 'Projects' },
  { target: 3, suffix: '+', label: 'Certs' },
]

export const experience = [
  {
    company: 'Inteliclear',
    role: 'DevOps Engineer · US-based, Remote from Chennai',
    period: 'Dec 2024 – Present',
    bullets: [
      'Developed and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate build, test, and deployment processes across multiple environments.',
      'Created and managed Docker containers; deployed containerized apps using Kubernetes clusters for efficient scaling and orchestration.',
      'Utilized Terraform to provision and manage cloud infrastructure on AWS, enabling repeatable and consistent environments.',
      'Wrote Ansible playbooks for automating configuration management and server provisioning across dev and staging environments.',
      'Monitored infrastructure using Prometheus, Grafana, and AWS CloudWatch — ensuring high availability and performance.',
      'Implemented logging and alerting strategies to quickly identify and resolve system issues.',
    ],
  },
  {
    company: 'Zeal Zoft',
    role: 'Front-End Developer · Adyar, Chennai',
    period: 'Oct 2023 – Nov 2024',
    bullets: [
      'Developed full-stack web applications using Node.js, ReactJS, and modern Java frameworks to deliver scalable and maintainable solutions.',
      'Integrated AWS services and SQL/NoSQL databases to build robust, cloud-native applications with high availability.',
      'Focused on ReactJS front-end development implementing responsive UI components and seamless user experiences.',
      'Utilized Bootstrap and Material-UI to design modern interfaces including real-time chat and video call applications.',
      'Managed Azure subscriptions addressing security configurations and compliance requests to meet enterprise cloud policy standards.',
    ],
  },
]

export const education = {
  school: 'Anna University',
  degree: 'Bachelor of Engineering (B.E.) in Information Technology',
  location: 'Tamil Nadu, India',
  year: 'April 2023',
  gpa: '7.7 / 10',
}

export const skills = [
  { icon: '☁️', name: 'Cloud Platforms', pct: 90, tags: ['AWS', 'Azure', 'Google Cloud', 'CloudWatch', 'EC2', 'S3'] },
  { icon: '🐳', name: 'Containers & Orchestration', pct: 88, tags: ['Docker', 'Kubernetes', 'Helm', 'K8s Clusters'] },
  { icon: '⚙️', name: 'CI/CD & Automation', pct: 92, tags: ['Jenkins', 'GitHub Actions', 'Ansible', 'Terraform'] },
  { icon: '📊', name: 'Monitoring & Logging', pct: 85, tags: ['Prometheus', 'Grafana', 'CloudWatch', 'Alertmanager'] },
  { icon: '⚛️', name: 'Frontend Development', pct: 87, tags: ['React', 'HTML/CSS', 'Tailwind', 'Bootstrap', 'Material-UI'] },
  { icon: '🔧', name: 'Backend & Languages', pct: 83, tags: ['Node.js', 'Python', 'Java', 'Shell Script', 'Spring Boot'] },
  { icon: '🗄️', name: 'Databases', pct: 80, tags: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis'] },
  { icon: '🐧', name: 'Systems & Version Control', pct: 91, tags: ['Linux', 'Git', 'GitHub', 'Windows'] },
]

export const projects = [
  {
    num: '01',
    title: 'MONITORING & ALERTING STACK',
    desc: 'Deployed Prometheus with Airflow Prometheus Exporter collecting key ETL metrics like DAG duration, task failures, and scheduler status. Built Grafana dashboards and configured Alertmanager for instant notifications.',
    tags: ['Prometheus', 'Grafana', 'Airflow', 'Node Exporter', 'AWS EC2'],
  },
  {
    num: '02',
    title: 'REAL-TIME CHAT APPLICATION',
    desc: 'Built a WhatsApp-like messaging platform with group chats, file sharing, audio/video calls. Socket.io WebSockets, JWT auth, Redis caching, and REST APIs for scalable concurrent users.',
    tags: ['Socket.io', 'Node.js', 'JWT', 'Redis', 'REST API'],
  },
  {
    num: '03',
    title: 'TRADELOG — FUTURES JOURNAL',
    desc: 'Full-stack trading journal for futures traders. Features P&L analytics, equity curves, daily journals, and complete trade management built with React, Node.js and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Recharts'],
  },
  {
    num: '04',
    title: 'DEVOPS PIPELINE AUTOMATION',
    desc: 'End-to-end CI/CD pipeline automation using Jenkins and GitHub Actions. Terraform IaC for AWS, Ansible configuration management, Docker containerization and Kubernetes deployment.',
    tags: ['Jenkins', 'Terraform', 'Ansible', 'Docker', 'Kubernetes'],
  },
]

export const certifications = [
  { icon: '🏆', name: 'DevOps Course', org: 'GUVI · Completed July 2025' },
  { icon: '🌐', name: 'Web Development with HTML, CSS, JavaScript', org: 'Coursera · Completed Oct 2024' },
  { icon: '☸️', name: 'Certified Kubernetes Administrator (CKA)', org: 'Udemy Live Practice · Completed May 2025' },
  { icon: '🎓', name: 'B.E. Information Technology', org: 'Anna University · GPA 7.7/10 · April 2023' },
]

export const tickerItems = [
  'DevOps Engineer', 'AWS · Azure · GCP', 'Docker · Kubernetes · Terraform',
  'CI/CD · Jenkins · GitHub Actions', 'React · Node.js · PostgreSQL',
  'Prometheus · Grafana · CloudWatch', 'Anna University · B.E. IT · GPA 7.7',
  'Inteliclear · Zeal Zoft',
]
