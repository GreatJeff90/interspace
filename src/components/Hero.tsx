"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom smooth easeOut
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full pt-44 pb-0 flex flex-col items-center bg-black text-white overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute top-1/4 w-[500px] h-[350px] sm:w-[700px] sm:h-[450px] rounded-full bg-zinc-800/25 blur-[120px] -z-10"
      />

      {/* Top Headline & Actions */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center text-center px-4 max-w-3xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white mb-4 select-none"
        >
          Meet Interspace,
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-neutral-400 font-normal tracking-wide max-w-lg mb-8"
        >
          and discover connections you didn&apos;t know existed.
        </motion.p>

        {/* Pill Action Button */}
        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/login"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide shadow-xl hover:bg-neutral-200 transition-colors duration-200"
            >
              <SaturnIcon className="w-4 h-4 text-black" />
              <span>Launch App</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Clean Bust Sculpture with Rise + Idle Float */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl flex justify-center items-end mt-6 -mb-6 select-none pointer-events-none z-0"
      >
        {/* Subtle continuous floating motion */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[320px] h-[340px] sm:w-[460px] sm:h-[440px] lg:w-[520px] lg:h-[480px]"
        >
          <Image
            src="/hero-bus.png"
            alt="Interspace mind sculpture"
            fill
            priority
            className="object-contain object-bottom"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SaturnIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />
      <path
        d="M2.5 13.5c-.8-.7-.7-1.8.3-2.6 2.3-1.8 7-3.4 12.2-2.9 3.5.3 6.4 1.5 7.7 2.7.8.8.7 1.8-.3 2.6-2.3 1.8-7 3.4-12.2 2.9-3.5-.3-6.4-1.5-7.7-2.7z"
        stroke="currentColor"
        strokeWidth="1.75"
        fill="none"
      />
    </svg>
  );
}