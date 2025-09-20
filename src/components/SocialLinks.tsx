import { Twitter, Linkedin, Github } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="text-muted-foreground flex items-center gap-4 text-sm">
      <a
        href="https://twitter.com/goabegoo"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-transparent p-1 transition-colors hover:border-primary"
      >
        <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
      </a>
      <a
        href="https://linkedin.com/in/goabego"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-transparent p-1 transition-colors hover:border-primary"
      >
        <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
      </a>
      <a
        href="https://github.com/goabego"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-transparent p-1 transition-colors hover:border-primary"
      >
        <Github className="h-6 w-6 hover:text-primary transition-colors" />
      </a>
    </div>
  );
}
