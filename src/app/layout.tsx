import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { WebSite, WithContext } from 'schema-dts';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/app/theme-provider';
import PageContainer from '@/components/PageContainer';
import TrainProvider from '@/app/train-provider';
import ThemeStylesProviderComponent from '@/app/theme-styles-provider';
import baseUrl from '@/lib/urlHelpers';

export const metadata: Metadata = {
  title: 'Brett Cimbalik',
  description: 'Web development and software engineering portfolio for Brett Cimbalik.',
  creator: 'Brett Cimbalik',
  metadataBase: new URL(baseUrl)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    about: 'Web development and software engineering portfolio for Brett Cimbalik.',
    creator: {
      '@type': 'Person',
      name: 'Brett Cimbalik'
    },
    image: '/favicon.ico',
    description: 'Web development and software engineering portfolio for Brett Cimbalik.',
    name: 'Brett Cimbalik'
  };

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeStylesProviderComponent>
          <TrainProvider>
            <ThemeProvider>
              <PageContainer>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
                <SpeedInsights />
              </PageContainer>
            </ThemeProvider>
          </TrainProvider>
        </ThemeStylesProviderComponent>
      </StyledComponentsRegistry>
    </html>
  );
}
