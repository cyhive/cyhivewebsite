import pythonImg from './assets/courses/image1.png';
import mernImg from './assets/courses/image 2.png';
import javaImg from './assets/courses/image 3.png';
import frontendImg from './assets/courses/image 4.png';
import mobileImg from './assets/courses/image 5.png';
import uiuxImg from './assets/courses/image 6.png';
import graphicImg from './assets/courses/image 7.png';
import aboutImg from './assets/about-figma.png';
import serviceWebImg from './assets/service-web.png';
import serviceFrontendImg from './assets/service-frontend.png';
import serviceMobileImg from './assets/service-mobile.png';
import serviceAcademicImg from './assets/service-academic.png';
import serviceGraphicImg from './assets/service-graphic.png';
import internshipAiImg from './assets/internship-ai.png';
import internshipDataStructuresImg from './assets/internship-data-structures.png';
import internshipPythonImg from './assets/internship-python.png';
import internshipNetworkingImg from './assets/internship-networking.png';

export const aboutImage = aboutImg;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Internships', href: '#internships' },
  { label: 'Services', href: '#services' },
  { label: 'Our Works', href: '#/works' },
];

export type Module = { title: string; summary: string };
export type Project = { title: string; desc: string };

export type Course = {
  slug: string;
  title: string;
  tag: string;
  tags: string[];
  headline: string;
  desc: string;
  about: string;
  image: string;
  modules: Module[];
  projects: Project[];
};

