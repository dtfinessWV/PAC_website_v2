export async function POST(req) {
  const { lname, fname, email, phone, message } = await req.json();

  // Send data to Zapier webhook
  const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/23799329/u2m1kho/';

  const response = await fetch(zapierWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lname, fname, email, phone, message }),
  });

  if (!response.ok) {
    console.error('Zapier webhook failed:', await response.text());
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }

  return Response.json({ success: true });
}
