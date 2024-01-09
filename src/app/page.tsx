import HomePage from '@/components/HomePage';

export const metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  }
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
