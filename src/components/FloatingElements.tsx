"use client";

/**
 * Floating stars & hearts — subtle romantic 90s magic.
 * Renders twinkling stars and drifting hearts across a section.
 */
export function FloatingStars({ count = 12 }: { count?: number }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${(i * 37 + 11) % 90}%`,
    left: `${(i * 53 + 7) % 95}%`,
    dur: `${2.5 + (i % 5) * 0.8}s`,
    delay: `${(i * 0.7) % 4}s`,
    size: i % 3 === 0 ? 3 : 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="star-field-dot"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            ["--dur" as string]: s.dur,
            ["--delay" as string]: s.delay,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingHearts({ count = 5 }: { count?: number }) {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${10 + (i * 19) % 80}%`,
    bottom: `${-5 - (i * 3)}%`,
    dur: `${10 + (i % 4) * 3}s`,
    delay: `${i * 2.5}s`,
    size: 10 + (i % 3) * 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-el floating-heart"
          style={{
            left: h.left,
            bottom: h.bottom,
            fontSize: h.size,
            ["--dur" as string]: h.dur,
            ["--delay" as string]: h.delay,
          }}
        >
          &#9829;
        </span>
      ))}
    </div>
  );
}

/** Tiny Empire State Building silhouette — a nod to the movie */
export function EmpireStateSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 200"
      className={`esb-silhouette ${className}`}
      aria-hidden
      fill="currentColor"
    >
      <rect x="26" y="0" width="8" height="20" />
      <rect x="28" y="20" width="4" height="10" />
      <rect x="20" y="30" width="20" height="8" />
      <rect x="15" y="38" width="30" height="10" />
      <rect x="18" y="48" width="24" height="60" />
      <rect x="12" y="108" width="36" height="8" />
      <rect x="8" y="116" width="44" height="84" />
    </svg>
  );
}

/** Gold ornamental divider with optional center icon */
export function OrnamentDivider({ icon = "\u2726" }: { icon?: string }) {
  return (
    <div className="ornament-divider my-8" aria-hidden>
      <span className="text-sm text-[var(--sl-gold)]">{icon}</span>
    </div>
  );
}
