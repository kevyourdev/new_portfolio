export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}