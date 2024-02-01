import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/globals.css'
import Searcher from "./ui/header/Searcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies Searcher",
  description: "Made by Santy Piquin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="w-full h-24 flex items-center justify-center">
          <Searcher />
        </header>
          {children}
        <footer>
          
        </footer>
      </body>
    </html>
  );
}
