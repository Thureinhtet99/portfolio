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
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiMongodb, SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import profile from "@/public/me.jpg";
import { motion } from "framer-motion";
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
  { name: "Laravel", icon: <FaLaravel className="text-3xl text-[#FF2D20]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-[#47A248]" /> },
  { name: "PrismaORM", icon: <SiPrisma className="text-3xl text-[#0C344B]" /> },
  { name: "MySQL", icon: <SiMysql className="text-3xl text-[#4479A1]" /> },
  { name: "Git", icon: <FaGitAlt className="text-3xl text-[#F05032]" /> },
  { name: "Github", icon: <FaGithub className="text-3xl" /> },
];

export default function Home() {
  return (
    <>
      <div className="space-y-28">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-6 py-4 max-w-3xl mx-auto">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">
              Hi, <span className="text-2xl text-blue-400">I&apos;m </span> Thu
              Rein Htet
            </h1>
            <p className="text-xl text-muted-foreground">Web Developer</p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="" target="_self" download={true}>
                  <HardDriveDownload className="h-4 w-4 mr-2" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            className="relative w-[240px] h-[240px]"
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
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 blur-xl animate-pulse" />
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
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="space-y-4 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-muted-foreground">
            I&apos;m a passionate Full-Stack Developer with experience in
            building dynamic and scalable web applications. With experience in
            both front-end and back-end development, I strive to build seamless
            user experiences that solve real-world problems.
          </p>
        </section>

        {/* Technologies */}
        <section className="space-y-4 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Technologies I Work With</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <MoveRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredProjects
              .map((project) => (
                <Card
                  key={project.title}
                  className="group hover:border-primary/50 transition-colors h-[600px] flex flex-col"
                >
                  <div className="relative h-[280px] grid grid-cols-1 px-2">
                    <div className="relative rounded-md overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover h-auto"
                      />
                    </div>
                  </div>
                  <div className="px-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-muted-foreground mt-2 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStacks.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!project.isGitHub}
                        asChild={project.isGitHub}
                      >
                        {project.isGitHub ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <FaGithub className="h-4 w-4" />
                            Code
                          </Link>
                        ) : (
                          <span className="flex items-center gap-2">
                            <FaGithub className="h-4 w-4" />
                            Code
                          </span>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        disabled={!project.isLiveDemo}
                        asChild={project.isLiveDemo}
                      >
                        {project.isLiveDemo ? (
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Visit site <MoveRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <span className="flex items-center gap-2">
                            Visit site <MoveRight className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
              .slice(0, 2)}
          </div>
        </section>
      </div>
    </>
  );
}
