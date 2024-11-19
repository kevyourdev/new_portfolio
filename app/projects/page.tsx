"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/project-card"
import { Search } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&h=900&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&h=900&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using DALL-E API",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1600&h=900&fit=crop",
    tags: ["OpenAI", "React", "Python", "Flask"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
  },
]

const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort()

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => project.tags.includes(tag))
    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 md:py-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Explore my latest projects and experiments
        </p>
      </div>

      <div className="mt-6 space-y-4 md:mt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="no-scrollbar flex w-full gap-2 overflow-x-auto sm:w-auto sm:flex-wrap">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="flex-shrink-0"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-sm text-muted-foreground sm:text-base">
              No projects found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}