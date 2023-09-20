import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "education",
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
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fitness Coach",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const courses = [
  {
    title: "Machine Learning with AI Developer",
    school: "Ecom School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Python3, PyCharm IDE, Python OOP.",
      "Machine Learning, Artificial Intelligence,Supervised & Unsupervised Learning, Deep Learning, Reinforcement Learning",
      "Natural Language Processing (NLP)",
      "Data Science Fundamental (Libraries: Numpy Pandas, Matplotlib, Scipy, Scikit-learn, TensorFlow, Keras, Seaborn Data Visualizations)",
    ],
  },
  {
    title: "Full-Stack BootCamp",
    school: "Coding Academy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2022 - May 2023",
    points: [
      "Professional development completed in single page application with technology of REACT, HOOKS, REDUX, CONTEXT",
      "Designed pixle perfect pages with advanced scss + css",
      "Full operated server by nodeJS, express, mongoDB, mongoose, authentication jwt and more.",
      "Knowledge with GraphQL, WebSocket's",
      "hands on React native, Vue"
    ],
  },
  {
    title: "Fitness instructor",
    school: "HaGymnasia",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2020 - August 2020",
    points: [
      "Anatomy and Physiology: body's structure and function during exercise.",
      "Exercise Programming: Develop workout plans for various fitness levels.",
      "Group Instruction: Master effective class leadership and communication.:",
      "Safety Training: Know how to handle injuries and emergencies.",
      "Nutrition Basics: Understand fundamental dietary principles.",
      "Business Skills: marketing and client management if needed.",
      "Legal and Liability: Understand legal aspects and waivers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, courses, testimonials, projects };
