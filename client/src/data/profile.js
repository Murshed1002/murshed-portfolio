
export const profile = {
  name: "Golam Murshed",
  role: "Full-Stack Developer",
  location: "India",
  phone: "+91 76792 78495",
  email: "murshed394@gmail.com",
  linkedin: "https://www.linkedin.com/in/murshed1002",
  summary:
    "Full-stack developer with 3 years’ experience delivering scalable backend automation and intuitive frontends for clients like Abu Dhabi Executive Office and McDonald’s. Proficient in Java, Spring Boot, Node.js, React, and Camunda.",
  skills: [
    { group: "Languages & Frameworks", items: ["Java", "TypeScript", "JavaScript", "Node.js", "React.js", "Spring Boot"] },
    { group: "Databases & Tools", items: ["PostgreSQL", "Redis", "OpenSearch", "Git", "GitHub Actions", "Cypress"] },
    { group: "Concepts", items: ["Microservices", "REST APIs", "BPMN", "DMN", "OOPS", "DSA"] },
  ],
  experience: [
    {
      title: "Associate Software Development Engineer 2",
      company: "Publicis Sapient",
      period: "June 2022 – Present",
      bullets: [
        "Developed Camunda BPMN workflows and DMN models, reducing loan processing time by 30% for Abu Dhabi Executive Office.",
        "Built scalable Spring Boot microservices with REST APIs for backend operations.",
        "Engineered Node.js APIs and React components (TypeScript) for McDonald’s product management system.",
        "Enhanced frontend reliability via Cypress automation.",
        "Optimized performance with OpenSearch and Redis, cutting API times by 40%.",
        "Implemented robust error handling and retry logic to strengthen resilience.",
        "Supported dynamic backend schema handling across markets."
      ]
    }
  ],
  projects: [
    {
      name: "Digital Housing Platform",
      org: "Abu Dhabi Executive Office",
      duration: "16 months",
      description: "Workflow orchestration with Camunda BPMN + Spring Boot to automate loan lifecycle, with DMN rules for eligibility.",
      highlights: ["Loan lifecycle automation", "DMN-based decisioning", "Resilient retries/error handling"],
      stack: ["Camunda", "Spring Boot", "PostgreSQL", "OpenSearch"]
    },
    {
      name: "Archos (Value Creation Engine)",
      org: "McDonald’s",
      duration: "14 months",
      description: "Product data management across varying schemas via Node.js REST APIs and modular React components.",
      highlights: ["Schema-flexible APIs", "Componentized UI", "Cypress test automation", "Redis caching & OpenSearch indexing"],
      stack: ["Node.js", "React", "Redis", "OpenSearch"]
    }
  ],
  education: [
    {
      degree: "B.E. in Electronics & Telecommunication",
      school: "Jadavpur University",
      period: "2018 – 2022",
      gpa: "GPA: 7.98/10"
    },
    {
      degree: "Higher Secondary (12th), Science",
      school: "Salar E.Z.H.S School",
      period: "2016",
      gpa: "Marks: 72.2%"
    }
  ]
};
