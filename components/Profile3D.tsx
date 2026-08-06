"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile3D() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        rotateY: -12,
        rotateX: 8,
        scale: 1.05,
        y: -15,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1600,
      }}
      className="group relative h-[430px] w-[500px] cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute -inset-8 -z-20 rounded-full bg-accent/30 blur-[90px] transition-all duration-500 group-hover:bg-accent/50" />

      {/* Animated Border */}
      <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-br from-accent via-cyan-400 to-violet-500 p-[2px]">
        <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-surface shadow-[0_35px_80px_rgba(0,0,0,.45)]">
          {/* Image */}
          <Image
            src="/profile.png"
            alt="Nikhil Patil"
            fill
            priority
            className="object-cover object-top transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          {/* Shine */}
          <motion.div
            animate={{
              x: ["-150%", "180%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-20 rotate-12 bg-white/20 blur-xl"
          />

          {/* Badge */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute right-4 top-4 rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400 backdrop-blur-md"
          >
            ● Available
          </motion.div>

          {/* Bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{
              transform: "translateZ(40px)",
            }}
          >
            <h2 className="text-3xl font-bold text-white">Nikhil Patil</h2>

            <p className="mt-2 font-mono text-sm tracking-wider text-accent">
              QA Engineer • Automation Tester
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Selenium", "Playwright", "API Testing"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-cyan-400 to-violet-500" />
        </div>
      </div>
    </motion.div>
  );
}
