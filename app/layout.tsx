import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alyona Ryzhenko — Product Designer",
  description:
    "Product designer crafting intuitive digital experiences. Based in the real world, working everywhere.",
  openGraph: {
    title: "Alyona Ryzhenko — Product Designer",
    description: "Product designer crafting intuitive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-white antialiased">{children}</body>
    </html>
  );
}
