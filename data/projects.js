import Wda from "@/public/project-images/wda.png";
import Academic from "@/public/project-images/academic-center.png";
import NarutoVerse from "@/public/project-images/narutoverse.png";
import SMS from "@/public/project-images/student_management_system.png";

export const projects = [
  {
    image: Wda,
    title: "Win Dental Academy",
    description:
      "A landing page for Win Dental Academy, featuring modern interface that showcases dental courses, and organizations. Built with Next.js and Shadcn for optimal performance and responsive design across all devices.",
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
      "An E-learning project with responsive design that includes courses and user interactions. Built with React.js, Laravel and some other libs for better performance and responsive design across all devices.",
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
      "An immersive fan-based website dedicated to the Naruto universe, featuring character profiles, story arcs, and interactive elements. Designed with modern UI/UX principles brings the ninja world to life for fans with Api.",
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
      "A comprehensive solution for educational institutions to streamline student data management, attendance tracking, grade reporting, and administrative tasks. Features a clean, intuitive dashboard with real-time analytics and responsive design for access across all devices.",
    category: "Web Development",
    techStacks: ["Next.js", "Typescript", "Shadcn", "Clerk"],
    isGitHub: true,
    isLiveDemo: false,
    upcoming: false,
    expectedCompletion: "",
    github: "https://github.com/Thureinhtet99/Student-Mangement-System",
    liveDemo: "",
  },

  // Add more projects here...
];
