import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { Name, email, phone, message } = await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "Gmail",
      secure: true,
      port: 465,
      auth: {
        user: "roodrakshinfratech@gmail.com",
        pass: "ruijxgxhesvonrkq",
      },
    });
    const mailOptions = {
      from: "roodrakshinfratech@gmail.com",
      to: "info@roodraksh.co.in",
      subject: "Roodraksh Group Inquiry",
      html: ` 
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="text-align: center; color: #333;">New Inquiry</h2>
          <p><strong>Name:</strong> ${Name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message || "No message provided."}</p>
        </div>
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Resume sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("errorData", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
