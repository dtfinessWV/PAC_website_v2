export async function POST(req) {
  const { lname, fname, email, phone, message } = await req.json();

  // Prefer sending email notifications via Resend if configured.
  try {
    if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL && process.env.FROM_EMAIL) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const html = `
        <p>New contact submission received:</p>
        <ul>
          <li><strong>Name:</strong> ${fname} ${lname}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `;

      const sendResult = await resend.emails.send({
        from: process.env.FROM_EMAIL,
        to: process.env.NOTIFY_EMAIL,
        subject: `New contact from ${fname} ${lname}`,
        html,
      });
      console.info('Resend sendResult:', JSON.stringify(sendResult));

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      console.warn('Resend not configured: set RESEND_API_KEY, NOTIFY_EMAIL, FROM_EMAIL');
      // Still return success so the form doesn't break; instruct to configure env.
      return new Response(JSON.stringify({ success: true, warning: 'email not sent - not configured' }), { status: 200 });
    }
  } catch (err) {
    console.error('Email send failed:', err && err.message ? err.message : err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
