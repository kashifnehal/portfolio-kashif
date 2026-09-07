import Link from "next/link";
import { profile } from "@/content/profile";

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/bepatrickdavid" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bepatrickdavid/" },
  { label: "Behance", href: "https://www.behance.net/bepatrickdavid" },
  { label: "Dribbble", href: "https://dribbble.com/bepatrickdavid" },
  { label: "Awwwards", href: "https://www.awwwards.com/bepatrickdavid/" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-gutter py-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 sm:flex-row sm:justify-between font-mono text-xs uppercase tracking-wider text-muted">
        <p>© 2026 {profile.name}. All rights reserved.</p>

        <div className="flex items-center gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Link
          href="#top"
          className="transition-colors hover:text-foreground border-b border-muted/30 pb-0.5"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
