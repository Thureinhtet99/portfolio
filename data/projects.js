import Wda from "@/public/project-images/wda.png";
import Academic from "@/public/project-images/academic-center.png";
import NarutoVerse from "@/public/project-images/narutoverse.png";
import SMS from "@/public/project-images/student_management_system.png";

export const projects = [
  {
    image: Wda,
    title: "Win Dental Academy",
    description:
      "A landing page for Win Dental Academy, featuring modern interface that showcases dental courses, and organizations.",
    category: "Web Development",
    techStacks: ["Next.js", "Tailwind", "Shadcn"],
    isGitHub: false,
    isLiveDemo: true,
    upcoming: false,
    expectedCompletion: "",
    github: "",
    liveDemo: "https://windentalacademy.com/",
  },
  {
    image: Academic,
    title: "Academic Center",
    description:
      "An E-learning project with responsive design that includes courses and user interactions.",
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
      "An immersive fan-based website dedicated to the Naruto universe, featuring character profiles, story arcs, and interactive elements.",
    category: "UI/UX Design",
    techStacks: ["Next.js", "Tailwind", "Shadcn"],
    isGitHub: true,
    isLiveDemo: true,
    upcoming: false,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/narutoverse",
    liveDemo: "https://narutoverse-kappa.vercel.app/",
  },
  {
    image: SMS,
    title: "Student Management System",
    description:
      "A comprehensive solution for educational institutions to streamline student data management, attendance tracking, grade reporting, and administrative tasks.",
    category: "Web Development",
    techStacks: ["Next.js", "Typescript", "Shadcn", "Clerk"],
    isGitHub: true,
    isLiveDemo: false,
    upcoming: false,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/Student-Mangement-System",
    liveDemo: "",
  },
  {
    image: "",
    title: "Expense tracker",
    description:
      "A simple and responsive expense tracker built with React Native, allowing users to manage and visualize their income and expenses.",
    // description: "",
    category: "Web Development",
    techStacks: ["React native", "Typescript", "Gluestack", "SQlite"],
    isGitHub: true,
    isLiveDemo: false,
    upcoming: true,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/Student-Mangement-System",
    liveDemo: "",
  },

  // Add more projects here...
];
