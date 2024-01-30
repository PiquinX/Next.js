import { inter } from './ui/fonts';
import './ui/global.css'

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
