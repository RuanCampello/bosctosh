import File from '@/components/file';
import Password from '@/components/password';
import type { Metadata } from 'next';
import { EB_Garamond, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const ebGaramond = EB_Garamond({
  variable: '--font-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Bosctosh',
  description: 'Created by Pear© with ultraviolence',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} antialiased bg-background w-full h-screen overflow-hidden`}
      >
        {children}
        <File />
        <Password />
      </body>
    </html>
  );
}
