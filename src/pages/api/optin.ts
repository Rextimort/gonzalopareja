import type { APIRoute } from 'astro';

// MVP: no guardamos nada aún. Solo redirigimos al siguiente paso del funnel.
export const POST: APIRoute = async () => {
  return new Response(null, {
    status: 303,
    headers: {
      Location: '/intervencion-estrategica',
    },
  });
};
