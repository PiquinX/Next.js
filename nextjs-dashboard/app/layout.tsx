import { inter } from './ui/fonts';
import './ui/global.css'

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`} >
        <header>
          <h1>By Vercel</h1>
        </header>
        {children}
        <footer>
          Made by Vercel with Love
        </footer> 
      </body>
    </html>
  );
}
