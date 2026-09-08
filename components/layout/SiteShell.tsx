import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ProjectTransitionProvider } from "@/components/projects/ProjectTransitionContext";
import FontPlayground from "@/components/ui/FontPlayground";

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
      <FontPlayground />
    </ProjectTransitionProvider>
  );
}
