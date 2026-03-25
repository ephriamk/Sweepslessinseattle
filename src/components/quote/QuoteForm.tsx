"use client";

import { useState, useRef, useCallback } from "react";
import { services, site } from "@/content/site";

const inputClass =
  "w-full rounded-lg border border-[var(--sl-border)] bg-[var(--sl-surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--sl-muted)] outline-none transition focus:border-[var(--sl-gold)] focus:ring-1 focus:ring-[var(--sl-gold)]/30";

type FormStatus = { success: boolean; message: string } | null;

export function QuoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>(null);
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const reset = useCallback(() => {
    setSubmitted(false);
    setStatus(null);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const consent = formData.get("consent");

    if (!name || !email || !phone || !message) {
      setStatus({ success: false, message: "Please fill in all required fields." });
      setIsPending(false);
      return;
    }
    if (!consent) {
      setStatus({ success: false, message: "Please agree to the communication consent before submitting." });
      setIsPending(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ success: false, message: "Please enter a valid email address." });
      setIsPending(false);
      return;
    }

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus({ success: false, message: "Form is not configured. Please email us directly at Sweepslessinseattle@gmail.com." });
      setIsPending(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Pricing request from ${name}`,
          from_name: "Sweepsless in Seattle Website",
          name,
          email,
          phone,
          service: formData.get("service")?.toString().trim() || "Not specified",
          message,
          consent: "Yes \u2014 agreed to receive emails, texts, or phone calls",
        }),
      });

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        setStatus({
          success: false,
          message:
            "We couldn\u2019t reach the form service. Please call or email us directly at Sweepslessinseattle@gmail.com.",
        });
        return;
      }

      const result: { success?: boolean; message?: string } = await res.json();

      if (result.success) {
        formRef.current?.reset();
        setSubmitted(true);
        onSuccess?.();
      } else {
        setStatus({ success: false, message: result.message || "Something went wrong. Please try emailing us directly." });
      }
    } catch {
      setStatus({ success: false, message: "Network error. Please try calling or emailing us directly." });
    } finally {
      setIsPending(false);
    }
  }

  if (submitted) {
    return <SuccessView onReset={reset} />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="quote-name" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
          Name <span className="text-[var(--sl-gold)]">*</span>
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
            Phone <span className="text-[var(--sl-gold)]">*</span>
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="(210) 555-0000"
          />
        </div>
        <div>
          <label htmlFor="quote-email" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
            Email <span className="text-[var(--sl-gold)]">*</span>
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-service" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
          Service type
        </label>
        <select
          id="quote-service"
          name="service"
          className={inputClass + " appearance-none"}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="quote-message" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
          Message <span className="text-[var(--sl-gold)]">*</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          required
          rows={4}
          className={inputClass + " resize-y"}
          placeholder="Tell us about your home, timing, and any priorities..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="quote-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-[var(--sl-border)] accent-[var(--sl-gold)]"
        />
        <label htmlFor="quote-consent" className="text-xs leading-relaxed text-[var(--sl-muted)]">
          I agree to receive emails, texts or phone calls about the services I am inquiring about <span className="text-[var(--sl-gold)]">*</span>
        </label>
      </div>

      {status && !status.success && (
        <div
          role="alert"
          className="rounded-lg border border-[var(--sl-gold)]/20 bg-[var(--sl-gold)]/5 px-4 py-3 text-sm text-[var(--sl-gold)]"
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-arrow w-full justify-center border-2 border-[var(--sl-gold)] bg-[var(--sl-gold)] px-6 py-3.5 font-[family-name:var(--font-display)] text-base tracking-[0.15em] text-[var(--sl-night)] uppercase transition hover:bg-transparent hover:text-[var(--sl-gold)] disabled:opacity-60"
      >
        {isPending ? "Sending\u2026" : "Submit"}
      </button>
    </form>
  );
}

function SuccessView({ onReset }: { onReset: () => void }) {
  return (
    <div className="success-view flex flex-col items-center py-12 text-center">
      {/* Animated checkmark circle */}
      <div className="success-ring relative flex h-24 w-24 items-center justify-center">
        <svg className="success-check" viewBox="0 0 52 52" width="96" height="96">
          <circle
            className="success-circle"
            cx="26" cy="26" r="24"
            fill="none"
            stroke="var(--sl-gold)"
            strokeWidth="2"
          />
          <path
            className="success-tick"
            fill="none"
            stroke="var(--sl-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 27l7 7 16-16"
          />
        </svg>
        {/* Sparkle bursts */}
        <span className="success-sparkle success-sparkle-1" />
        <span className="success-sparkle success-sparkle-2" />
        <span className="success-sparkle success-sparkle-3" />
        <span className="success-sparkle success-sparkle-4" />
        <span className="success-sparkle success-sparkle-5" />
        <span className="success-sparkle success-sparkle-6" />
      </div>

      <h3 className="success-text mt-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-[var(--sl-ink)] uppercase md:text-4xl">
        Request sent
      </h3>
      <p className="success-text-delay mt-4 max-w-sm text-base leading-relaxed text-[var(--sl-muted)]">
        Thank you! We&apos;ll review your details and be in touch within a few hours.
      </p>
      <p className="success-text-delay mt-2 text-sm text-[var(--sl-muted)]">
        Questions in the meantime? Call us at{" "}
        <a href={`tel:${site.phoneTel}`} className="font-medium text-[var(--sl-gold)] hover:underline">
          {site.phoneDisplay}
        </a>
      </p>

      <button
        type="button"
        onClick={onReset}
        className="success-text-delay mt-8 text-sm font-bold tracking-[0.1em] text-[var(--sl-gold)] uppercase transition hover:text-[var(--sl-accent)]"
      >
        Submit another request
      </button>
    </div>
  );
}
