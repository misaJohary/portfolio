import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body className="font-aeonik antialiased">
        {children}
      </body>
    </html>
  );
}

