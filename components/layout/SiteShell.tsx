import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ProjectTransitionProvider } from "@/components/projects/ProjectTransitionContext";
import DesignPlayground from "@/components/ui/DesignPlayground";

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
      <DesignPlayground />
    </ProjectTransitionProvider>
  );
}
