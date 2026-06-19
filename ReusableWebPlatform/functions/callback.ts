/**
 * GitHub OAuth — Step 2: Exchange code for token
 * Cloudflare Pages Function: GET /callback
 * Returns HTML that posts the token back to the CMS popup
 */
export const onRequestGet: PagesFunction<{
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
}> = async (context) => {
  const url = new URL(context.request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing code parameter', { status: 400 });
  }

  const clientId = context.env.GITHUB_CLIENT_ID;
  const clientSecret = context.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response('OAuth credentials not configured', { status: 500 });
  }

  // Exchange code for access token
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = (await tokenResponse.json()) as { access_token?: string; error?: string };

  if (tokenData.error || !tokenData.access_token) {
    return new Response(`OAuth error: ${tokenData.error || 'no token'}`, { status: 401 });
  }

  // Return HTML that sends the token back to the CMS popup window
  const html = `<!DOCTYPE html>
<html>
<head><title>OAuth Callback</title></head>
<body>
<script>
(function() {
  const token = "${tokenData.access_token}";
  const provider = "github";
  
  if (window.opener) {
    window.opener.postMessage(
      'authorization:' + provider + ':success:' + JSON.stringify({ token, provider }),
      window.location.origin
    );
  }
  window.close();
})();
</script>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
};
