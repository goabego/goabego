import { useTheme } from "@/components/theme/theme-context";
import { cn } from "@/lib/utils";
import heroAbe from "@/assets/hero-abe.jpg";
import { SocialLinks } from "../SocialLinks";

export function ResumeHeader() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {/* Tags related to the article content. */}
        <button
          onClick={() => setTheme("projects")}
          className={cn(
            "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground hover:bg-secondary/80",
            {
              "bg-secondary/80": theme === "projects",
            }
          )}
        >
          Projects & Work
        </button>
        <button
          onClick={() => setTheme("investing")}
          className={cn(
            "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground hover:bg-secondary/80",
            {
              "bg-secondary/80": theme === "investing",
            }
          )}
        >
          VC & Investing
        </button>
        <button
          onClick={() => setTheme("baking")}
          className={cn(
            "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground hover:bg-secondary/80",
            {
              "bg-secondary/80": theme === "baking",
            }
          )}
        >
          Baking & More Baking
        </button>
      </div>
      {/* The main title of the article. */}
      <h1 className="text-4xl leading-tight font-bold tracking-tight @md:text-5xl @lg:text-6xl">
        The Future of Web Development: Embracing Modern Technologies
      </h1>
      {/* A brief introduction or subtitle for the article. */}
      <p className="text-muted-foreground text-xl leading-relaxed">
        Discover how cutting-edge technologies are reshaping the landscape of
        web development, from AI-powered tools to revolutionary frameworks that
        are changing how we build for the web.
      </p>
      {/* Author and publication details section. */}
      <div className="flex flex-col justify-between gap-4 pt-4 @sm:flex-row @sm:items-center">
        <div className="flex items-center gap-3">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
            <img
              className="aspect-square h-full w-full"
              alt="Author"
              src={heroAbe}
            />
          </span>
          <div>
            <p className="font-semibold">Abraham Gomez</p>
            <p className="text-muted-foreground text-sm">
              Strategic Startups & Host @ Google
            </p>
          </div>
        </div>
        
        <SocialLinks />
      </div>
    </header>
  );
}