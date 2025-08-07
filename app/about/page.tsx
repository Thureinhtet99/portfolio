"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Laptop,
  Database,
  Server,
  Globe,
  Smartphone,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaWindows,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiNpm,
  SiPnpm,
  SiLinux,
  SiUbuntu,
  SiPostman,
  SiMysql,
  SiReacthookform,
  SiZod,
  SiShadcnui,
  SiExpo,
} from "react-icons/si";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";

export default function About() {
  const currentYear = new Date().getFullYear();
  const startYear = 2023; // Year when you started development
  const yearsExperience = currentYear - startYear;

  // State for introduction read more
  const [isExpanded, setIsExpanded] = useState(false);

  // Pagination state for skills
  const [currentSkillsPage, setCurrentSkillsPage] = useState(1);
  const skillsPerPage = 12;

  const skills = [
    // Frontend Technologies
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "React Native",
      icon: <FaReact className="text-cyan-500" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-600" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" />,
    },

    // Backend Technologies
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-600 dark:text-gray-300" />,
    },

    // Databases
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-gray-800 dark:text-white" />,
    },

    // Form & Validation Libraries
    {
      name: "React Hook Form",
      icon: <SiReacthookform className="text-pink-500" />,
    },
    {
      name: "Zod",
      icon: <SiZod className="text-blue-700" />,
    },

    // UI Libraries
    {
      name: "Shadcn/ui",
      icon: <SiShadcnui className="text-black dark:text-white" />,
    },

    // Tools & DevOps
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
    },

    {
      name: "Expo",
      icon: <SiExpo className="text-gray-800 dark:text-white" />,
    },

    // Package Managers
    {
      name: "NPM",
      icon: <SiNpm className="text-red-600" />,
    },
    {
      name: "PNPM",
      icon: <SiPnpm className="text-orange-400" />,
    },

    // API Tools
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500" />,
    },

    // Operating Systems
    {
      name: "Windows",
      icon: <FaWindows className="text-blue-500" />,
    },
    {
      name: "Linux",
      icon: <SiLinux className="text-yellow-500" />,
    },
    {
      name: "Ubuntu",
      icon: <SiUbuntu className="text-orange-500" />,
    },
  ];

  // Pagination logic for skills
  const totalSkillsPages = Math.ceil(skills.length / skillsPerPage);
  const startIndex = (currentSkillsPage - 1) * skillsPerPage;
  const endIndex = startIndex + skillsPerPage;
  const currentSkills = skills.slice(startIndex, endIndex);

  const goToPreviousSkillsPage = () => {
    setCurrentSkillsPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextSkillsPage = () => {
    setCurrentSkillsPage((prev) => Math.min(prev + 1, totalSkillsPages));
  };

  const experiences = [
    {
      id: 1,
      title: "Freelance Developer",
      company: "Win Dental Academy",
      location: "Thailand",
      duration: "2025 - Present",
      type: "Remote",
      description:
        "Contributed to building and maintaining online learning platform for Win Dental Academy. Integrated features like course management, blogs, and user dashboards",
      achievements: [
        "Built and deployed productive applications remotely",
        "Led development of web applications",
        "Tested and debugged across devices, ensuring full mobile responsiveness and cross-browser compatibility.",
      ],
      technologies: ["Next.js", "JavaScript", "Prisma", "Aiven"],
    },
    {
      id: 2,
      title: "Web Developer",
      company: "",
      location: "",
      duration: "2023-2024",
      type: "Intern",
      description:
        "Assisted in developing and maintaining web application features under the guidance of senior developers. Gained hands-on experience in JavaScript, React, and version control using Git",
      achievements: [
        "Built reusable React components, helping reduce code duplication",
        "Learned and applied React Hooks, state management, and REST API integration",
        "Contributed to weekly meetings and planning for individual project",
      ],
      technologies: [
        "React",
        "Vue.js",
        "JavaScript",
        "Bootstrap",
        "REST APIs",
        "ESLint",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-clip-text">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Turning ideas into interactive web experiences with React,
              JavaScript, and a bit of caffeine magic. Crafting clean code and
              smooth UIs — one commit at a time.
            </p>
          </div>
        </div>

        {/* Introduction Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                My coding journey began in{" "}
                <span className="font-semibold text-foreground">
                  {startYear}
                </span>{" "}
                when I first discovered the magic of turning ideas into
                interactive web experiences. What started as curiosity about
                "how websites actually work" quickly evolved into a passion that
                would reshape my entire career path.
              </p>

              {/* Mobile: Condensed view */}
              <div className="block md:hidden">
                {!isExpanded ? (
                  <div className="space-y-4">
                    <p>
                      I took the leap into professional web development,
                      starting as ...
                    </p>
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-primary hover:underline font-medium text-sm"
                    >
                      Read more...
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      I took the leap into professional web development,
                      starting as a Junior Developer where I honed my skills in
                      HTML, CSS, and JavaScript. The learning curve was steep,
                      but every challenge taught me something valuable about
                      crafting clean, user-friendly interfaces.
                    </p>
                    <p>
                      By{" "}
                      <span className="font-semibold text-foreground">
                        {startYear + 1}
                      </span>
                      , I had evolved into a Full Stack Developer, mastering
                      modern frameworks like React and Next.js, while diving
                      deep into backend technologies like Node.js and Express.
                    </p>
                    <p>
                      Now in{" "}
                      <span className="font-semibold text-foreground">
                        {startYear + 2}
                      </span>
                      , with over {yearsExperience}+ years of hands-on
                      experience, I specialize in creating performant,
                      accessible, and delightful digital experiences.
                    </p>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-primary hover:underline font-medium text-sm"
                    >
                      Show less...
                    </button>
                  </div>
                )}
              </div>

              {/* Desktop: Full view */}
              <div className="hidden md:block space-y-4">
                <p>
                  I took the leap into professional web development, starting as
                  a Junior Developer where I honed my skills in HTML, CSS, and
                  JavaScript. The learning curve was steep, but every challenge
                  taught me something valuable about crafting clean,
                  user-friendly interfaces.
                </p>
                <p>
                  By{" "}
                  <span className="font-semibold text-foreground">
                    {startYear + 1}
                  </span>
                  , I had evolved into a Full Stack Developer, mastering modern
                  frameworks like React and Next.js, while diving deep into
                  backend technologies like Node.js and Express. This year
                  marked my transition from building simple websites to
                  architecting complex, scalable web applications.
                </p>
                <p>
                  Now in{" "}
                  <span className="font-semibold text-foreground">
                    {startYear + 2}
                  </span>
                  , with over {yearsExperience}+ years of hands-on experience, I
                  specialize in creating performant, accessible, and delightful
                  digital experiences. When I'm not coding, you'll find me
                  exploring emerging technologies, contributing to open-source
                  projects, or mentoring aspiring developers who remind me of
                  where my journey began.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Laptop className="w-5 h-5" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {currentSkills.map((skill) => (
                  <div
                    key={`${skill.name}-${currentSkillsPage}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-200 hover:scale-105 min-h-[80px]"
                  >
                    <div className="text-3xl flex-shrink-0">{skill.icon}</div>
                    <div className="text-center w-full">
                      <p className="font-medium text-sm leading-tight break-words hyphens-auto">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-center pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPreviousSkillsPage}
                    disabled={currentSkillsPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextSkillsPage}
                    disabled={currentSkillsPage === totalSkillsPages}
                    className="flex items-center gap-1"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline line - hidden on mobile, visible on desktop */}
                  <div className="hidden md:block absolute left-6 top-12 bottom-0 w-px bg-border" />

                  <div className="flex gap-3 md:gap-6">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                      <MdWork className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>

                    <div className="flex-1 space-y-3 md:space-y-4 min-w-0">
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
                          <h3 className="text-lg md:text-xl font-semibold leading-tight">
                            {exp.title}
                          </h3>
                          <Badge variant="outline" className="w-fit">
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
                          {exp.company && (
                            <span className="font-medium text-foreground">
                              {exp.company}
                            </span>
                          )}
                          {exp.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                              <span className="truncate">{exp.location}</span>
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                            <span className="truncate">{exp.duration}</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium text-sm md:text-base">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm md:text-base">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index !== experiences.length - 1 && (
                    <Separator className="mt-6 md:mt-8" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* What I Do Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              What I Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">Frontend Development</h3>
                <p className="text-muted-foreground text-sm">
                  Creating responsive and interactive user interfaces using
                  React, Next.js, and modern CSS frameworks like TailwindCSS.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold">Backend Development</h3>
                <p className="text-muted-foreground text-sm">
                  Building robust server-side applications with Node.js,
                  Express, and various databases like MongoDB and MySQL.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold">Database Design</h3>
                <p className="text-muted-foreground text-sm">
                  Designing efficient database schemas and implementing data
                  models that scale with application growth.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold">Mobile-First Design</h3>
                <p className="text-muted-foreground text-sm">
                  Ensuring applications work seamlessly across all devices with
                  responsive design principles and mobile optimization.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-semibold">API Development</h3>
                <p className="text-muted-foreground text-sm">
                  Creating RESTful APIs endpoints that power modern web
                  applications and mobile apps.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">
                  Performance Optimization
                </h3>
                <p className="text-muted-foreground text-sm">
                  Optimizing applications for speed and performance through code
                  splitting, lazy loading, and efficient state management.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
