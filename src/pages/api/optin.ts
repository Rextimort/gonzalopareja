import type { APIRoute } from 'astro';

// Opt-in newsletter: forward to Worker (D1) and then redirect to next step.
export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData().catch(() => null);
  const name = String(form?.get('name') || '').trim();
  const email = String(form?.get('email') || '').trim().toLowerCase();

  try {
    if (email) {
      await fetch('https://app.gonzalopareja.com/newsletter/optin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
    }
  } catch {
    // best-effort
  }

  return new Response(null, {
    status: 303,
    headers: {
      Location: '/intervencion-estrategica',
    },
  });
};
