import { siteConfig } from '@/config/site';
import { getPopularRepos } from '@/lib/utils';
import { Repo } from '@/types';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer'

export default async function Home() {
	const popularRepos = await getPopularRepos();

	return (
		<>
			<p className='text-muted-foreground'>
				<Balancer>
					Welcome to my digital space! I&apos;m mickasmt, a web development enthusiast with a passion for user interfaces. On my journey to becoming a Product Manager.
				</Balancer>
			</p>

			<h2 className="mt-10 md:mt-14 mb-3 text-2xl font-bold">Projects</h2>

			<p className='text-muted-foreground'>
				<Balancer>
					Below are some of projects I&apos;ve worked on. You can find most of my work
					on my <Link className="underline hover:text-primary duration-200" href={siteConfig.links.github}>GitHub</Link>.
				</Balancer>
			</p>

			<ul className="-mx-4 mt-8 flex flex-col gap-6 px-1 sm:px-0">
				{popularRepos.map((repo: Repo) => (
					<li key={repo.id}>
						<Link
							className="-my-2 flex select-none items-center gap-2.5 rounded-xl px-4 py-2 transition-colors duration-300 hover:bg-accent"
							href={repo.html_url}
							target="_blank"
						>
							<p>{repo.name}</p>
							<span className="h-px flex-1 bg-muted-foreground/20" />

							<p>{repo.stargazers_count} stars</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
