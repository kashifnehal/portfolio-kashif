import Link from "next/link";
import { profile } from "@/content/profile";

const socialLinks = [
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "GitHub", href: profile.socials.github },
  { label: "Behance", href: profile.socials.behance },
  { label: "Dribbble", href: profile.socials.dribbble },
] as const;

export default function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-white/10 bg-[#070707] px-gutter py-8 text-[#a09a94]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between font-mono text-xs uppercase tracking-wider">
        <p>© 2026 {profile.name}. All rights reserved.</p>

        <nav aria-label="Social profiles">
          <ul className="flex items-center gap-6">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${profile.name} on ${item.label}`}
                  className="transition-colors hover:text-[#f5eee6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#top"
          className="transition-colors hover:text-[#f5eee6] border-b border-white/20 pb-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
