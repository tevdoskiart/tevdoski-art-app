javascriptexport default function handler(req, res) {
  const CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  
  const url = `https://www.tiktok.com/v2/auth/authorize?client_key=${CLIENT_KEY}&response_type=code&scope=video.upload&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  
  res.redirect(url);
}
