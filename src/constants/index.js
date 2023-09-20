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
  ecomschool,
  codingacademy,
  hagymnasia,
  trebello,
  FitKit,
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
];

const courses = [
  {
    title: "Machine Learning with AI Developer",
    school: "Ecom School",
    icon: ecomschool,
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
    icon: codingacademy,
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
    icon: hagymnasia,
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
      "Vlad is a proficient React developer with strong communication skills, consistently delivering top-notch results through technical competence and effective collaboration.",
    name: "Alon Dai",
    designation: "Team Lead",
    company: "Coding Academy",
    image: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
  }
];

const projects = [
  {
    name: "Trebello",
    description:
      `Trebello simplifies team management. You can get started by clicking the "Get Started" button or using one of our templates. Create and manage vacation trip plans or streamline your team's office environment. The possibilities are endless.`,
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
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "websockets",
        color: "orange-text-gradient",
      },
    ],
    image: trebello,
    source_code_link_git: "https://github.com/BatalinVlad/Trebello",
    source_code_link: "https://trebello.netlify.app/",
  },
  {
    name: "FitKit",
    description: "Diet plans app that empowers you to effortlessly create personalized meal plans, all thanks to the innovative integration of the ChatGPT-3.5 API. With this unique tool, achieving your nutritional goals becomes both convenient and efficient.",
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
    image: FitKit,
    source_code_link_git: "https://github.com/BatalinVlad/FitKit",
    source_code_link: "https://fitkit-app.netlify.app/",
  }
];

export { services, technologies, courses, testimonials, projects };
