import Wda from "@/public/project-images/wda.png";
import Academic from "@/public/project-images/academic-center.png";
import NarutoVerse from "@/public/project-images/narutoverse.png";
import Sms from "@/public/project-images/student_management_system.png";

export const projects = [
  // Last 2 projects are featured projects
  {
    image: Wda,
    title: "Win Dental Academy",
    description:
      "A comprehensive digital learning platform designed for dental professionals, featuring course catalog, managable organizations, courses and updated news with CRUD admin panel.",
    category: "Web Development",
    techStacks: ["Next.js", "Javascript", "Tailwind", "Shadcn", "Prisma"],
    isGitHub: false,
    isLiveDemo: true,
    upcoming: false,
    expectedCompletion: "",
    github: "",
    liveDemo: "https://windentalacademy.com/",
  },
  {
    image: Sms,
    title: "Student Management System",
    description:
      "An educational management platform with secure authentication, real-time student tracking, grade analytics, and administrative dashboard for streamlined institutional operations with various features.",
    category: "Web Development",
    techStacks: ["Next.js", "Typescript", "Shadcn", "Clerk", "Prisma"],
    isGitHub: true,
    isLiveDemo: false,
    upcoming: false,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/Student-Mangement-System",
    liveDemo: "",
  },
  {
    image: Academic,
    title: "Academic Center",
    description:
      "A modern e-learning ecosystem built with React and Laravel, featuring progressive course structures, interactive assignments.",
    category: "Web Development",
    techStacks: ["React", "Laravel"],
    isGitHub: true,
    isLiveDemo: false,
    upcoming: false,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/Academic-Center",
    liveDemo: "",
  },
  {
    image: NarutoVerse,
    title: "Narutoverse",
    description:
      "An immersive anime fan portal showcasing detailed character encyclopedias, story timeline visualizations, and interactive naruto anime world exploration with stunning visual design.",
    category: "Web",
    techStacks: ["Next.js", "Tailwind", "Shadcn"],
    isGitHub: false,
    isLiveDemo: true,
    upcoming: false,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/narutoverse",
    liveDemo: "https://narutoverse-kappa.vercel.app/",
  },

  {
    image: "",
    title: "Expense tracker",
    description:
      "A cross-platform mobile application for personal finance management, featuring intelligent expense categorization, visual spending analytics, and offline-capable SQLite data persistence.",
    category: "Web Development",
    techStacks: ["ReactNative", "Typescript", "Gluestack", "SQlite"],
    isGitHub: true,
    isLiveDemo: false,
    upcoming: true,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/Student-Mangement-System",
    liveDemo: "",
  },

  // Add more projects here...
];
