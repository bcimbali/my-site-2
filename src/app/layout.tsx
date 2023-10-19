import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/app/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Site 2',
  description: 'My Site 2'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
