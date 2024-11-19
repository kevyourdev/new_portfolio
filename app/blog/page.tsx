"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Building a Modern Web Application with Next.js 14",
    description: "Learn how to leverage the latest features of Next.js 14 to build scalable web applications",
    date: "2024-03-20",
    slug: "building-modern-web-application-nextjs-14",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "Understanding TypeScript's Type System",
    description: "A deep dive into TypeScript's type system and how it can improve your code quality",
    date: "2024-03-15",
    slug: "understanding-typescript-type-system",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for building beautiful user interfaces with Tailwind CSS",
    date: "2024-03-10",
    slug: "mastering-tailwind-css",
    tags: ["CSS", "Tailwind", "Web Design"],
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="container py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-2 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center">
            <p className="text-muted-foreground">
              No articles found. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}