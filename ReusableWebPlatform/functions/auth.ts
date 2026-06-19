/**
 * GitHub OAuth — Step 1: Redirect to GitHub authorization
 * Cloudflare Pages Function: GET /auth
 */
export const onRequestGet: PagesFunction<{
  GITHUB_CLIENT_ID: string;
}> = async (context) => {
  const clientId = context.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response('GITHUB_CLIENT_ID not configured', { status: 500 });
  }

  const scope = 'repo,user';
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`;

  return Response.redirect(authUrl, 302);
};
