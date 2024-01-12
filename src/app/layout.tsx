import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/app/theme-provider';
import PageContainer from '@/components/PageContainer';
import TrainProvider from '@/app/train-provider';
import baseUrl from '@/lib/urlHelpers';
import type { Viewport } from 'next';
import { themeColor as themeColorValue } from '@/styling/themes/darkTheme';

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: themeColorValue }]
};

export const metadata: Metadata = {
  title: 'Brett Cimbalik',
  description: 'Web development and software engineering portfolio for Brett Cimbalik.',
  creator: 'Brett Cimbalik',
  metadataBase: new URL(baseUrl),
  manifest: `${baseUrl}/manifest.webmanifest`
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
