"use client";
import { usePathname } from "next/navigation";

const items = [
  "◈ TRUSTED HARDWARE & HOME SOLUTIONS IN NEPAL — SINCE 1998",
  "◈ FREE DELIVERY INSIDE KATHMANDU RING ROAD",
  "◈ 12,000+ PRODUCTS IN STOCK",
  "◈ PLUMBING · PAINT · TILES · MODULAR KITCHEN · FALSE CEILING",
];

export default function MarqueeBar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  const loop = [...items, ...items];

  return (
    <div className="bg-forest text-white font-accent text-xs tracking-[.04em] overflow-hidden whitespace-nowrap border-b border-black/15">
      <div
        className="inline-flex gap-12 py-2.5 will-change-transform"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {loop.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
