import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { product, lang, author, rating, title, content } = body;

    // Validation
    if (!product || !lang || !author || !rating || !title || !content) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return new Response(JSON.stringify({ error: 'Invalid rating' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (author.length > 50 || title.length > 200 || content.length > 2000) {
      return new Response(JSON.stringify({ error: 'Field too long' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // In production, save to a file or database
    // For now, just acknowledge receipt
    console.log('New review submitted:', { product, lang, author, rating, title, content: content.substring(0, 100) });

    return new Response(JSON.stringify({ success: true, message: 'Review submitted for moderation' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
