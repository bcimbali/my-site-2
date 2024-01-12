const baseUrl =
  process.env.VERCEL_ENV === 'preview'
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.VERCEL_ENV === 'production'
      ? 'https://www.brettcimbalik.com'
      : `http://localhost:3000`;

export default baseUrl;
