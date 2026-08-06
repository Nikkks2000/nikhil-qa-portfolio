"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      const percent = (scrollTop / height) * 100;
      setProgress(percent);
    }

    window.addEventListener("scroll", update);
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full bg-accent transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
