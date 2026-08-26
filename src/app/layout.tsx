import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwriting',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Putu Rubby Aprilia Artana — Fullstack Developer',
  description:
    'Portfolio of Putu Rubby Aprilia Artana, a Computer Science student and Fullstack Developer exploring AI, Web Development, IoT, and Game Development.',
  keywords: [
    'Putu Rubby Aprilia Artana',
    'Rubby',
    'Fullstack Developer',
    'AI',
    'Web Development',
    'IoT',
    'Game Development',
    'Universitas Pendidikan Ganesha',
    'Rocky App',
    'Frontend Developer'
  ],
  authors: [{ name: 'Putu Rubby Aprilia Artana' }],
  creator: 'Putu Rubby Aprilia Artana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://puturubby.dev',
    title: 'Putu Rubby Aprilia Artana — Fullstack Developer',
    description:
      'Portfolio of Putu Rubby Aprilia Artana, a Computer Science student and Fullstack Developer exploring AI, Web Development, IoT, and Game Development.',
    siteName: 'Putu Rubby Aprilia Artana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Putu Rubby Aprilia Artana — Fullstack Developer',
    description:
      'Portfolio of Putu Rubby Aprilia Artana, a Computer Science student and Fullstack Developer exploring AI, Web Development, IoT, and Game Development.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#18181B] font-sans antialiased selection:bg-yellow-300 selection:text-black">
        {children}
      </body>
    </html>
  );
}
