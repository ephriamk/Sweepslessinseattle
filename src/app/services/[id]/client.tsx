"use client";

import Link from "next/link";

export function ServicePageClient() {
  return (
    <Link
      href="/get-pricing"
      className="btn-arrow mt-10 inline-flex border-2 border-[var(--sl-gold)] bg-[var(--sl-gold)] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-[var(--sl-night)] uppercase transition hover:bg-transparent hover:text-[var(--sl-gold)]"
    >
      Get pricing for this service <span aria-hidden>&rarr;</span>
    </Link>
  );
}
