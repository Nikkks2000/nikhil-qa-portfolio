"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function move(e: MouseEvent) {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(
          500px circle at ${pos.x}px ${pos.y}px,
          rgba(62,207,142,.12),
          transparent 70%
        )`,
      }}
    />
  );
}
