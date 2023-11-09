import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "mickasmt",
  description: "mickasmt's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col items-center">
            <div className="mt-8 flex w-full max-w-screen-sm flex-1 flex-col px-4 sm:mt-14 md:px-0 lg:mt-20">
              <Header />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
