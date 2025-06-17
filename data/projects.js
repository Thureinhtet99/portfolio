import Wda from "@/public/project-images/wda.png";
import Academic from "@/public/project-images/academic-center.png";
import NarutoVerse from "@/public/project-images/narutoverse.png";

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
  {
    image: NarutoVerse,
    title: "Narutoverse",
    description:
      "An immersive fan-based website dedicated to the Naruto universe, featuring character profiles, story arcs, and interactive elements. Designed with modern UI/UX principles brings the ninja world to life for fans with Api.",
    category: "UI/UX Design", // Category
    techStacks: ["Next.js", "Tailwind", "Shadcn"],
    isGitHub: true,
    isLiveDemo: true,
    github: "https://github.com/Thureinhtet99/narutoverse",
    liveDemo: "https://narutoverse-kappa.vercel.app/",
  },

  // Add more projects here...
];
