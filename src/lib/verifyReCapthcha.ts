type CaptchaData = {
  success: true;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
} | {
  success: false;
  "error-codes": string[];
};


const verifyCaptchaToken = async ({ token }: { token: string }) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // Google's siteVerify URL - https://developers.google.com/recaptcha/docs/verify
  const siteVerifyUrl = "https://www.google.com/recaptcha/api/siteverify";

  if (!secretKey) {
    throw new Error('No secret key found.');
  }

  // https://www.google.com/recaptcha/api/siteverify
  const url = new URL(siteVerifyUrl);
  url.searchParams.append('secret', secretKey);
  url.searchParams.append('response', token);

  const res = await fetch(url, {
    method: 'POST'
  });

  const captchaData: CaptchaData = await res.json();

  if (!res.ok) {
    return null;
  }

  return captchaData;
};

export default verifyCaptchaToken;
