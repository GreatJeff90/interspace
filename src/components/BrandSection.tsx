"use client";

import { motion } from "framer-motion";

function TechStackList() {
  return (
    <div className="flex items-center gap-12 sm:gap-16 md:gap-20 shrink-0 px-8">
      {/* Next.js */}
      <div className="flex items-center gap-2.5 text-zinc-200 hover:text-white transition-colors">
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current">
          <circle cx="90" cy="90" r="90" className="fill-zinc-800" />
          <path
            d="M149.508 157.52L69.142 54H54v71.97h12.195V69.378l71.493 92.427c3.967-1.396 7.915-3.087 11.82-5.285z"
            className="fill-zinc-100"
          />
          <path d="M115.805 54h12.195v46.064l-12.195-15.753V54z" className="fill-zinc-100" />
        </svg>
        <span className="font-semibold text-sm sm:text-base tracking-tight font-sans">
          Next.js
        </span>
      </div>

      {/* React */}
      <div className="flex items-center gap-2 text-zinc-200 hover:text-white transition-colors">
        <svg
          viewBox="-11.5 -10.232 23 20.463"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="1"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
        <span className="font-semibold text-sm sm:text-base tracking-tight font-sans">
          React
        </span>
      </div>

      {/* TypeScript */}
      <div className="flex items-center gap-2 text-zinc-200 hover:text-white transition-colors">
        <div className="w-5 h-5 bg-zinc-800 border border-zinc-700 text-zinc-100 rounded-[4px] flex items-center justify-center font-bold text-[10px] tracking-tighter">
          TS
        </div>
        <span className="font-semibold text-sm sm:text-base tracking-tight font-sans">
          TypeScript
        </span>
      </div>

      {/* Tailwind CSS */}
      <div className="flex items-center gap-2 text-zinc-200 hover:text-white transition-colors">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
        </svg>
        <span className="font-semibold text-sm sm:text-base tracking-tight font-sans">
          Tailwind CSS
        </span>
      </div>

      {/* Supabase */}
      <div className="flex items-center gap-2 text-zinc-200 hover:text-white transition-colors">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M11.35 1.05C11.66.45 12.5.45 12.8.98L22.68 18.1c.36.63-.09 1.42-.82 1.42H12.4v3.43c0 .5-.6.76-.97.43L1.57 14.77a.9.9 0 0 1 .15-1.42l9.63-12.3z" />
        </svg>
        <span className="font-semibold text-sm sm:text-base tracking-tight font-sans">
          Supabase
        </span>
      </div>

      {/* Framer Motion */}
      <div className="flex items-center gap-2 text-zinc-200 hover:text-white transition-colors">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
        <span className="font-semibold text-sm sm:text-base tracking-tight font-sans">
          Framer Motion
        </span>
      </div>

      {/* WebRTC */}
      <div className="flex items-center gap-2 text-zinc-200 hover:text-white transition-colors">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
          <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
          <path d="M4.93 19.07a10 10 0 0 0 14.14 0" />
          <path d="M7.76 16.24a6 6 0 0 0 8.48 0" />
        </svg>
        <span className="font-semibold text-sm sm:text-base tracking-tight font-sans">
          WebRTC
        </span>
      </div>
    </div>
  );
}

export default function BrandSection() {
  return (
    <section className="relative w-full bg-zinc-950 py-6 sm:py-8 overflow-hidden border-y border-zinc-800/80">
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 px-4">
        {/* Avatars */}
        <div className="flex -space-x-2 overflow-hidden">
          <div className="inline-flex h-7 w-7 rounded-full ring-2 ring-zinc-950 bg-zinc-700 text-zinc-200 text-[10px] font-bold items-center justify-center">
            P
          </div>
          <div className="inline-flex h-7 w-7 rounded-full ring-2 ring-zinc-950 bg-zinc-800 text-zinc-300 text-[10px] font-bold items-center justify-center">
            A
          </div>
          <div className="inline-flex h-7 w-7 rounded-full ring-2 ring-zinc-950 bg-zinc-850 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-bold items-center justify-center">
            M
          </div>
          <div className="inline-flex h-7 w-7 rounded-full ring-2 ring-zinc-950 bg-zinc-800 text-zinc-300 text-[10px] font-bold items-center justify-center">
            +3k
          </div>
        </div>

        {/* Text and Pulse */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <p className="text-xs sm:text-sm font-medium tracking-tight text-zinc-300">
            Join over <span className="font-semibold text-white">3,000+ users</span>
          </p>
          <span className="text-zinc-700">|</span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
            Powered by
          </span>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Soft Side Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        {/* Infinite Sliding Track */}
        <motion.div
          className="flex w-max select-none opacity-80 hover:opacity-100 transition-opacity cursor-default"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          <TechStackList />
          <TechStackList />
          <TechStackList />
          <TechStackList />
        </motion.div>
      </div>
    </section>
  );
}