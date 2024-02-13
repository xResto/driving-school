import { Roboto, Anton } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal'],
});
