import Link from "next/link";

import { siteConfig } from "@/config/site";
import ThemeToggle from "@/components/layout/theme-toggle";

interface FooterLinkProps {
  href: string;
  label: string;
}

const links: FooterLinkProps[] = [
  {
    href: siteConfig.links.github,
    label: "GitHub",
  },
  {
    href: siteConfig.links.twitter,
    label: "Twitter",
  },
  {
    href: "https://mickasmt.com",
    label: "Website",
  },
];

function FooterLink({ href, label }: FooterLinkProps) {
  const isLocal = href.startsWith("/");

  return (
    <Link
      className="font-medium text-muted-foreground transition-colors duration-200 hover:text-primary max-sm:last:hidden"
      href={href}
      aria-label={label}
      target={isLocal ? undefined : "_blank"}
      rel={isLocal ? undefined : "noreferrer"}
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="container mb-6 w-full max-w-screen-sm px-4 text-base md:px-0">
      <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
        <div className="flex items-center gap-5 md:py-1.5">
          {links.map((props, i) => (
            <FooterLink key={i} {...props} />
          ))}
        </div>

        <ThemeToggle />
      </div>
    </footer>
  );
}
