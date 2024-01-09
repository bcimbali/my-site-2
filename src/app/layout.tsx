import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/app/theme-provider';
import PageContainer from '@/components/PageContainer';
import TrainProvider from '@/app/train-provider';

const urlBase =
  process.env.VERCEL_ENV === 'preview'
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.VERCEL_ENV === 'production'
      ? 'https://brettcimbalik.com'
      : `http://localhost:3000`;

export const metadata: Metadata = {
  title: 'Brett Cimbalik',
  description: 'Web development and software engineering portfolio for Brett Cimbalik.',
  creator: 'Brett Cimbalik',
  metadataBase: new URL(urlBase)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <TrainProvider>
          <ThemeProvider>
            <PageContainer>
              {children}
              <SpeedInsights />
            </PageContainer>
          </ThemeProvider>
        </TrainProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
