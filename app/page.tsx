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
  ArrowDown,
  MapPin,
  Circle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import profile from "@/public/me.jpg";
import { motion } from "framer-motion";
import { projects as featuredProjects } from "@/data/projects";
import { useState, useEffect } from "react";
import { BiWorld } from "react-icons/bi";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

export default function Home() {
  const [showFAB, setShowFAB] = useState(true);
  const [available] = useState(true);

  // Dynamic stats
  const currentYear = new Date().getFullYear();
  const startYear = 2023; // Year when you started development
  const yearsExperience = currentYear - startYear;
  const projectsCompleted = featuredProjects.length; // Featured projects + additional projects

  // Track scroll position to show/hide FAB
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show FAB when there's more content below (hide only when near the very bottom)
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;
      setShowFAB(!isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="min-h-[640px] flex flex-col-reverse md:flex-row items-center justify-center gap-12 py-6 max-w-6xl mx-auto"
      >
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="md:text-6xl">Thu Rein Htet</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Crafting scalable web applications with React, Next.js, and
            TypeScript. Transforming complex business requirements into elegant
            digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 mt-4 text-sm text-muted-foreground justify-center md:justify-start"
          >
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Myanmar
            </span>
            {available && (
              <span className="flex items-center gap-1">
                <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                Available for work
              </span>
            )}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 mt-10 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button asChild size="sm" className="px-3 py-2 text-sm bg-primary">
              <Link href="/contact" className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="sm"
              className="px-3 py-2 text-sm"
            >
              <Link
                href="/resume/CV.pdf"
                target="_self"
                download={true}
                className="flex items-center gap-1"
              >
                <HardDriveDownload className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0.05) 100%)",
            }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 bg-primary/60"
                style={{
                  left: `${i * 8 + 10}%`,
                  height: "100%",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleY: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border border-primary/30"
            whileHover={{ scale: 1.08 }}
            animate={{
              boxShadow: [
                "0 0 20px hsl(var(--primary) / 0.3)",
                "0 0 40px hsl(var(--primary) / 0.6)",
                "0 0 20px hsl(var(--primary) / 0.3)",
              ],
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity },
              hover: { duration: 0.3 },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
            <Image
              src={profile}
              alt="Thu Rein Htet"
              fill
              className="object-cover filter brightness-110 contrast-110"
              priority
              sizes="(max-width: 620px) 180px, (max-width: 748px) 240px, 280px"
            />
          </motion.div>
        </motion.div>

        {/* Floating Action Button - Scroll Down Indicator */}
        {showFAB && (
          <motion.button className="fixed bottom-10 right-8 z-50 transition-all duration-300 flex items-center justify-center group">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.button>
        )}
      </section>

      {/* About Section */}
      <section
        id="about-section"
        className="min-h-[540px] flex flex-col md:flex-row items-center justify-center gap-12 py-8 max-w-6xl mx-auto"
      >
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl text-center sm:text-left font-bold">
            About Me
          </h2>

          <div className="space-y-4 text-right">
            <p className="text-base text-muted-foreground leading-relaxed text-left">
              I&apos;m a passionate web developer spanning front-end frameworks
              like React and Next.js to back-end technologies including Node.js.
            </p>

            <Button variant="ghost" asChild className="px-0 w-fit ">
              <Link
                href="/about"
                className="flex items-center gap-2 text-primary hover:text-blue-800 dark:hover:text-blue-200"
              >
                Read my story <MoveRight size={18} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-400">
                {yearsExperience}+
              </div>
              <div className="text-sm text-muted-foreground">
                years hands-on experiences
              </div>
            </div>
            <div className="text-center p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">
                {projectsCompleted}+
              </div>
              <div className="text-sm text-muted-foreground">
                projects completed
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex-1 max-w-md">
          {/* Quote Section */}
          <motion.div
            className="relative p-6 rounded-xl border border-primary text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Quote className="h-8 w-8 text-primary mb-4 mx-auto" />
            <blockquote className="text-lg font-medium italic mb-3">
              &ldquo;Code is like humor. When you have to explain it, it&apos;s
              bad.&rdquo;
            </blockquote>
            <cite className="text-sm text-primary font-semibold">
              — Cory House
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="featured-section"
        className="min-h-[540px] mx-auto"
      >
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold">Featured Projects</h2>
          <Button variant="ghost" asChild className="px-0 sm:px-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-primary hover:text-blue-800 dark:hover:text-blue-200"
            >
              View All Projects <MoveRight size={18} />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.slice(0, 2).map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
                <div className="relative aspect-video w-full bg-accent overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="px-6 pb-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl line-clamp-1 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground flex-1 text-sm sm:text-base line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStacks.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStacks.length > 4 && (
                      <Badge variant="outline" className="text-xs px-3 py-1">
                        +{project.techStacks.length - 4} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3 mt-5 flex-wrap justify-between items-center sm:flex-nowrap">
                    <div className="flex justify-between items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={!project.isGitHub}
                        asChild={project.isGitHub}
                        className="w-full sm:w-auto hover:text-primary hover:bg-transparent"
                      >
                        {project.isGitHub ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1"
                          >
                            <FaGithub className="h-4 w-4" />
                            Code
                          </Link>
                        ) : (
                          <span className="flex items-center justify-center gap-1">
                            <FaGithub className="h-4 w-4" />
                            Code
                          </span>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        disabled={!project.isLiveDemo}
                        asChild={project.isLiveDemo}
                        className="w-full sm:w-auto hover:text-primary hover:bg-transparent"
                        variant="ghost"
                      >
                        {project.isLiveDemo ? (
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1"
                          >
                            <BiWorld className="h-4 w-4" />
                            Visit
                          </Link>
                        ) : (
                          <span className="flex items-center justify-center gap-1">
                            <BiWorld className="h-4 w-4" />
                            Visit
                          </span>
                        )}
                      </Button>
                    </div>
                    <ProjectDetailModal project={project}>
                      <Button
                        size="sm"
                        className="w-full sm:w-auto text-primary hover:text-blue-800 dark:hover:text-blue-200"
                        variant="ghost"
                      >
                        <span className="flex items-center justify-center gap-2">
                          View Details <MoveRight className="h-4 w-4" />
                        </span>
                      </Button>
                    </ProjectDetailModal>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
