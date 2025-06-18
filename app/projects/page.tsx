"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoveRight, Search, Clock } from "lucide-react";
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

  // Separate current and upcoming projects
  const currentProjects = projects.filter((project) => !project.upcoming);
  const upcomingProjects = projects.filter((project) => project.upcoming);

  const filteredProjects = currentProjects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredUpcomingProjects = upcomingProjects.filter((project) => {
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

      {/* Current Projects */}
      {filteredProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Current Projects</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.title}
                className="group hover:border-primary/50 transition-colors h-[550px] flex flex-col"
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
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Projects */}
      {filteredUpcomingProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="h-6 w-6" /> Upcoming Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUpcomingProjects.map((project) => (
              <Card
                key={project.title}
                className="group hover:border-primary/50 transition-colors h-[600px] flex flex-col border-dashed"
              >
                <div className="relative h-[280px] grid grid-cols-1 px-2">
                  <div className="relative rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover h-auto opacity-60"
                      />
                    ) : (
                      <Clock className="h-16 w-16 text-muted-foreground opacity-50" />
                    )}
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-primary/10">
                        Coming Soon
                      </Badge>
                    </div>
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
                  {project.expectedCompletion && (
                    <div className="mt-4 text-muted-foreground text-sm flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Expected completion: {project.expectedCompletion}
                    </div>
                  )}
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" disabled>
                      <span className="flex items-center gap-2">
                        <FaGithub className="h-4 w-4" />
                        Code
                      </span>
                    </Button>
                    <Button size="sm" disabled>
                      <span className="flex items-center gap-2">
                        Visit site <MoveRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* No Projects Found Message */}
      {filteredProjects.length === 0 &&
        filteredUpcomingProjects.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-6 mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              There are no projects available in the &quot;{activeCategory}
              &quot; category
              {searchQuery && ` matching your search query "${searchQuery}"`}.
              Try adjusting your filters.
            </p>
          </div>
        )}
    </div>
  );
}
