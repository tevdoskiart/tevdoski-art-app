export default function handler(req, res) {
  try {
    const CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
    const REDIRECT_URI = 'https://tevdoski-art-app.vercel.app/auth/callback';
    
    const url = 'https://www.tiktok.com/v2/auth/authorize' +
      '?client_key=' + CLIENT_KEY +
      '&response_type=code' +
      '&scope=video.upload' +
      '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);
    
    res.setHeader('Location', url);
    res.status(302).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
Commit changes! ✅



