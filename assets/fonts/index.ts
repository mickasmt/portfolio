import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fontSatoshi = localFont({
  src: "./satoshi.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  style: "normal",
});