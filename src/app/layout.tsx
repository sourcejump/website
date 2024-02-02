import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import cn from '@/utils/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SourceJump',
  description: 'The global bunnyhopping community for Counter-Strike: Source',
};

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<Props> = async ({ children }) => (
  <html lang="en" className="overflow-x-hidden">
    <body className={cn('flex min-h-screen flex-col w-screen', inter.className)}>
      <main id="mainContent" className="relative z-[1] flex flex-auto flex-col overflow-hidden">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
