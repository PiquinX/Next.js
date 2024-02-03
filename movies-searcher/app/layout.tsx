import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/globals.css'
import Searcher from "./ui/header/Searcher";
import { Footer } from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies Searcher",
  description: "Discover new movies, series and games just by using this app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          src="https://kit.fontawesome.com/e61d350a25.js" 
          crossOrigin="anonymous" 
          defer 
        />

      </head>
      <body className={`${inter.className}`}>

        <header className="w-full shadow-md bg-white z-50 h-24 sticky top-0 border-b flex items-center justify-center">
          <Searcher />
        </header>

        <main className="px-16 py-10 bg-[#ededed] min-h-[70vh]"> 
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}
