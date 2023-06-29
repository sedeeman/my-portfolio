import {
  mobile,
  backend,
  devops,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  codegen,
  axiata,
  threejs,
  java,
  dart,
  kubernetes,
  kriyo,
  yas,
  clipper,
  fleethandler,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    langIcons: [javascript, html, css],
  },
  {
    title: "Mobile Developer",
    icon: mobile,
    langIcons: [dart],
  },
  {
    title: "Backend Developer",
    icon: backend,
    langIcons: [java],
  },
  {
    title: "DevOps Developer",
    icon: devops,
    langIcons: [git, docker, kubernetes],
  },
];

const technologies = [
  {
    name: "Spring",
    icon: backend,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Axiata Digital Labs",
    company_link: "https://www.axiatadigitallabs.com/",
    icon: axiata,
    iconBg: "#383E56",
    date: "Dec 2021 - Present",
    points: [
      "Led the technology migration from Oracle to a Java microservices architecture for Dialog CRM, a leading telecommunications provider, resulting in annual cost savings of $X through the elimination of Oracle licensing fees.",
      "Implemented an API gateway to streamline testing and improve system performance, achieving a 2x reduction in latency and increased throughput for the REST APIs.",
      "Optimized SQL queries, garbage collection, and introduced a distributed caching mechanism to enhance system efficiency and reduce response times.",
      "Implemented Test Driven Development (TDD) with comprehensive unit testing, achieving 80% code coverage, and integrated SonarQube and Jenkins pipelines for continuous code quality monitoring.",
      "Utilized Camunda's Workflow Engine to automate CLM workflows using BPMN, resulting in a 25% reduction in processing time and improved contract compliance.",
      "Employed an event-driven architecture to enable asynchronous communication between microservices, resulting in a 40% reduction in system latency for real-time data processing.",
      "Implemented a task queue system within the integration microservice to efficiently handle concurrent calls, improving processing efficiency by 50% and reducing response time by 20%.",
      "Designed a fault-tolerant system with retry mechanisms to enhance system availability and mitigate the impact of external service failures.",
      "Leveraged distributed tracing and monitoring tools to identify and resolve performance bottlenecks, resulting in a improvement in system response time and a 20% reduction in error rates.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CodeGen International",
    company_link: "https://codegen.co.uk/",
    icon: codegen,
    iconBg: "#383E56",
    date: "Jul 2019 - Dec 2021",
    points: [
      "Developed the Fleet Handler hybrid mobile app, contributing to a remarkable 40% increase in business growth for the TravelBox™ DMC Software, a leading SaaS product in the destination management industry.",
      "Implemented a self-onboarding feature through social login, enabling service providers to effortlessly join the DMC platform and offer their services.",
      "Integrated maps and navigation functionality for transport jobs, enabling drivers to efficiently navigate multi-pickup and drop-off points.",
      "Managed end-to-end job lifecycle for mobile resources, including job assignment, acceptance, rejection, start, and completion with detailed information.",
      "Enabled resources to switch between different service types, such as guides or drivers, providing flexibility in handling various job responsibilities.",
      "Optimized resource availability calendar, allowing easy visualization of job dates, leave dates, blackout dates, and close-out dates for service providers.",
      "Implemented real-time job notifications for resource registration, job management, and leave management, facilitating timely communication and coordination.",
      "Designed and implemented the Clipper Vacations web app, integrating ferry, hotel, and activity bookings into a user-friendly holiday package platform with one-way and round-trip options.",
      "Implemented customer-centric features, including ferry reservation with seat booking, localization, and seasonal promotions, driving a 20% increase in client sales and higher company profitability.",
      "Contributed to the development of FaceRec, a SaaS product enabling attendance marking through face recognition and ID verification, serving over 100,000 users.",
      "Implemented multi-tenancy authentication to enhance security and integrated Google's ML Kit for face detection.",
      "Implemented secure attendance tracking by incorporating person verification through face photo and employee ID card.",
      "Enabled real-time location updates for accurate attendance verification by utilizing the Fused Location Provider API, ensuring employees' presence within the designated work area using their own mobile devices",
      "Developed an offline attendance data synchronization feature to enhance application usability and reliability, leading to improved user satisfaction and increased sales by 40%.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "CodeGen International",
    company_link: "https://codegen.co.uk/",
    icon: codegen,
    iconBg: "#383E56",
    date: "Jul 2018 - Jul 2019",
    points: [
      "Contributed to the development of the hybrid HRM system, KRIYO, empowering organizations with flexible work arrangements and transparent processes, while fostering social engagements among users.",
      "Drove the development and growth of the SaaS product KRIYO, acquiring over 200,000 users within 2 years, while incorporating user feedback to continuously enhance features and ensure exceptional customer satisfaction.",
      "Implemented key functionalities such as LDAP authentication for profile management, project assignments, skill endorsements, leaves, appraisals with KPIs and NLP-powered employee search.",
      "Spearheaded the complete Talent Sourcing process, optimizing recruitment, onboarding, and offboarding procedures.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Outstanding developer who played a key role in delivering our web based vacation planning platform, earning praise from clients.",
    name: "M N M Shirazi",
    designation: "VP",
    company: "CodeGen"
  },
  {
    testimonial:
      "Skillful leader, instrumental in Oracle to Java microservices migration, achieving outstanding results for Dialog CRM",
    name: "M Isuru",
    designation: "Architect",
    company: "ADL"
  },
];

const projects = [
  {
    name: "YAS",
    description:
      "The web based platform allows users to plan their vacations, including booking hotels, with theme parks in Yas Island.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "RestApi",
        color: "pink-text-gradient",
      },
    ],
    image: yas,
    source_code_link: "https://www.yasisland.com/",
  },
  {
    name: "Clipper Vacations",
    description:
      "The web based platform that simplifies vacation planning by allowing users to book hotels, integrate ferry and activity bookings, and customize their trips with ease.",
    tags: [
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "Ajax",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Thymeleaf",
        color: "pink-text-gradient",
      },
    ],
    image: clipper,
    source_code_link: "https://www.clippervacations.com/",
  },
  {
    name: "KRIYO",
    description:
      "Kriyo is an advanced HRM platform that seamlessly integrates remote working, social engagement, and AI-driven analytics to optimize workforce productivity in hybrid work models.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Jss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
    ],
    image: kriyo,
    source_code_link: "https://codegen.kriyo.net/codegen/index.html",
  },
  {
    name: "Fleet Handler",
    description:
      "A cutting edge mobile application solution designed to revolutionize destination management for corporations, providing seamless resource management and enhanced service requests through its unified platform and seamless integration with the DMC web solution.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
      {
        name: "Ios",
        color: "blue-text-gradient",
      },
    ],
    image: fleethandler,
    source_code_link: "https://codegen.co.uk/travelbox-dmc/",
  },
];

export { services, technologies, experiences, testimonials, projects };
