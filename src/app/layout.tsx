import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/app/theme-provider';
import PageContainer from '@/components/PageContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Site 2',
  description: 'My Site 2'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider>
          <body className={inter.className}>
            <PageContainer>{children}</PageContainer>
          </body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
