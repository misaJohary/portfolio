import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Misa Razafimahatratra | Full-Stack Mobile Developer',
  description: 'Portfolio of Misa Razafimahatratra - A passionate Full-Stack Mobile Application Developer specializing in Flutter and FastAPI. Building elegant, scalable mobile applications.',
  keywords: 'Misa Razafimahatratra, Full-Stack Developer, Mobile Developer, Flutter, FastAPI, Python, Dart, Mobile App Development',
  authors: [{ name: 'Misa Razafimahatratra' }],
  openGraph: {
    title: 'Misa Razafimahatratra | Full-Stack Mobile Developer',
    description: 'Portfolio of Misa Razafimahatratra - Building elegant, scalable mobile applications with Flutter and FastAPI.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Misa Razafimahatratra | Full-Stack Mobile Developer',
    description: 'Portfolio of Misa Razafimahatratra - Building elegant, scalable mobile applications with Flutter and FastAPI.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

