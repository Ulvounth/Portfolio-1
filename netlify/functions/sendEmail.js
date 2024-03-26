const mailgun = require("mailgun-js");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const DOMAIN = "sandbox97759f5652fc463e879410a39c42ee6d.mailgun.org"; // Your Mailgun domain
  const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

  const data = JSON.parse(event.body);
  const emailData = {
    from: "Excited User sandbox97759f5652fc463e879410a39c42ee6d.mailgun.org",
    to: "ulvund_a@hotmail.com",
    subject: "Contact Form Submission",
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  };

  try {
    const body = await mg.messages().send(emailData);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
