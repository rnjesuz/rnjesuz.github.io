export const careerData = [
  {
    company: "Wellhub",
    roles: [
      {
        title: "Senior Software Engineer",
        date: "Aug 2024 - Present",
        description: `
          Strategic Planning and Management
          * Sprint breakdown
          * Prioritization
          * Evaluate success metrics
          * Orient and assist team-members in planning initiative

          Reporting and KPI analysis
          * Set up audit pipeline publishing events to data lake
          * Report account operations to create user timeline and improve CX analysis
          * Register user UI actions to analyse behaviour and UX
          * Interpret service faults and user demands
          * Detect system abuse and misuse

          Observability
          * Structure E2E tests
          * Smoke test critical components
          * Create code templates to automate monitor and alert provisioning

          Performance and Resilience
          * Improve response times by setting up caches on critical and high volume use cases
          * Introduce resiliency patterns to critical components and in communications to volatile services

          Tech improvements
          * Refactor APIs: make them restful; deprecate inconsistent use cases; unify and create consistency 
          * Improve security with OTP verification in account's contact operations
          * Enforce semantic-releases with automated version management
          * Integrated automated package-publishing tool with Ci/CD pipeline
        `.trim(),
        keywords: ["Management", "Strategy", "Mentorship", "Snowplow", "Snowcat", "Data lake", "Datadog", "Grafana", "Synthetic tests", "Playwright", "Memory cache", "Redis"],
      },
      {
        title: "Software Engineer",
        date: "Apr 2023 - Aug 2024",
        description: `
          - Maintain Authentication system  
          - Maintain Identity and Access Management system  
          - Plan workshops to improve team skills  
          - Onboard new recruits  
          - Document microservices' internal flows  
          - Create (and host) OpenAPI documentation  
          - Create (and host) AsyncAPI documentation  
          - Develop microservice to bridge user sessions and active devices, through push notification tokens  
          - Refactor and improve auditing and logging  
            * Integrate with company frameworks  
            * Refactor for improved accountability and searchability  
          - Enforce and improve pull request sanitation  
            * Automated checks  
            * Create standard practices  
            * Enforce code quality with Code Climate  
          - Automate dependency versioning  
          
          **Technologies Used:**  
          Languages: Go, Kotlin, Java  
          Persistence: Spring, Redis, DynamoDB, Metabase  
          Others: Kafka, Docker, Kubernetes, jUnit, Maven, Groovy, Datadog  
          Frameworks: Spring, Keycloak, Swagger  
          Server: Jetty, Tomcat  
          Deployment: AWS, GitHub Actions, ArgoCD  
          Dev Tools: IntelliJ IDEA, Git
        `.trim(),
        keywords: ["Kotlin", "Go", "Spring Security", "Kubernetes", "Functional Programming", "Spring Framework", "Backend Development", "Frontend Development", "Spring MVC", "Kafka", "CI/CD"],
      },
    ],
  },
  {
    company: "BJSS",
    roles: [
      {
        title: "Software Engineer",
        date: "Sep 2022 - Feb 2023",
        description: `
          Codebase migration from .NET to Go
          Updating development procedures to newer industry standards
          `.trim(),
        keywords: ["Go", "Agile Methodologies", "Solution Architecture", "MySQL", "Waterfall Project  Management", "CI/CD"],
      },
    ],
  },
  {
    company: "Premium Minds",
    roles: [
      {
        title: "Software Engineer",
        date: "Jun 2019 - Aug 2022",
        description: `
        Sofware Engineer:
          - Development and automation of processes in a multi-context ecosystem
          - DevOps
          - Integration with internal and external systems
          - Migration from a monolithic system to a micro-service environment
          Programming languages: Java, Python, Bash
          Persistence: JPA (Hibernate), PostgreSQL
          Frameworks: Jersey, Jooby, Guice, Flyway
          Other involved technologies: Kafka, Docker, Nomad, jUnit, Maven
          Server: Jetty, Tomcat
          Deployment: AWS, Terraform, Ansible
          Developer tools: IntelliJ IDEA, DataGrip, git
          
          Solution Architect:
          - Standardization for event-driven architecture
          - Scalable and future-proofed RESTful APIs
        `.trim(),
        keywords: ["AWS", "Maven", "Java", "PostgreSQL", "Docker", "Kafka", "CI/CD"],
      },
      {
        title: "Agile Coach",
        date: "Sep 2020 - Aug 2021",
        description: `
          Identification and removal of constraints hindering and delaying development cycle.
          Estimation and Planning - Dealing with uncertainty. Managing backlog debt.
        `.trim(),
        keywords: ["Agile Metjodologies"],
      },
    ],
  },
];
