export async function onRequestGet(context) {
  const kv = context.env.IIKOTO_KV;
  const data = await kv.get("entries");
  return new Response(data || "{}", {
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequestPost(context) {
  const kv = context.env.IIKOTO_KV;
  const body = await context.request.text();
  await kv.put("entries", body);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" }
  });
}