export const courses: Course[] = [
  {
    slug: 'full-stack-python',
    title: 'Full Stack Python',
    tag: 'Backend + Frontend',
    tags: ['Python', 'Django', 'Flask', 'PostgreSQL'],
    headline: 'Build Powerful Web Applications with Python',
    desc: 'Master backend and frontend development using Python, Django/Flask, and modern web technologies to build scalable, production-ready applications.',
    about: 'This course takes you from Python fundamentals to building complete web applications — covering backend frameworks, databases, APIs, and frontend integration.',
    image: pythonImg,
    modules: [
      { title: 'Module 01 — Python Fundamentals', summary: 'Core Python programming concepts and syntax.' },
      { title: 'Module 02 — Web Framework — Django / Flask', summary: 'Building server-side web applications.' },
      { title: 'Module 03 — Databases & ORM', summary: 'Working with relational databases.' },
      { title: 'Module 04 — REST APIs', summary: 'Designing and building RESTful APIs.' },
      { title: 'Module 05 — Frontend Integration', summary: 'HTML, CSS, and JavaScript for frontend development.' },
      { title: 'Module 06 — Version Control & Deployment', summary: 'Collaborate with Git and deploy to production.' },
    ],
    projects: [
      { title: 'Blog Platform', desc: 'A full blog with authentication, rich-text posts, comments, and an admin dashboard built on Django.' },
      { title: 'E-commerce Backend', desc: 'A REST API for products, carts, and orders with PostgreSQL and secure payments integration.' },
      { title: 'Task Management App', desc: 'A Flask app for teams to create, assign, and track tasks with a clean, responsive interface.' },
    ],
  },
  {
    slug: 'mern-stack',
    title: 'MERN Stack',
    tag: 'Full Stack JS',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    headline: 'Full-Stack JavaScript from Database to UI',
    desc: 'Build modern, scalable web applications using MongoDB, Express.js, React, and Node.js — the complete JavaScript full-stack.',
    about: 'Learn to build end-to-end JavaScript applications, from designing APIs and data models to crafting interactive React interfaces.',
    image: mernImg,
    modules: [
      { title: 'Module 01 — JavaScript & Node.js', summary: 'Modern JavaScript and the Node runtime.' },
      { title: 'Module 02 — Express & REST APIs', summary: 'Build server-side APIs with Express.' },
      { title: 'Module 03 — MongoDB & Mongoose', summary: 'Model and query data in MongoDB.' },
      { title: 'Module 04 — React Fundamentals', summary: 'Components, state, and hooks.' },
      { title: 'Module 05 — Full-Stack Integration', summary: 'Connect React clients to Node APIs.' },
      { title: 'Module 06 — Auth, Git & Deployment', summary: 'Secure apps and ship to production.' },
    ],
    projects: [
      { title: 'Social Media App', desc: 'Posts, likes, comments, and user profiles with a React frontend and Node API.' },
      { title: 'Real-time Chat', desc: 'A messaging app with rooms and live updates backed by MongoDB.' },
      { title: 'Expense Tracker', desc: 'A dashboard to log, categorise, and visualise spending with secure login.' },
    ],
  },
  {
    slug: 'full-stack-java',
    title: 'Full Stack Java',
    tag: 'Enterprise Java',
    tags: ['Java', 'Spring Boot', 'SQL', 'Maven'],
    headline: 'Enterprise Web Development with Java',
    desc: 'Develop robust, enterprise-grade web applications with Java, Spring Boot, and modern frontend technologies.',
    about: 'This program covers Java fundamentals through Spring Boot, databases, APIs, and frontend integration for production-ready enterprise apps.',
    image: javaImg,
    modules: [
      { title: 'Module 01 — Java Fundamentals', summary: 'Core Java language and object-oriented design.' },
      { title: 'Module 02 — Spring Boot', summary: 'Build services with Spring Boot.' },
      { title: 'Module 03 — Databases & JPA', summary: 'Persist data with SQL and JPA.' },
      { title: 'Module 04 — REST APIs', summary: 'Design and secure enterprise APIs.' },
      { title: 'Module 05 — Frontend Integration', summary: 'Connect Java backends to modern UIs.' },
      { title: 'Module 06 — Build & Deployment', summary: 'Maven, Git, and production deployment.' },
    ],
    projects: [
      { title: 'Banking System', desc: 'Accounts, transfers, and transaction history built with Spring Boot and SQL.' },
      { title: 'Library Management', desc: 'Catalogue, borrowing, and member management with a REST API and web UI.' },
      { title: 'Inventory Service', desc: 'Stock tracking and reporting service with role-based access.' },
    ],
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    tag: 'HTML · CSS · JS',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    headline: 'Build Beautiful, Responsive Web Interfaces',
    desc: 'Master HTML, CSS, and JavaScript to create modern, accessible, and responsive web experiences.',
    about: 'Learn the building blocks of the web and how to craft interfaces that look sharp, load fast, and work on every screen.',
    image: frontendImg,
    modules: [
      { title: 'Module 01 — HTML Foundations', summary: 'Semantic markup and document structure.' },
      { title: 'Module 02 — CSS & Layout', summary: 'Flexbox, Grid, and visual design.' },
      { title: 'Module 03 — Responsive Design', summary: 'Mobile-first layouts and accessibility.' },
      { title: 'Module 04 — JavaScript Essentials', summary: 'DOM, events, and interactivity.' },
      { title: 'Module 05 — Modern Tooling', summary: 'Git, browsers, and component thinking.' },
      { title: 'Module 06 — Capstone Project', summary: 'Ship a complete frontend project.' },
    ],
    projects: [
      { title: 'Portfolio Website', desc: 'A responsive personal portfolio with smooth sections and a contact form.' },
      { title: 'Landing Page', desc: 'A polished product landing page built mobile-first and accessible.' },
      { title: 'Weather Dashboard', desc: 'An interactive app that fetches live weather data with JavaScript.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tag: 'iOS & Android',
    tags: ['React Native', 'Flutter', 'Firebase'],
    headline: 'Create Native and Cross-Platform Mobile Apps',
    desc: 'Build iOS and Android applications using React Native or Flutter, from UI design to deployment on app stores.',
    about: 'Go from mobile UI fundamentals to shipping cross-platform apps with navigation, APIs, and store-ready builds.',
    image: mobileImg,
    modules: [
      { title: 'Module 01 — Mobile UI Foundations', summary: 'Layouts, components, and platform patterns.' },
      { title: 'Module 02 — React Native / Flutter', summary: 'Build screens with a cross-platform stack.' },
      { title: 'Module 03 — Navigation & State', summary: 'Flows, data, and app architecture.' },
      { title: 'Module 04 — APIs & Firebase', summary: 'Connect apps to backend services.' },
      { title: 'Module 05 — Device Features', summary: 'Camera, storage, and notifications.' },
      { title: 'Module 06 — Store Deployment', summary: 'Prepare and publish to app stores.' },
    ],
    projects: [
      { title: 'Fitness Tracker', desc: 'Log workouts and track progress with charts and reminders.' },
      { title: 'Food Delivery UI', desc: 'A multi-screen ordering flow with navigation, cart, and checkout.' },
      { title: 'Notes App', desc: 'Offline-ready notes synced to Firebase with authentication.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tag: 'Figma · UX · UI',
    tags: ['Figma', 'UX', 'UI', 'Design Systems'],
    headline: 'Design Digital Experiences People Love',
    desc: 'Learn to design intuitive, user-friendly, and visually engaging digital experiences using industry-standard design tools and user-centered design principles.',
    about: 'Build a strong foundation in user interface and user experience design — from research and wireframes to high-fidelity prototypes in Figma.',
    image: uiuxImg,
    modules: [
      { title: 'Module 01 — Design Principles', summary: 'Visual hierarchy, type, and color.' },
      { title: 'Module 02 — User Research', summary: 'Understand users and define problems.' },
      { title: 'Module 03 — Wireframing', summary: 'Structure screens and user flows.' },
      { title: 'Module 04 — UI in Figma', summary: 'High-fidelity interface design.' },
      { title: 'Module 05 — Prototyping', summary: 'Interactive prototypes and testing.' },
      { title: 'Module 06 — Design Systems', summary: 'Reusable components and consistency.' },
    ],
    projects: [
      { title: 'Mobile App Redesign', desc: 'Research, wireframes, and a high-fidelity redesign of an existing app.' },
      { title: 'Dashboard UI', desc: 'A data-rich web dashboard with a reusable component library.' },
      { title: 'Design System', desc: 'Tokens, components, and documentation for a consistent product UI.' },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    tag: 'Visual Design',
    tags: ['Photoshop', 'Illustrator', 'Canva', 'Typography'],
    headline: 'Craft Compelling Visual Communication',
    desc: 'Learn the principles of visual design, typography, branding, and digital media to create professional graphics for digital and print.',
    about: 'Develop a practical graphic design skill set covering branding, layout, digital assets, and visual storytelling.',
    image: graphicImg,
    modules: [
      { title: 'Module 01 — Design Fundamentals', summary: 'Color, type, composition, and contrast.' },
      { title: 'Module 02 — Brand Identity', summary: 'Logos, palettes, and brand systems.' },
      { title: 'Module 03 — Digital Assets', summary: 'Social, web, and marketing graphics.' },
      { title: 'Module 04 — Layout & Print', summary: 'Posters, brochures, and print-ready files.' },
      { title: 'Module 05 — Tool Workflows', summary: 'Photoshop, Illustrator, and Canva.' },
      { title: 'Module 06 — Portfolio Project', summary: 'A complete visual identity case study.' },
    ],
    projects: [
      { title: 'Brand Identity', desc: 'A logo, colour palette, and brand guidelines for a fictional business.' },
      { title: 'Social Media Campaign', desc: 'A cohesive set of posts, stories, and ad creatives.' },
      { title: 'Event Poster Series', desc: 'Print-ready posters and flyers using strong layout and typography.' },
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  subtitle: string;
  desc: string;
  about: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: '💻',
    subtitle: 'Full-Stack Solutions for the Modern Web',
    desc: 'End-to-end web development services — from concept and design to deployment and support.',
    about: 'We develop custom web applications tailored to your specific needs. Whether you need a business website, web platform, or complex web application, our team delivers clean code, optimized performance, and scalable architecture.',
    image: serviceWebImg,
    features: ['Custom web application development', 'Responsive and mobile-friendly design', 'Performance and SEO optimization', 'CMS integration', 'API development and integration', 'Ongoing maintenance and support'],
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    icon: '🎨',
    subtitle: 'Pixel-Perfect Interfaces That Perform',
    desc: 'Professional frontend development services focused on creating fast, accessible, and visually polished web interfaces.',
    about: 'Our frontend development service transforms designs into high-performance web interfaces. We build responsive, accessible, and interactive experiences using modern frameworks and best practices that delight users and perform at scale.',
    image: serviceFrontendImg,
    features: ['React, Vue, or vanilla JS development', 'Responsive and accessible UI', 'Performance optimization', 'Cross-browser compatibility', 'Design-to-code implementation', 'Component library development'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: '📱',
    subtitle: 'Native and Cross-Platform Mobile Solutions',
    desc: 'Mobile application development for iOS and Android — from concept to App Store launch.',
    about: 'We develop cross-platform and native mobile applications that deliver smooth, engaging user experiences on iOS and Android. From consumer apps to enterprise solutions, we build mobile products that your users will love.',
    image: serviceMobileImg,
    features: ['Cross-platform development (React Native / Flutter)', 'Native iOS and Android development', 'UI/UX design for mobile', 'Backend API integration', 'Push notifications and device APIs', 'App Store and Play Store submission'],
  },
  {
    slug: 'academic-projects',
    title: 'Academic Projects',
    icon: '🎓',
    subtitle: 'Technical Support for Academic Excellence',
    desc: 'Guidance and technical development support for academic projects across engineering and computer science disciplines.',
    about: 'We provide technical guidance and development support for academic projects including final-year projects, research implementations, and college assignments. Our support is focused on helping you understand and build, not just delivering a finished product.',
    image: serviceAcademicImg,
    features: ['Final-year project guidance', 'Technology selection and architecture', 'Implementation support', 'Documentation assistance', 'Testing and debugging support', 'Presentation preparation'],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: '✏️',
    subtitle: 'Visual Communication That Leaves an Impression',
    desc: 'Creative graphic design services including brand identity, digital assets, marketing materials, and social media graphics.',
    about: 'Our graphic design services help individuals, businesses, and organizations communicate visually. From logo design and brand identity to digital content and marketing materials, we craft visuals that are purposeful, consistent, and effective.',
    image: serviceGraphicImg,
    features: ['Logo and brand identity design', 'Social media graphics and templates', 'Marketing collateral design', 'Print-ready materials', 'Presentation design', 'Icon and illustration work'],
  },
];

export type Internship = {
  slug: string;
  title: string;
  icon: string;
  headline: string;
  desc: string;
  about: string;
  image: string;
  topics: string[];
  opportunities: string[];
};

export const internships: Internship[] = [
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    icon: '🤖',
    headline: 'Explore the Foundations of AI',
    desc: 'Gain practical exposure to artificial intelligence concepts, machine learning fundamentals, and real-world AI applications.',
    about: "This internship program introduces you to the exciting world of artificial intelligence. You'll explore machine learning concepts, work with data, and apply AI techniques to solve practical problems — building foundational skills for a career in AI and data science.",
    image: internshipAiImg,
    topics: ['Introduction to AI and ML', 'Data exploration and preprocessing', 'Supervised learning concepts', 'Neural network fundamentals', 'Python for AI (NumPy, Pandas)', 'Model evaluation basics', 'AI use cases and applications', 'Responsible AI principles'],
    opportunities: ['Work on structured AI learning tasks', 'Apply ML concepts to sample datasets', 'Build foundational projects using Python/ML libraries', 'Explore real-world AI problem statements'],
  },
  {
    slug: 'data-structures',
    title: 'Data Structures',
    icon: '🗂️',
    headline: 'Strengthen Your Algorithmic Thinking',
    desc: 'Build a strong foundation in data structures and algorithms — essential knowledge for software development and technical interviews.',
    about: "This program is designed to strengthen your understanding of core computer science concepts. You'll study and implement fundamental data structures, develop problem-solving skills, and practice applying algorithms to real challenges — knowledge that is the base of all software development.",
    image: internshipDataStructuresImg,
    topics: ['Arrays and Lists', 'Linked Lists', 'Stacks and queues', 'Trees and graphs', 'Sorting algorithms', 'Searching algorithms', 'Recursion and backtracking', 'Time and space complexity'],
    opportunities: ['Implement data structures from scratch', 'Practice problem solving with guided challenges', 'Analyze algorithm efficiency', 'Build computational thinking skills applicable across programming languages'],
  },
  {
    slug: 'python',
    title: 'Python',
    icon: '🐍',
    headline: 'Practical Python for Real-World Applications',
    desc: 'Deepen your Python skills through hands-on tasks covering scripting, automation, data handling, and application development.',
    about: "This internship program focuses on applying Python to practical, real-world scenarios. You'll go beyond syntax and work on automation scripts, data processing tasks, and small application projects — developing the practical Python proficiency that employers value.",
    image: internshipPythonImg,
    topics: ['Python best practices', 'File I/O and automation', 'Working with APIs', 'Data handling with Pandas', 'Regular expressions', 'Error handling and debugging', 'Virtual environments', 'Script deployment'],
    opportunities: ['Build automation scripts', 'Work on data processing tasks', 'Develop small Python applications', 'Practice debugging and code review'],
  },
  {
    slug: 'networking',
    title: 'Networking',
    icon: '🌐',
    headline: 'Understand the Foundation of Modern Networks',
    desc: 'Learn computer networking fundamentals — protocols, architecture, security, and infrastructure that power the connected world.',
    about: "This program provides a structured introduction to computer networking. You'll study how networks are designed, how data travels across them, and the protocols and security mechanisms that keep modern infrastructure running — building essential knowledge for IT and infrastructure careers.",
    image: internshipNetworkingImg,
    topics: ['OSI and TCP/IP models', 'IP addressing and subnetting', 'Routing and switching concepts', 'DNS, DHCP, and NAT', 'Wireless networking', 'Network security basics', 'Firewalls and VPNs', 'Network troubleshooting'],
    opportunities: ['Study real network configurations', 'Explore network simulation tools', 'Practice subnetting and addressing', 'Learn network troubleshooting approaches'],
  },
];

export const faqs = [
  {
    q: 'What programs does Cyhive offer?',
    a: 'Cyhive offers internship programs and technical training designed to help students and aspiring professionals develop practical, industry-relevant skills.',
  },
  {
    q: "Who can join Cyhive's internship programs?",
    a: 'Students, recent graduates, and aspiring professionals looking to build practical technical skills can join Cyhive internship programs.',
  },
  {
    q: 'Do I need prior experience to join an internship?',
    a: 'Prior experience is not required for many programs. Cyhive is designed to support learners at different skill levels with structured, guided learning.',
  },
  {
    q: 'How do I choose the right program for me?',
    a: 'Explore our courses and internship programs, then get in touch with CYHIVE. We can help you match a path to your goals and current skill level.',
  },
  {
    q: 'Can I contact Cyhive before applying?',
    a: 'Yes. Use the Get in Touch page to share your questions — we would love to hear from you before you apply.',
  },
];

export const interestOptions = [
  'Select an option',
  'Full Stack Python',
  'MERN Stack',
  'Full Stack Java',
  'Frontend Development',
  'Mobile App Development',
  'UI/UX Design',
  'Graphic Design',
  'Internship Program',
  'IT Services',
  'Other',
];
