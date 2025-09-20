import { ResumeHeader } from "./resume/ResumeHeader";
import { ResumeBody } from "./resume/ResumeBody";
import { ResumeFooter } from "./resume/ResumeFooter";
import { ResumeHorizontal } from "./resume/ResumeHorizontal";
import { useTheme } from "./theme/theme-context";

export function Resume() {
  const { theme } = useTheme();
  return (
    // Main container for the resume component, styled as a card with a border and shadow.
    <div className="rounded-xl border text-card-foreground shadow bg-background flex min-h-screen flex-col overflow-hidden">
      {/* Header section mimicking a window bar with traffic light icons. */}
      <div className="bg-card flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
      {/* Main content container with responsive padding and max-width. */}
      <div className="@container mx-auto max-w-6xl w-full px-4 py-8">
        <article className="space-y-8">
          <ResumeHeader />
          <ResumeHorizontal />
          <ResumeBody theme={theme} />
          <ResumeHorizontal />
          <ResumeFooter />
        </article>
      </div>
    </div>
  );
}
