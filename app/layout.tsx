import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavbarWrapper from '@/components/NavbarWrapper';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'repohistory',
  description: "View your GitHub repository's traffic history",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#17191c] dark scrollbar-hide`}
      >
        <Providers>
          <NavbarWrapper />
          {children}
        </Providers>
      </body>
    </html>
  );
}
