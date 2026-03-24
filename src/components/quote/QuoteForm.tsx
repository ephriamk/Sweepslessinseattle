"use client";

import { useActionState } from "react";
import { useRef } from "react";
import { sendQuoteRequest, type QuoteFormState } from "@/app/actions/send-quote";
import { services } from "@/content/site";

const inputClass =
  "w-full rounded-lg border border-[var(--sl-border)] bg-[var(--sl-surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--sl-muted)] outline-none transition focus:border-[var(--sl-red)] focus:ring-1 focus:ring-[var(--sl-red)]/30";

export function QuoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, action, isPending] = useActionState<QuoteFormState, FormData>(
    async (prev, formData) => {
      const result = await sendQuoteRequest(prev, formData);
      if (result?.success) {
        formRef.current?.reset();
        onSuccess?.();
      }
      return result;
    },
    null,
  );

  return (
    <form ref={formRef} action={action} className="space-y-4">
      <div>
        <label htmlFor="quote-name" className="mb-1.5 block text-sm font-medium text-[var(--sl-ink)]">
          Name <span className="text-[var(--sl-red)]">*</span>
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
            Phone <span className="text-[var(--sl-red)]">*</span>
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
            Email <span className="text-[var(--sl-red)]">*</span>
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
          Message <span className="text-[var(--sl-red)]">*</span>
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
          className="mt-1 h-4 w-4 rounded border-[var(--sl-border)] accent-[var(--sl-red)]"
        />
        <label htmlFor="quote-consent" className="text-xs leading-relaxed text-[var(--sl-muted)]">
          I agree to receive emails, texts or phone calls about the services I am inquiring about <span className="text-[var(--sl-red)]">*</span>
        </label>
      </div>

      {state && (
        <div
          role="alert"
          className={`rounded-lg border px-4 py-3 text-sm ${
            state.success
              ? "border-[var(--sl-border)] bg-[var(--sl-wash)] text-[var(--sl-ink)]"
              : "border-[var(--sl-red)]/20 bg-[var(--sl-red)]/5 text-[var(--sl-red)]"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-arrow w-full justify-center border-2 border-[var(--sl-red)] bg-[var(--sl-red)] px-6 py-3.5 font-[family-name:var(--font-display)] text-base tracking-[0.15em] text-[var(--background)] uppercase transition hover:bg-transparent hover:text-[var(--sl-red)] disabled:opacity-60"
      >
        {isPending ? "Sending\u2026" : "Submit"}
      </button>
    </form>
  );
}
