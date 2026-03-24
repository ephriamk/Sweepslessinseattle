"use server";

import { resend, CONTACT_EMAIL, EMAIL_FROM } from "@/lib/email";

export type QuoteFormState = {
  success: boolean;
  message: string;
} | null;

export async function sendQuoteRequest(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const consent = formData.get("consent");

  if (!name || !email || !phone || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  if (!consent) {
    return { success: false, message: "Please agree to the communication consent before submitting." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const htmlBody = `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1A1A1A;">
      <h2 style="color: #C41E3A; margin-bottom: 16px;">New Pricing Request</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; vertical-align: top; width: 100px;">Name</td>
          <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
        </tr>
        <tr style="background: #F5ECD7;">
          <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Email</td>
          <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Phone</td>
          <td style="padding: 8px 12px;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td>
        </tr>
        ${service ? `<tr style="background: #F5ECD7;"><td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Service</td><td style="padding: 8px 12px;">${escapeHtml(service)}</td></tr>` : ""}
      </table>
      <div style="margin-top: 20px; padding: 16px; background: #F5ECD7; border-radius: 8px;">
        <p style="margin: 0 0 4px; font-weight: bold;">Message</p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
      <p style="margin-top: 16px; font-size: 12px; color: #5C5C5C;">
        &#10003; Customer consented to receive emails, texts, or phone calls.
      </p>
      <p style="margin-top: 8px; font-size: 13px; color: #5C5C5C;">
        Sent from the Sweepsless in Seattle website.
      </p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: `Sweepsless in Seattle <${EMAIL_FROM}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Pricing request from ${name}${service ? ` \u2014 ${service}` : ""}`,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Something went wrong sending your message. Please try calling or emailing us directly.",
      };
    }

    return {
      success: true,
      message: "Thank you! We\u2019ll be in touch within a few hours.",
    };
  } catch (err) {
    console.error("Email send failed:", err);
    return {
      success: false,
      message: "Something went wrong. Please try calling or emailing us directly.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
