import { useTheme } from "@/components/theme/theme-context";
import { ProjectsBody } from "./ProjectsBody";
import { InvestingBody } from "./InvestingBody";
import { BakingBody } from "./BakingBody";

export function ResumeBody() {
  const { theme } = useTheme();

  switch (theme) {
    case "projects":
      return <ProjectsBody />;
    case "investing":
      return <InvestingBody />;
    case "baking":
      return <BakingBody />;
    default:
      return <ProjectsBody />;
  }
}
