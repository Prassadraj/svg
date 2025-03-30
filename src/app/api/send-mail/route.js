import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req) {
  try {
    return NextResponse.json({ message: "gwt" });
  } catch (error) {
    return NextResponse.json({ error: "wewe" });
  }
}

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body from the request
    const { name, phone, message, email } = body; // User's email is collected here

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address (for authentication)
        pass: process.env.EMAIL_PASS, // Your generated app password
      },
    });

    // Send the email using your email for 'from', but user's email for 'replyTo'
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Your authenticated email as the sender
      replyTo: email, // User's email as the reply-to address
      to: "prassadpr111@gmail.com", // Your email (recipient)
      subject: "Message from website", // Subject line
      text: message, // Plain text message
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `, // HTML body
    });
    // EMAIL_PASS=qiackgrkegrgkjmv
    return NextResponse.json({
      message: "Email sent successfully!",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}

// user: "info@estilofashions.com", // Your Gmail address
// pass: "fzydiqivrkvnclsi", // Your generated app password
