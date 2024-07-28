import type { Metadata } from "next";
import { fontInter, fontSatoshi } from "@/assets/fonts";

import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";

import "./globals.css";

import { Header } from "@/components/layout/header";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "mickasmt",
  description: "mickasmt's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "grid min-h-dvh grid-rows-[1fr_auto] font-satoshi antialiased",
          fontInter.variable,
          fontSatoshi.variable,
        )}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <main className="mx-auto flex w-full max-w-2xl flex-col px-4 md:px-0">
            <div className="mb-20 mt-10 flex w-full flex-col lg:mt-16">
              <Header />
              {children}
            </div>
          </main>
          <Footer />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
