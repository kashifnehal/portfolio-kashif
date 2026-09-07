import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ProjectTransitionProvider } from "@/components/projects/ProjectTransitionContext";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProjectTransitionProvider>
      <SiteHeader />
      <main id="top">{children}</main>
      <SiteFooter />
    </ProjectTransitionProvider>
  );
}
