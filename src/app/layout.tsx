import type { Metadata } from "next";
import "./globals.css";

import { cn } from "-/lib/utils";
import { Inter } from "next/font/google";

const fontSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s · afief abdurrahman's",
    default: "blog · afief abdurrahman's",
  },
  description: "A blog website created using Next.js and Contentlayer + MDX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.className, "antialiased dark")}>
        {children}
      </body>
    </html>
  );
}
