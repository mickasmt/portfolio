import Link from "next/link";
import { Repo } from "@/types";

import { siteConfig } from "@/config/site";
import { getPopularRepos } from "@/lib/utils";

export default async function Home() {
  const popularRepos = await getPopularRepos();

  return (
    <div className="mt-3">
      <p className="text-pretty text-lg font-medium text-muted-foreground">
        Hi there! I&apos;m mickasmt, a open source enthusiast with a passion for
        user interfaces. Check out my{" "}
        <Link
          className="font-semibold underline underline-offset-2 transition hover:text-primary"
          href="https://ui-hub.mickasmt.com"
          target="_blank"
        >
          UI Hub
        </Link>{" "}
        for free component experiments.
      </p>

      <h2 className="mb-3 mt-10 text-2xl font-bold md:mt-14">Projects</h2>

      <p className="text-balance text-lg font-medium text-muted-foreground">
        Below are some of projects I&apos;ve worked on. You can find most of my
        work on my{" "}
        <Link
          className="font-semibold underline underline-offset-2 transition hover:text-primary"
          href={siteConfig.links.github}
        >
          GitHub
        </Link>
        .
      </p>

      <ul className="-mx-4 mt-8 flex flex-col gap-5 px-1 sm:px-0">
        {popularRepos.map((repo: Repo) => (
          <li key={repo.id}>
            <Link
              className="-my-2 flex select-none items-center gap-2.5 rounded-xl px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-accent"
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
    </div>
  );
}
