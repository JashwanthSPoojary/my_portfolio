import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({ message: "List of users" });
}
export async function POST(request: NextRequest) {
  const { formData } = await request.json();
  const { name , email , message } = formData;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const mailOptions = {
    from: `"Portfolio Contact Form" <${email}>`, // sender address
    to: process.env.SMTP_USER, // your receiving email
    subject: `New Message from ${name}`,
    text: `username: ${name}\n\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
  return NextResponse.json({ message: "Email sent successfull" });
}
