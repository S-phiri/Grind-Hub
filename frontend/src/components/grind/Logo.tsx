interface LogoProps {
  variant: "lightning" | "dumbbell";
  className?: string;
  /** Size affects overall scale; use for nav (sm), footer (md), hero (lg) */
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-lg tracking-wider",
  md: "text-xl tracking-wider",
  lg: "text-3xl md:text-4xl tracking-wider",
};

const iconSizes = {
  sm: { w: 20, h: 28 },
  md: { w: 24, h: 32 },
  lg: { w: 40, h: 52 },
};

function LightningIcon({ size }: { size: "sm" | "md" | "lg" }) {
  const { w, h } = iconSizes[size];
  return (
    <svg
      viewBox="0 0 24 32"
      width={w}
      height={h}
      className="shrink-0 text-gold-primary"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M13 0L7 14h5l-3 18 11-14h-5L13 0z"
      />
    </svg>
  );
}

function DumbbellIcon({ size }: { size: "sm" | "md" | "lg" }) {
  const { w, h } = iconSizes[size];
  return (
    <svg
      viewBox="0 0 24 32"
      width={w}
      height={h}
      className="shrink-0 text-gold-primary"
      aria-hidden
    >
      <rect x={3} y={8} width={4} height={16} rx={1} fill="currentColor" opacity={0.9} />
      <rect x={10} y={0} width={4} height={32} rx={1} fill="currentColor" />
      <rect x={17} y={8} width={4} height={16} rx={1} fill="currentColor" opacity={0.9} />
    </svg>
  );
}

export default function Logo({ variant, className = "", size = "md" }: LogoProps) {
  const Icon = variant === "lightning" ? LightningIcon : DumbbellIcon;
  const sizeClass = sizeClasses[size];

  return (
    <span
      className={`inline-flex items-center justify-center gap-0.5 font-syne font-extrabold text-white uppercase ${sizeClass} ${className}`}
      style={{ letterSpacing: "0.08em" }}
    >
      <span>G</span>
      <span>R</span>
      <Icon size={size} />
      <span>N</span>
      <span>D</span>
    </span>
  );
}
