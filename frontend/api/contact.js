import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get SendGrid API key from environment
  const sendGridApiKey = process.env.SENDGRID_API_KEY;
  if (!sendGridApiKey) {
    console.error('SendGrid API key not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  // Set SendGrid API key
  sgMail.setApiKey(sendGridApiKey);

  // Extract form data
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Prepare email content
    const msg = {
      to: 'karlie3@byu.edu',
      from: 'noreply@karlie.dev',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // Send email via SendGrid
    await sgMail.send(msg);

    return res.status(200).json({
      success: true,
      received: new Date().toISOString()
    });
  } catch (error) {
    console.error('SendGrid error:', error);
    return res.status(500).json({
      error: 'Failed to send message. Please try again.'
    });
  }
}

// Helper function to escape HTML special characters
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
