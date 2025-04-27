// Resume Configuration
// Edit this file to customize your resume

// Basic Information
export const personalInfo = {
  firstName: "Ajay",
  lastName: "TR",
  title: "Mainframe Operations engineer",
  avatar: "Ajaypic.png", // Place this file in src/assets
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
    title: "Ajay TR",
    link: "https://www.linkedin.com/in/ajay-tr-9a94901b1"
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
          title: "Mainframe Batch management L2 Operations",
          timeline: "July 2021 - Present",
          desc: "Spearheaded L2 batch management operations, implementing permanent changes including application creation, Run cycle modifications, and LTP/Database updates based on client requirements.working on Prep job changes when required,Modifying changes in RFUs such as Epuration(purge/delete), Correction(fixing mistakes), and Entonnage(Adding elements) to the environment. working on Input Management(.IM) operations encompassing application archiving, JCL modifications, and dependency management. Demonstrated strong client relationship management through regular consultations and requirement analysis. Established comprehensive error handling protocols for failed jobs and created monthly performance dashboards, presenting trends and improvement strategies to stakeholders. Mentoring team members while maintaining quality standards and ensuring seamless transition of batch management from AXA-Tech Belgium."
        },
        {
          id: 2,
          title: "Mainframe Batch management",
          timeline: "July 2022 - April 2023",
          desc: "Managed critical mainframe operations for Belgium and Germany clients, successfully handling 800+ requests/incidents monthly. Orchestrated comprehensive batch scheduling and monitoring using OPC, including dataset operations (Proc member copy, Tape dataset copy), GDG base creation, and empty GDG dataset generation Creation. Expertly resolved various system abends (Space, SOC7, SOC4) and contention errors, while maintaining key field updates such as Anzhal values and dataset generations. Demonstrated proficiency in Special resource and Workstation management, consistently meeting SLA requirements through effective stakeholder communication and precise technical execution."
        },
        {
          id: 3,
          title: "Mainframe Batch Monitoring",
          timeline: "July 2021 - June 2022",
          desc: "worked in mainframe operations for GCC MESD AXA UK L1 project, managing comprehensive batch scheduling through Jobtrac and OPC. Orchestrated production job scheduling, FTP job handling, and server monitoring including IPL operations. Implemented robust error management protocols, maintained strict SLA compliance, and executed strategic JCL modifications for failed jobs to ensure continuous system availability."
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
    { title: "Mainframe", icon: "mdi-laptop" },
    { title: "Zos", icon: "mdi-server" },
    { title: "OPC", icon: "mdi-database" },
    { title: "Jobtrac", icon: "mdi-powershell" }
  ],
  os: ["Vue", "Vite", "React", "NextJS", "Nuxt", "MUI", "Cypress", "Playwright", "Web Components"],
  st: [
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
  admin: ["AWS", "CICD", "Docker", "Kubernetes", "HELM", "Terraform", "Jenkins", "k6", "Grafana"]
};

// Education
export const education = [
  {
    degree: "Bachelors in EC Engineering",
    grade: "CGPA 7.3/10",
    school: "SEACET",
    from: "2016",
    to: "2020"
  },
  {
    degree: "PUC - PCMC",
    grade: "66%",
    school: "Indiranagar composite PU college",
    from: "2014",
    to: "2016"
  },
  {
    degree: "Secondary Education",
    grade: "71%",
    school: "Kairalee Nilayam High School",
    from: "",
    to: "2014"
  }
];

// Theme settings
export const themeSettings = {
  primaryColor: "#1867C0", // Default Vuetify primary color
  backgroundColor: "#fff",
  textColor: "#000",
  accentColor: "#1867C0"
};
