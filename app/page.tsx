"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HardDriveDownload,
  Mail,
  MoveRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiTypescript,
  // SiMicrosoftsqlserver,
  // SiVisualstudiocode,
  SiPostman,
  SiShadcnui,
  SiZod,
  SiUbuntu,
  // SiWindows,
  SiExpo,
  SiReacthookform,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import profile from "@/public/me.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { projects as featuredProjects } from "@/data/projects";
import { useState } from "react";

const technologies = [
  // Core Frontend Technologies (First 10 - Always visible)
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-xl sm:text-2xl text-[#E34F26]" />,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3 className="text-xl sm:text-2xl text-[#1572B6]" />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-xl sm:text-2xl text-[#F7DF1E]" />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-xl sm:text-2xl text-[#007ACC]" />,
    category: "frontend",
  },
  {
    name: "React",
    icon: <FaReact className="text-xl sm:text-2xl text-[#61DAFB]" />,
    category: "frontend",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative className="text-xl sm:text-2xl text-[#61DAFB]" />,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: (
      <RiNextjsFill className="text-xl sm:text-2xl dark:text-white text-black" />
    ),
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-xl sm:text-2xl text-[#06B6D4]" />,
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-xl sm:text-2xl text-[#339933]" />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-xl sm:text-2xl text-[#47A248]" />,
    category: "database",
  },

  // Additional Technologies (Hidden by default)
  {
    name: "Expo",
    icon: <SiExpo className="text-xl sm:text-2xl dark:text-white text-black" />,
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-xl sm:text-2xl text-[#7952B3]" />,
    category: "frontend",
  },
  {
    name: "React Hook Form",
    icon: <SiReacthookform className="text-xl sm:text-2xl text-[#EC5990]" />,
    category: "frontend",
  },
  {
    name: "Zod",
    icon: <SiZod className="text-xl sm:text-2xl text-[#3E5BAA]" />,
    category: "frontend",
  },
  {
    name: "shadcn/ui",
    icon: (
      <SiShadcnui className="text-xl sm:text-2xl dark:text-white text-black" />
    ),
    category: "frontend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-xl sm:text-2xl text-[#336791]" />,
    category: "database",
  },
  // {
  //   name: "SQL Server",
  //   icon: (
  //     <SiMicrosoftsqlserver className="text-xl sm:text-2xl text-[#CC2927]" />
  //   ),
  //   category: "database",
  // },
  {
    name: "MySQL",
    icon: <SiMysql className="text-xl sm:text-2xl text-[#4479A1]" />,
    category: "database",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-xl sm:text-2xl text-[#2D3748]" />,
    category: "backend",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-xl sm:text-2xl text-[#F05032]" />,
    category: "tools",
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub className="text-xl sm:text-2xl dark:text-white text-black" />
    ),
    category: "tools",
  },
  // {
  //   name: "VS Code",
  //   icon: (
  //     <SiVisualstudiocode className="text-xl sm:text-2xl text-[#007ACC]" />
  //   ),
  //   category: "tools",
  // },
  {
    name: "Postman",
    icon: <SiPostman className="text-xl sm:text-2xl text-[#FF6C37]" />,
    category: "tools",
  },
  {
    name: "Ubuntu",
    icon: <SiUbuntu className="text-xl sm:text-2xl text-[#E95420]" />,
    category: "tools",
  },
  // {
  //   name: "Windows",
  //   icon: <SiWindows className="text-xl sm:text-2xl text-[#0078D6]" />,
  //   category: "tools",
  // },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const technologiesPerPage = 15; // 3 rows × 5 columns = 15 items
  const totalPages = Math.ceil(technologies.length / technologiesPerPage);

  const startIndex = (currentPage - 1) * technologiesPerPage;
  const endIndex = startIndex + technologiesPerPage;
  const visibleTechnologies = technologies.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <div className="space-y-10 sm:space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 py-8 max-w-4xl mx-auto">
          <div className="flex-1 space-y-6 sm:space-y-8 text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi,{" "}
              <span className="text-xl sm:text-2xl lg:text-4xl">I&apos;m </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
                Thu Rein Htet
              </span>
            </motion.h1>
            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground h-10 sm:h-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  1500,
                  "Frontend Developer",
                  1500,
                  "Backend Developer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild className="px-6 py-3 text-base">
                <Link href="/contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" asChild className="px-6 py-3 text-base">
                <Link
                  href="/resume/CV.pdf"
                  target="_self"
                  download={true}
                  className="flex items-center gap-2"
                >
                  <HardDriveDownload className="h-5 w-5" />
                  Download CV
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 },
              scale: { duration: 0.6, delay: 0.6 },
              y: { duration: 4, ease: "easeInOut", repeat: Infinity },
            }}
          >
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                  "30% 60% 70% 40%/50% 60% 30% 60%",
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                ],
                boxShadow: [
                  "0 25px 50px -12px rgba(96, 165, 250, 0.4)",
                  "0 25px 50px -12px rgba(96, 165, 250, 0.6)",
                  "0 25px 50px -12px rgba(96, 165, 250, 0.4)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={profile}
                alt="Thu Rein Htet"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 300px"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="space-y-6 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I&apos;m a passionate Full-Stack Developer with experience in
            building dynamic web applications. With experience in both front-end
            and back-end development, I&apos;m striving to build seamless user
            experiences that solve real-world problems.
          </p>

          {/* Quote Section */}
          <motion.div
            className="relative mt-8 p-6  dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Quote className="h-8 w-8 text-blue-400 dark:text-blue-800 mx-auto mb-4" />
            <blockquote className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 italic">
              &ldquo;Code is like humor. When you have to explain it, it&apos;s
              bad.&rdquo;
            </blockquote>
            <cite className="block mt-3 text-sm text-blue-400 dark:text-blue-800 font-semibold">
              — Cory House
            </cite>
          </motion.div>
        </section>

        {/* Technologies */}
        <section className="space-y-4 max-w-6xl mx-auto text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-5 gap-3 sm:gap-4">
            {visibleTechnologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${currentPage}`}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="group-hover:scale-105 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Simplified Pagination - Just Previous/Next */}
          {totalPages > 1 && (
            <motion.div
              className="flex items-center justify-center gap-2 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl sm:text-2xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild className="px-0 sm:px-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View All Projects <MoveRight size={18} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
                  <div className="p-3">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 border"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-6 flex flex-col flex-1">
                    <h3 className="font-bold text-xl line-clamp-1 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground flex-1 text-sm sm:text-base line-clamp-3 sm:line-clamp-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStacks.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStacks.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs px-3 py-1"
                        >
                          +{project.techStacks.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-3 mt-5 flex-wrap sm:flex-nowrap">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!project.isGitHub}
                        asChild={project.isGitHub}
                        className="w-full sm:w-auto"
                      >
                        {project.isGitHub ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <FaGithub className="h-4 w-4" />
                            Code
                          </Link>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <FaGithub className="h-4 w-4" />
                            Code
                          </span>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        disabled={!project.isLiveDemo}
                        asChild={project.isLiveDemo}
                        className="w-full sm:w-auto"
                      >
                        {project.isLiveDemo ? (
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            Visit site <MoveRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Visit site <MoveRight className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
