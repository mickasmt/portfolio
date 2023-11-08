import type { Icon } from "lucide-react"
import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  icon?: keyof typeof Icons
  disabled?: boolean
  external?: boolean
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  mailSupport: string
  links: {
    twitter: string
    github: string
  }
}

export type Repo = {
  id: string
  name: string
  html_url: string
  stargazers_count: number
}
