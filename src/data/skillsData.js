import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiAxios,
  SiReactrouter,
  SiBootstrap,
  SiGit,
  SiRedis,
  SiJsonwebtokens,
  SiFramer,
  SiJest,
  SiCloudinary,
} from "react-icons/si";

import { TbBrandFramerMotion, TbApi } from "react-icons/tb";
import { BsDatabase, BsImage, BsLightning, BsCpu   } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { FiLayers, FiImage, FiMail, FiActivity } from "react-icons/fi";
import { MdDesignServices } from "react-icons/md";

export const categories = [
  "all",
  "core",
  "frontend",
  "backend",
  "database",
  "tools",
  "concepts",
];

export const skills = [
  // Core
  { name: "HTML5", level: 90, category: "core", icon: SiHtml5 },
  { name: "CSS3", level: 85, category: "core", icon: FaCss3Alt },
  { name: "JavaScript (ES6+)", level: 90, category: "core", icon: SiJavascript },

  // Frontend
  { name: "React", level: 90, category: "frontend", icon: SiReact },
  { name: "Redux Toolkit", level: 95, category: "frontend", icon: SiRedux },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: SiTailwindcss },
  { name: "React Router", level: 85, category: "frontend", icon: SiReactrouter },
  { name: "Zustand", level: 60, category: "frontend", icon: BsDatabase }, // fallback
  { name: "GSAP", level: 85, category: "frontend", icon: TbBrandFramerMotion }, // fallback vibe
  { name: "Bootstrap 5", level: 75, category: "frontend", icon: SiBootstrap },
  { name: "Axios", level: 85, category: "frontend", icon: SiAxios },
  { name: "Framer Motion", level: 80, category: "frontend", icon: SiFramer },
  { name: "UI Libraries (Shadcn, Daisy)", level: 90, category: "frontend", icon: MdDesignServices },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: SiNodedotjs },
  { name: "Express.js", level: 85, category: "backend", icon: SiExpress },
  { name: "Multer (File Uploads)", level: 80, category: "backend", icon: FiImage },
  { name: "Nodemailer", level: 80, category: "backend", icon: FiMail },
  
  // Database
  { name: "MongoDB", level: 85, category: "database", icon: SiMongodb },
  { name: "Redis", level: 75, category: "database", icon: SiRedis },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: SiGit },
  { name: "GitHub", level: 95, category: "tools", icon: SiGithub },
  { name: "Postman", level: 90, category: "tools", icon: SiPostman },
  { name: "Firebase", level: 85, category: "tools", icon: SiFirebase },
  { name: "Photoshop", level: 80, category: "tools", icon: BsImage }, // fallback
  { name: "Redux DevTools", level: 90, category: "tools", icon: SiRedux },
  { name: "Jest", level: 70, category: "tools", icon: SiJest },
  { name: "ImageKit (Media Optimization)", level: 85, category: "tools", icon: FiImage },
  { name: "Cloudinary (Media Management)", level: 85, category: "tools", icon: SiCloudinary },
  
  // Concepts
  { name: "JWT Authentication", level: 90, category: "concepts", icon: SiJsonwebtokens },
  { name: "Clerk Authentication", level: 85, category: "concepts", icon: SiFirebase }, // fallback
  { name: "Server-Sent Events (SSE)", level: 75, category: "concepts", icon: BsDatabase },
  { name: "Stripe Integration", level: 75, category: "concepts", icon: TbApi },
  { name: "AI Integration (OpenAI APIs)", level: 85, category: "concepts", icon: BsCpu  },
  { name: "REST API Integration", level: 90, category: "concepts", icon: TbApi },
  { name: "Real-Time Systems", level: 80, category: "concepts", icon: FiActivity },
  { name: "Performance Optimization", level: 85, category: "concepts", icon: BsLightning },
  { name: "Microservices Architecture", level: 75, category: "concepts", icon: FiLayers },
  { name: "Deployment", level: 85, category: "concepts", icon: FiLayers },
];




// export const skills = [
//   // Frontend
//   { name: "HTML 5", level: 90, category: "frontend" },
//   { name: "CSS 3", level: 85, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 85, category: "frontend" },
//   { name: "Redux", level: 95, category: "frontend" },
//   { name: "GSAP", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Bootstrap 5", level: 80, category: "frontend" },
//   { name: "Shadcn/UI", level: 90, category: "frontend" },
//   { name: "Axios", level: 85, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 60, category: "backend" },
//   { name: "Express", level: 65, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "Firebase", level: 90, category: "backend" },
//   { name: "REST API Integration", level: 90, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Photoshop", level: 80, category: "tools" },
//   { name: "Postman", level: 80, category: "tools" },
//   { name: "Redux DevTools", level: 95, category: "tools" },
//   { name: "Jest", level: 85, category: "tools" },
//   { name: "Netlify/Vercel", level: 90, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];
