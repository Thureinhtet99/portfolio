"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoveRight, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

const categories = [
  // "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
];

export default function ProjectsPage() {
  // useState
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Web Development");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto p-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
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
        ) : (
          <div className="col-span-2 flex flex-col items-center justify-center py-20">
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground text-center">
              There are no projects available in the &quot;{activeCategory}
              &quot; category
              {searchQuery && " matching your search query"}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
