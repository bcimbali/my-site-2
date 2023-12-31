import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/app/theme-provider';
import PageContainer from '@/components/PageContainer';
import TrainProvider from '@/app/train-provider';

export const metadata: Metadata = {
  title: 'Brett Cimbalik',
  description: 'Web development and software engineering portfolio for Brett Cimbalik.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <TrainProvider>
          <ThemeProvider>
            <PageContainer>{children}</PageContainer>
          </ThemeProvider>
        </TrainProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
