import Wda from "@/public/project-images/wda.png";
import Academic from "@/public/project-images/academic-center.png";

export const projects = [
  {
    image: Wda,
    title: "Win Dental Academy",
    description:
      "A landing page for Win Dental Academy, featuring modern interface that showcases dental courses, and organizations. Built with Next.js and Shadcn for optimal performance and responsive design across all devices.",
    category: "Web Development", // Category
    techStacks: ["React", "Next.js", "Tailwind"],
    isGitHub: false,
    isLiveDemo: true,
    github: "",
    liveDemo: "https://windentalacademy.com/",
  },
  {
    image: Academic,
    title: "Academic Center",
    description:
      "An E-learning project with responsive design that includes courses and user interactions. Built with React.js, Laravel and some other libs for better performance and responsive design across all devices.",
    category: "Web Development", // Category
    techStacks: ["React", "Laravel"],
    isGitHub: true,
    isLiveDemo: false,
    github: "https://github.com/Thureinhtet99/Academic-Center",
    liveDemo: "",
  },

  // Add more projects here...
];
