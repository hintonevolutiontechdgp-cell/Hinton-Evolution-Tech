import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS headers (optional, but good for Vercel)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, phone, email, service, notes, formType, packageName } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TARGET_EMAIL || "hintonevolutiontechdgp@gmail.com",
      subject: `New Lead: ${formType} from ${name}`,
      text: `
        You have received a new inquiry!
        
        Form Type: ${formType}
        ${packageName ? `Package: ${packageName}` : ""}
        ${service ? `Service Requested: ${service}` : ""}
        
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        
        Notes/Details: 
        ${notes || "None"}
      `,
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("No email credentials found in environment variables.");
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error);

    if (
      error.response &&
      (error.response.includes("535-5.7.8") ||
        error.response.includes("534-5.7.9")) ||
      error.responseCode === 535 ||
      error.responseCode === 534
    ) {
      return res.status(500).json({
        error:
          "Authentication failed. You must check the Vercel Environment Variables.",
      });
    }

    res.status(500).json({ error: "Failed to send email" });
  }
}
