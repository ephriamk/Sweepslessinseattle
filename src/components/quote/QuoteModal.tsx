"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { site } from "@/content/site";
import { useQuoteModal } from "@/contexts/quote-modal-context";
import { QuoteForm } from "./QuoteForm";

export function QuoteModal() {
  const { isOpen, close } = useQuoteModal();

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:opacity-100 data-[state=closed]:opacity-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-200" />
        <Dialog.Content
          className="data-[state=open]:opacity-100 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=closed]:scale-95 fixed top-1/2 left-1/2 z-50 max-h-[90vh] w-[min(100vw-2rem,36rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-none border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6 shadow-xl outline-none transition-[opacity,transform] duration-200"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Dialog.Title className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-[var(--sl-gold)] uppercase">
            Get Pricing
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-relaxed text-[var(--sl-muted)]">
            Fill out the form below and we&apos;ll follow up with a clear estimate.
          </Dialog.Description>

          <div className="mt-5">
            <QuoteForm onSuccess={close} />
          </div>

          <div className="accent-rule my-5" />

          <p className="text-center text-sm text-[var(--sl-muted)]">
            Prefer to talk?{" "}
            <a
              href={`tel:${site.phoneTel}`}
              className="font-medium text-[var(--sl-gold)] hover:underline"
            >
              Call {site.phoneDisplay}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${site.email}?subject=Pricing%20request`}
              className="font-medium text-[var(--sl-gold)] hover:underline"
            >
              email us
            </a>
          </p>

          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute top-4 right-4 rounded-lg p-1.5 text-[var(--sl-muted)] hover:bg-[var(--sl-wash)] hover:text-[var(--sl-ink)]"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
