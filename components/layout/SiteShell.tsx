import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="top">{children}</main>
      <SiteFooter />
    </>
  );
}
