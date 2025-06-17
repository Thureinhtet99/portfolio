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
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10 h-11 border-slate-200 dark:border-slate-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 items-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap py-1.5 px-3 text-sm transition-all"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card
              key={project.title}
              className="group hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-xl mb-4">{project.title}</h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                  {project.techStacks.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={!project.isGitHub}
                    asChild={project.isGitHub}
                    className="flex-1"
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
                        Private
                      </span>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    disabled={!project.isLiveDemo}
                    asChild={project.isLiveDemo}
                    className="flex-1"
                  >
                    {project.isLiveDemo ? (
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Live <MoveRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Not deployed <MoveRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-6 mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              There are no projects available in the &quot;{activeCategory}
              &quot; category
              {searchQuery && " matching your search query \"" + searchQuery + "\""}. 
              Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
