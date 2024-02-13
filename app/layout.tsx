import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Szkoła Nauki Jazdy Tarnobrzeg - Wojtek',
  description: 'Szkoła nauki jazdy Tarnobrzeg - Wojtek',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
