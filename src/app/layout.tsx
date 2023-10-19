import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/app/theme-provider';
import PageContainer from '@/components/PageContainer';

export const metadata: Metadata = {
  title: 'My Site 2',
  description: 'My Site 2'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider>
          <PageContainer>{children}</PageContainer>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
