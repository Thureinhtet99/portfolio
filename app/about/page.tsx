"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Laptop,
  Database,
  Server,
  Globe,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const currentYear = new Date().getFullYear();
  const startYear = 2023; // Year when you started development
  const yearsExperience = currentYear - startYear;

  // State for introduction read more
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        className="max-w-6xl mx-auto space-y-20 py-4 border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <h1 className="text-4xl text-center font-bold bg-clip-text">
          About Me
        </h1>

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
                My journey into{" "}
                <span className="font-semibold text-foreground">
                  web development
                </span>{" "}
                began in{" "}
                <span className="font-semibold text-foreground">
                  {startYear}
                </span>{" "}
                when I first discovered turning creative ideas into interactive
                digital experiences. What started as curiosity about &quot;how
                modern web applications actually work&quot; quickly evolved into
                a deep passion that would completely transform my career path.
              </p>

              {/* Mobile: Condensed view */}
              <div className="block md:hidden">
                {!isExpanded ? (
                  <div className="space-y-4">
                    <p>
                      From Myanmar, I&apos;ve been dedicated to mastering the
                      art of full-stack development, specializing in{" "}
                      <span className="font-semibold text-foreground">
                        React
                      </span>{" "}
                      ecosystem and modern web technologies...
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
                      From Myanmar, I&apos;ve been dedicated to mastering the
                      art of full-stack development, specializing in React
                      ecosystem and modern web technologies. My professional
                      journey began as a Junior Developer, where I immersed
                      myself in the fundamentals of HTML, CSS, and JavaScript,
                      gradually building expertise in creating clean,
                      user-centric interfaces.
                    </p>
                    <p>
                      By{" "}
                      <span className="font-semibold text-foreground">
                        {startYear + 1}
                      </span>
                      , I had evolved into a Full-Stack Developer, mastering
                      modern frameworks like React and Next.js, while diving
                      deep into backend technologies including Node.js, Express,
                      and database management with Prisma and MongoDB. This
                      progression allowed me to architect end-to-end solutions
                      for complex business requirements.
                    </p>
                    <p>
                      Today, with over {yearsExperience}+ years of hands-on
                      experience, I specialize in creating performant,
                      accessible, and scalable web applications. My recent work
                      includes building a comprehensive learning management
                      system for dental professionals and developing educational
                      platforms that serve hundreds of users. When I&apos;m not
                      coding, you&apos;ll find me exploring emerging
                      technologies, contributing to the developer community, or
                      mentoring fellow developers who remind me of my own
                      exciting journey into tech.
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
                  From Myanmar, I&apos;ve been dedicated to mastering the art of
                  full-stack development, specializing in{" "}
                  <span className="font-semibold text-foreground">React</span>{" "}
                  ecosystem and modern web technologies. My professional journey
                  began as a Junior Developer, where I immersed myself in the
                  fundamentals of HTML, CSS, and JavaScript, gradually building
                  expertise in creating clean design and integration with
                  server.
                </p>
                <p>
                  By{" "}
                  <span className="font-semibold text-foreground">
                    {startYear + 1}
                  </span>
                  , I had learned into both backend and frontend, mastering
                  modern frameworks like{" "}
                  <span className="font-semibold text-foreground">React</span>{" "}
                  and{" "}
                  <span className="font-semibold text-foreground">Next.js</span>{" "}
                  , and backend technologies including{" "}
                  <span className="font-semibold text-foreground">Node.js</span>{" "}
                  , Express, and database management with Prisma and MongoDB.
                  This progression allowed me to architect end-to-end solutions
                  for complex business requirements.
                </p>
                <p>
                  Today, with over{" "}
                  <span className="font-semibold text-foreground">
                    {yearsExperience}+
                  </span>{" "}
                  years of hands-on experience, I specialize in creating
                  performant, accessible, and scalable web applications.When
                  I&apos;m not coding, you&apos;ll find me exploring emerging
                  technologies, contributing to the developer community, or
                  solving daily-life problems :(((
                </p>
              </div>
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
    </>
  );
}
