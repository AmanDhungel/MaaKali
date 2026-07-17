"use client";
import { ElementType, HTMLAttributes, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  index?: number;
  className?: string;
}

export default function Reveal({
  children,
  as: Tag = "div",
  index = 0,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const ref = useReveal<HTMLElement>();

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as any}
      data-reveal=""
      className={className}
      style={{ transitionDelay: `${Math.min(index, 7) * 70}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
