import ThemeToggle from '@/components/theme-toggle';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

interface FooterLinkProps {
	href: string;
	label: string;
}

const links: FooterLinkProps[] = [
	{
		href: siteConfig.links.github,
		label: 'GitHub',
	},
	{
		href: siteConfig.links.twitter,
		label: 'Twitter',
	},
	{
		href: "https://github.com/screfy/screfy.com",
		label: 'Theme',
	}
];

function FooterLink({ href, label }: FooterLinkProps) {
	const isLocal = href.startsWith('/');

	return (
		<Link
			className="text-muted-foreground transition-colors duration-200 hover:text-primary max-sm:last:hidden"
			href={href}
			aria-label={label}
			target={isLocal ? undefined : '_blank'}
			rel={isLocal ? undefined : 'noreferrer'}
		>
			{label}
		</Link>
	);
}

export function Footer() {
	return (
		<footer className="mb-4 mt-12 w-full max-w-screen-sm px-5 text-base md:mb-8 md:mt-24 md:px-0">
			<div className="flex gap-2 sm:gap-4 items-center justify-between md:gap-6">
				<div className="flex items-center gap-6 md:py-1.5">
					{links.map((props, i) => (
						<FooterLink key={i} {...props} />
					))}
				</div>

				<ThemeToggle />
			</div>
		</footer>
	);
}