"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Laptop,
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

export default function Timelines() {
  // Pagination state for skills
  const [currentSkillsPage, setCurrentSkillsPage] = useState(1);
  const skillsPerPage = 12;

  const skills = [
    // Frontend Technologies
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
    },
    // {
    //   name: "React Native",
    //   icon: <FaReact className="text-cyan-500" />,
    // },
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
    <>
      <motion.div
        className="max-w-6xl mx-auto space-y-20 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <h1 className="text-4xl text-center font-bold bg-clip-text">Timelines</h1>

        {/* Experience Section */}
        <Card >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Experiences
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

        {/* Skills Section */}
        <Card className="border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
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
      </motion.div>
    </>
  );
}
