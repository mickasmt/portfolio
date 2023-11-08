import { Repo } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getPopularRepos() {
  const repos: Repo[] = await fetch(
    "https://api.github.com/users/mickasmt/repos?sort=stars",

    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  const filteredRepos = repos
    .filter((repo) => repo.stargazers_count >= 35)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
		
  return filteredRepos;
}
