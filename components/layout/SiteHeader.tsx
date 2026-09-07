import Link from "next/link";
import { profile } from "@/content/profile";

const navigation = [
  { label: "works", href: "/#cases" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/#contact" },
] as const;

export default function SiteHeader() {
  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-white/10 bg-black/40 px-gutter backdrop-blur-sm transition-all duration-300"
    >
      <div className="mx-auto flex h-full max-w-content items-center justify-between">
        <Link
          className="flex items-baseline gap-3 text-foreground transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="/"
          aria-label={`${profile.name} — homepage`}
        >
          <span className="font-serif-accent text-lg font-semibold text-[#f5eee6]">
            {profile.name}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-[#f5eee6]/70 sm:inline-block">
            {profile.title}
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 font-mono text-sm tracking-wider text-[#f5eee6]/80 sm:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
