type SectionPatternDividerProps = {
  tone?: "brand" | "blue" | "orange" | "turquoise";
};

const tones = {
  brand: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--turquoise))"],
  blue: ["hsl(var(--primary))", "hsl(var(--primary))", "hsl(var(--turquoise))"],
  orange: ["hsl(var(--accent))", "hsl(var(--primary))", "hsl(var(--turquoise))"],
  turquoise: ["hsl(var(--turquoise))", "hsl(var(--primary))", "hsl(var(--accent))"],
};

export const SectionPatternDivider = ({ tone = "brand" }: SectionPatternDividerProps) => {
  const [primary, accent, turquoise] = tones[tone];

  return (
    <div className="relative z-20 -my-px flex h-14 items-center justify-center overflow-hidden bg-transparent md:h-16" aria-hidden="true">
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <svg className="relative h-full w-full max-w-5xl" viewBox="0 0 900 64" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={`woven-pattern-${tone}`} width="26" height="34" patternUnits="userSpaceOnUse">
            <path d="M3 30 16 4c3-6 12-3 11 4l-1 7 12 10-8 8-14-12-5 12Z" fill="currentColor" />
            <path d="M2 10 13 2l8 5-10 13Z" fill="currentColor" opacity="0.85" />
            <path d="M17 31 29 19l7 5-8 13Z" fill="currentColor" opacity="0.9" />
          </pattern>
        </defs>

        <g opacity="0.95">
          <rect x="330" y="8" width="18" height="48" rx="7" fill={primary} />
          <rect x="356" y="8" width="18" height="48" rx="7" fill={primary} />
          <rect x="382" y="8" width="18" height="48" rx="7" fill={accent} />
          <rect x="408" y="8" width="18" height="48" rx="7" fill={turquoise} />
          <rect x="434" y="8" width="18" height="48" rx="7" fill={primary} />
          <rect x="460" y="8" width="18" height="48" rx="7" fill={accent} />
          <rect x="486" y="8" width="18" height="48" rx="7" fill={turquoise} />
          <rect x="512" y="8" width="18" height="48" rx="7" fill={primary} />
        </g>

        <g className="text-white" opacity="0.92">
          <rect x="332" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
          <rect x="358" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
          <rect x="384" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
          <rect x="410" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
          <rect x="436" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
          <rect x="462" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
          <rect x="488" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
          <rect x="514" y="10" width="14" height="44" rx="6" fill={`url(#woven-pattern-${tone})`} />
        </g>
      </svg>
    </div>
  );
};
