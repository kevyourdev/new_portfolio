"use client"

import { notFound } from "next/navigation"
import { format } from "date-fns"
import Markdown from "markdown-to-jsx"
import { Separator } from "@/components/ui/separator"

const posts = [
  {
    id: 1,
    title: "Building a Modern Web Application with Next.js 14",
    description: "Learn how to leverage the latest features of Next.js 14 to build scalable web applications",
    date: "2024-03-20",
    slug: "building-modern-web-application-nextjs-14",
    tags: ["Next.js", "React", "Web Development"],
    content: `
# Building a Modern Web Application with Next.js 14

Next.js 14 introduces several new features that make building modern web applications easier and more efficient. In this article, we'll explore these features and how to use them effectively.

## Server Components

Server Components are a revolutionary feature that allows you to render components on the server, reducing the JavaScript bundle size and improving performance.

\`\`\`tsx
// app/page.tsx
export default function Page() {
  return (
    <div>
      <h1>Server Component Example</h1>
      <p>This component is rendered on the server!</p>
    </div>
  )
}
\`\`\`

## Streaming

Next.js 14 supports streaming, which allows you to progressively render and send HTML to the client, improving perceived performance.

## Data Fetching

The new data fetching system is more intuitive and efficient:

\`\`\`tsx
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{/* Use data */}</div>
}
\`\`\`

Stay tuned for more updates and best practices!
    `,
  },
  {
    id: 2,
    title: "Understanding TypeScript's Type System",
    description: "A deep dive into TypeScript's type system and how it can improve your code quality",
    date: "2024-03-15",
    slug: "understanding-typescript-type-system",
    tags: ["TypeScript", "JavaScript", "Programming"],
    content: `# Understanding TypeScript's Type System

TypeScript provides a powerful type system that helps catch errors early and improve code maintainability.

## Basic Types

TypeScript includes several basic types:

\`\`\`typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
\`\`\`

## Interfaces

Interfaces are a powerful way to define contracts in your code:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

function createUser(user: User) {
  // Implementation
}
\`\`\`

More content coming soon!
    `,
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for building beautiful user interfaces with Tailwind CSS",
    date: "2024-03-10",
    slug: "mastering-tailwind-css",
    tags: ["CSS", "Tailwind", "Web Design"],
    content: `# Mastering Tailwind CSS

Tailwind CSS is a utility-first CSS framework that makes it easy to build modern user interfaces.

## Utility-First Approach

Instead of writing custom CSS, you compose classes:

\`\`\`html
<div class="flex items-center justify-between p-4 bg-white shadow rounded-lg">
  <h2 class="text-xl font-bold text-gray-800">Hello, Tailwind!</h2>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click me
  </button>
</div>
\`\`\`

## Responsive Design

Tailwind makes responsive design easy:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
\`\`\`

More tips coming soon!
    `,
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-muted-foreground">{post.description}</p>
      </div>

      <div className="mt-4 flex items-center gap-x-4 text-sm text-muted-foreground">
        <time dateTime={post.date}>
          {format(new Date(post.date), "MMMM d, yyyy")}
        </time>
        <Separator orientation="vertical" className="h-4" />
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

      <Separator className="my-8" />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  )
}