"use server";

export type QuoteFormState = {
  success: boolean;
  message: string;
} | null;

/** Prefer server-only secret if set; else same key as client form (see QuoteForm). */
const WEB3FORMS_KEY =
  process.env.WEB3FORMS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

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

  if (!WEB3FORMS_KEY) {
    console.error("Web3Forms key missing: set WEB3FORMS_KEY or NEXT_PUBLIC_WEB3FORMS_KEY");
    return {
      success: false,
      message: "Form is not configured yet. Please call or email us directly at Sweepslessinseattle@gmail.com.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Pricing request from ${name}${service ? ` \u2014 ${service}` : ""}`,
        from_name: "Sweepsless in Seattle Website",
        name,
        email,
        phone,
        service: service || "Not specified",
        message,
        consent: "Yes \u2014 agreed to receive emails, texts, or phone calls",
      }),
    });

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Web3Forms returned non-JSON (status %d):", response.status, text.slice(0, 300));
      return {
        success: false,
        message: "Form service error. Please try calling or emailing us directly at Sweepslessinseattle@gmail.com.",
      };
    }

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Thank you! We\u2019ll be in touch within a few hours.",
      };
    }

    console.error("Web3Forms error:", result);
    return {
      success: false,
      message: result.message || "Something went wrong sending your message. Please try calling or emailing us directly.",
    };
  } catch (err) {
    console.error("Email send failed:", err);
    return {
      success: false,
      message: "Something went wrong. Please try calling or emailing us directly.",
    };
  }
}
