// Resume Configuration
// Edit this file to customize your resume

// Basic Information
export const personalInfo = {
  firstName: "Ajay",
  lastName: "TR",
  title: "Mainframe Engineer",
  avatar: "Ajaypic.jpg", // Place this file in src/assets
  summary:
    "Seasoned Mainframe Professional with specialized expertise in batch management and scheduling since 2021. Proficient in IBM's Operations Planning and Control (OPC), optimizing mission-critical batch workflows and ensuring seamless enterprise operations.",
  pdfFilename: "ajay-tr-resume.pdf" //
  // sdvsdvsd This will be used for both download and generation
};

// Contact Information
export const contactInfo = [
  { icon: "mdi-phone", title: "+91-9113526389", link: "tel:+919113526389" },
  {
    icon: "mdi-github",
    title: "Hokage-ajay",
    link: "https://github.com/Hokage-ajay"
  },
  {
    icon: "mdi-linkedin",
    title: "madhusoodhanan-km",
    link: "https://www.linkedin.com/in/madhusoodhanan-km"
  },
  {
    icon: "mdi-email",
    title: "ajaytr1247@gmail.com",
    link: "mailto:ajaytr1247@gmail.com"
  },
  { icon: "mdi-home", title: "Bengaluru, Karnataka, India" }
];

// Experience
export const experience = {
  sections: [
    {
      company: "Capgemini",
      summary:
        "Leading mainframe batch operations and infrastructure services for AXA Insurance Belgium, focusing on OPC (Tivoli Workload Scheduler) implementation and batch processing optimization.",
      positions: [
        {
          id: 1,
          title: "Mainframe Batch management",
          timeline: "July 2021 - Present",
          desc: "Spearheaded batch management operations, mentored team members, and established quality standards. Led transition of batch management from AXA-Tech Belgium. Conducted weekly SLA reviews and implemented strategic service improvements based on customer needs."
        },
        {
          id: 2,
          title: "Mainframe Batch management",
          timeline: "July 2021 - Present",
          desc: "Managed critical mainframe job streams using OPC, handled change management processes, and designed new batch streams. Created and maintained job dependencies across different platforms, performed SLA wellness checkpoints, and coordinated with support teams for incident resolution."
        },
        {
          id: 3,
          title: "Mainframe Batch management",
          timeline: "July 2021 - Present",
          desc: "Monitored mainframe batch job streams, performed incident analysis, and implemented recovery procedures. Created and managed Silva problem log tickets, processed workflow scheduling changes, and executed JCL overrides during recovery activities."
        }
      ]
    }
  ]
};

// Languages
export const languages = [
  {
    name: "English",
    proficiency: "Advanced"
  },
  {
    name: "Hindi",
    proficiency: "Proficient"
  },
  {
    name: "Tamil",
    proficiency: "Advanced"
  },
  {
    name: "Kannada",
    proficiency: "Advanced"
  }
];

// Skills
export const skills = {
  codingLanguages: [
    { title: "Javascript", icon: "mdi-laptop" },
    { title: "Typescript", icon: "mdi-server" },
    { title: "Python", icon: "mdi-database" },
    { title: "Shell", icon: "mdi-powershell" }
  ],
  frontend: [
    "Vue",
    "Vite",
    "React",
    "NextJS",
    "Nuxt",
    "MUI",
    "Cypress",
    "Playwright",
    "Web Components"
  ],
  backend: [
    "NodeJS",
    "Express",
    "NestJS",
    "FastAPI",
    "OpenAPI Spec",
    "WebSockets",
    "Serverless",
    "RDBMS",
    "Neo4j",
    "MongoDB",
    "NATS"
  ],
  devops: ["AWS", "CICD", "Docker", "Kubernetes", "HELM", "Terraform", "Jenkins", "k6", "Grafana"]
};

// Education
export const education = [
  {
    degree: "Bachelors in CS Engineering",
    grade: "CGPA 7.3/10",
    school: "CMRIT",
    from: "2015",
    to: "2019"
  },
  {
    degree: "PUC - PCMB",
    grade: "84%",
    school: "Christ Junior College",
    from: "2013",
    to: "2015"
  },
  {
    degree: "Secondary Education",
    grade: "92%",
    school: "St Thomas Public School",
    from: "",
    to: "2013"
  }
];

// Theme settings
export const themeSettings = {
  primaryColor: "#1867C0", // Default Vuetify primary color
  backgroundColor: "#fff",
  textColor: "#000",
  accentColor: "#1867C0"
};
