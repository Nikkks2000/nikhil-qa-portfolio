"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    setDesktop(window.matchMedia("(pointer:fine)").matches);

    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!desktop) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] h-10 w-10 rounded-full border border-accent/60 transition-all duration-100"
        style={{
          left: pos.x - 20,
          top: pos.y - 20,
        }}
      />

      <div
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-accent"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
        }}
      />
    </>
  );
}
