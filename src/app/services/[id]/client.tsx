"use client";

import Link from "next/link";

export function ServicePageClient() {
  return (
    <Link
      href="/get-pricing"
      className="btn-arrow mt-10 inline-flex border-2 border-[var(--sl-red)] bg-[var(--sl-red)] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-[var(--background)] uppercase transition hover:bg-transparent hover:text-[var(--sl-red)]"
    >
      Get pricing for this service <span aria-hidden>&rarr;</span>
    </Link>
  );
}
