import type { ReactNode } from 'react';

// Line icons drawn on a 24x24 grid; strokes use the shared violet gradient from <TechStrokeDefs />.
const ICONS = {
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  neural: (
    <>
      <circle cx="5" cy="6" r="1.8" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="6" r="1.8" />
      <circle cx="19" cy="18" r="1.8" />
      <path d="M6.6 7l3.7 3.8M6.6 17l3.7-3.8M13.7 10.8L17.4 7M13.7 13.2l3.7 3.8M5 7.8v8.4M19 7.8v8.4" />
    </>
  ),
  code: <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 5l-3 14" />,
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M7 10l3 2.5L7 15M12.5 15.5H17" />
    </>
  ),
  spark: (
    <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7zM19 16.5c.25 1.6.9 2.25 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5z" />
  ),
  hex: (
    <>
      <path d="M9 3.5l5 2.9v5.8l-5 2.9-5-2.9V6.4z" />
      <path d="M16 11.5l4 2.3v4.6l-4 2.3-4-2.3v-4.6z" />
    </>
  ),
  signal: (
    <>
      <circle cx="6" cy="18" r="1.6" />
      <path d="M5 12.5a6.5 6.5 0 0 1 6.5 6.5M5 7a12 12 0 0 1 12 12" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4 4 0 0 1-.6-7.95A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9z" />
      <path d="M10 14.5l1.5 1.5 3-3" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type TechItem =
  | { kind: 'icon'; icon: keyof typeof ICONS }
  | { kind: 'glyph'; text: string }
  | { kind: 'code'; parts: [string, string] };

export function TechStrokeDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="tech-stroke" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ddd6fe" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function TechBadge({ item }: { item: TechItem }) {
  if (item.kind === 'icon') {
    return (
      <div className="tech-tile">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#tech-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[item.icon]}
        </svg>
      </div>
    );
  }
  if (item.kind === 'glyph') return <span className="tech-glyph">{item.text}</span>;
  return (
    <div className="tech-code">
      <span className="dot" />
      <span>
        <span className="kw">{item.parts[0]}</span> {item.parts[1]}
      </span>
      <span className="caret" />
    </div>
  );
}
