"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

export default function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function move(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }

  function leave() {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px,0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="inline-block transition-transform duration-300"
    >
      {children}
    </div>
  );
}
