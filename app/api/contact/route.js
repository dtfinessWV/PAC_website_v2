import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  // 1. Send email to gym owner
  const ownerEmail = await resend.emails.send({
    from: process.env.RESEND_FROM,
    to: process.env.RESEND_TO,
    subject: `New Contact Message from ${name}`,
    html: `
      <h3>New Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${
    phone
      ? `<p><strong>Phone:</strong> 
          <a href="tel:${phone}">📞 ${phone}</a>
         </p>`
      : ''
  }
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });

  // 2. Store user data for follow-up (optional)
  // You could also push to Google Sheet, DB, etc.

  return Response.json({ success: true });
}