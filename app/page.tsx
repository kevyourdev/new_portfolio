import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-8 px-4 pb-8 pt-8 md:gap-16 md:pt-16">
      {/* Hero Section */}
      <section className="container mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:gap-8">
        <div className="relative h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=320&h=320&auto=format&fit=crop"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Full Stack Developer
          </h1>
          <p className="mx-auto max-w-[42rem] text-sm leading-normal text-muted-foreground sm:text-base md:text-lg lg:leading-8">
            Building beautiful, responsive, and user-friendly web applications.
            Passionate about creating seamless digital experiences.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto max-w-5xl space-y-6 px-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About Me</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Learn more about my background and experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold sm:text-xl">Background</h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              With over 5 years of experience in web development, I specialize in
              building modern web applications using React, Node.js, and TypeScript.
              I'm passionate about creating intuitive user interfaces and scalable
              backend systems.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold sm:text-xl">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "PostgreSQL",
                "AWS",
                "Docker",
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1 text-xs sm:text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}