interface EyebrowProps {
  index: string;
  label: string;
  dark?: boolean;
  className?: string;
}

export default function Eyebrow({ index, label, dark, className = "" }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-3.5 mb-4 ${className}`}>
      <span className={`font-accent text-[13px] ${dark ? "text-mint" : "text-forest"}`}>
        / {index}
      </span>
      <span
        className={`font-accent text-xs tracking-[.2em] ${
          dark ? "text-white/70" : "text-ink"
        }`}
      >
        {label}
      </span>
      <span className={`h-px w-16 ${dark ? "bg-white/25" : "bg-ink/20"}`} />
    </div>
  );
}
