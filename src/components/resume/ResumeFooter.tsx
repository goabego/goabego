import heroAbe from "@/assets/hero-abe.jpg";
import { SocialLinks } from "../SocialLinks";
import { Mail } from "lucide-react";

export function ResumeFooter() {
  return (
    <footer className="mt-8">
      {/* Action buttons for social interactions (like, comment, share, save). */}
      <div className="flex flex-col items-start justify-between gap-4 @sm:flex-row @sm:items-center">
        <div className="flex items-center gap-2">
          < SocialLinks />
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
          <Mail className="h-4 w-4" />
          <span>Contact Me @ hi@goabego.com</span>
        </button>
      </div>
      {/* Author biography section at the end of the article. */}
      <div className="rounded-xl border bg-card text-card-foreground shadow mt-4">
        <div className="p-6">
          <div className="flex flex-col gap-4 @sm:flex-row">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
              <img
                className="aspect-square h-full w-full"
                alt="Author"
                src={heroAbe}
              />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Abraham Gomez</h3>
              <p className="text-muted-foreground mb-2">
                Strategic Startups & Host @ Google
              </p>
              <p className="text-sm">
                I'm a passionate developer with over 8 years of experience in
                web development. I specializes in React, TypeScript, and modern
                web technologies. When I'm not coding, you can find me writing
                about the latest trends in tech.
              </p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
