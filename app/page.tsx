"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardDriveDownload, Mail, MoveRight } from "lucide-react";
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
import { SiMysql, SiMongodb, SiPrisma, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import profile from "@/public/me.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { projects as featuredProjects } from "@/data/projects";

const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-3xl text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3 className="text-3xl text-[#1572B6]" /> },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-3xl text-[#06B6D4]" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-3xl text-[#7952B3]" />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-3xl text-[#F7DF1E]" />,
  },
  { name: "React", icon: <FaReact className="text-3xl text-[#61DAFB]" /> },
  {
    name: "Nextjs",
    icon: <RiNextjsFill className="text-3xl dark:text-white text-black" />,
  },
  { name: "Nodejs", icon: <FaNodeJs className="text-3xl text-[#339933]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-[#47A248]" /> },
  { name: "PrismaORM", icon: <SiPrisma className="text-3xl text-[#0C344B]" /> },
  { name: "MySQL", icon: <SiMysql className="text-3xl text-[#4479A1]" /> },
  {
    name: "Postgres",
    icon: <SiPostgresql className="text-3xl text-[#4479A1]" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-3xl text-[#F05032]" /> },
  { name: "Github", icon: <FaGithub className="text-3xl" /> },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-16 sm:space-y-20 md:space-y-28">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-4 max-w-3xl mx-auto">
          <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Hi, <span className="text-xl sm:text-2xl text-blue-400">I&apos;m </span> Thu Rein Htet
            </h1>
            <div className="text-lg sm:text-xl text-muted-foreground h-8">
              <TypeAnimation
                sequence={[
                  "Web Developer",
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
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button asChild className="px-4">
                <Link href="/contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 mr-1" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" asChild className="px-4">
                <Link href="/resume/CV.pdf" target="_self" download={true} className="flex items-center gap-2">
                  <HardDriveDownload className="h-4 w-4 mr-1" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px]"
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                  "30% 60% 70% 40%/50% 60% 30% 60%",
                  "60% 40% 30% 70%/60% 30% 70% 40%",
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
                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 240px"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="space-y-4 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            I&apos;m a passionate Full-Stack Developer with experience in
            building dynamic web applications. With experience in both front-end
            and back-end development, I&apos;m striving to build seamless user
            experiences that solve real-world problems.
          </p>
        </section>

        {/* Technologies */}
        <section className="space-y-4 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold">Technologies I Work With</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                <div className="text-xl sm:text-3xl">{tech.icon}</div>
                <span className="text-xs sm:text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild className="px-0 sm:px-4">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <MoveRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {featuredProjects
              .slice(0, 2)
              .map((project) => (
                <Card
                  key={project.title}
                  className="group hover:border-primary/50 transition-colors flex flex-col h-full"
                >
                  <div className="p-2">
                    <div className="relative aspect-video w-full rounded-md overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="px-4 pb-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg line-clamp-1">{project.title}</h3>
                    <p className="text-muted-foreground mt-2 flex-1 text-sm sm:text-base line-clamp-3 sm:line-clamp-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStacks.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStacks.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.techStacks.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap sm:flex-nowrap">
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
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}