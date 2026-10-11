"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Lefkovits",
    role: "Chairman & Co-Founder",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote:
      "So, I have worked with the Interspace team across multiple remote markets. Switching between 6 distinct support aliases without logging in and out saved our technical leads over 18 hours every week.",
  },
  {
    id: 2,
    name: "Shannon Failla",
    role: "Director at Cardinal Group",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote:
      "Certainly, after having evaluated multiple realtime communications layers and WebRTC relays, we have finally landed on a winner. The sub-15ms sync speed is completely unmatched.",
  },
  {
    id: 3,
    name: "Jingbo Shan",
    role: "Product Lead at H-Systems",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    quote:
      "During the last 2 quarters, Interspace has remained remarkably reliable and seamless. The in-browser multi-tenant personas and automated AI agents accelerated our user response metrics by 4x.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-zinc-950 py-28 px-6 text-zinc-100 border-b border-zinc-900 overflow-hidden"
    >
      {/* Background ambient silver/white glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center sm:text-left"
        >
          {/* Pill Tag */}
          
          <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-white">
            Client&apos;s Say
          </h2>
        </motion.div>

        {/* Testimonials 3-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12"
        >
          {testimonials.map((item, index) => {
            const isFeatured = activeIndex === index;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`relative rounded-3xl p-8 flex flex-col items-center text-center justify-between cursor-pointer transition-all duration-300 border backdrop-blur-md ${
                  isFeatured
                    ? "bg-zinc-900/80 border-zinc-500/60 shadow-2xl shadow-zinc-400/10 md:-translate-y-2 ring-1 ring-zinc-500/20"
                    : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700/80 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Avatar with Overlapping Silver/White Quote Badge */}
                <div className="relative mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-700/80 shadow-md">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Silver Quote Badge */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-zinc-100 text-zinc-950 flex items-center justify-center shadow-lg border border-zinc-800">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.547-3.923 3.652-3.923 4.887 0 .341.05.682.152 1.022.61-.34 1.322-.511 2.138-.511 2.14 0 3.71 1.478 3.71 3.514 0 2.251-1.782 3.887-3.922 3.887-1.528 0-2.748-.682-3.497-1.679zm11 0C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.547-3.923 3.652-3.923 4.887 0 .341.05.682.152 1.022.61-.34 1.322-.511 2.138-.511 2.14 0 3.71 1.478 3.71 3.514 0 2.251-1.782 3.887-3.922 3.887-1.528 0-2.748-.682-3.497-1.679z" />
                    </svg>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-8 max-w-xs">
                  {item.quote}
                </p>

                {/* Silver Accent Divider & Author Info */}
                <div className="w-full flex flex-col items-center">
                  <div
                    className={`w-8 h-0.5 rounded-full mb-4 transition-colors duration-300 ${
                      isFeatured ? "bg-zinc-300 shadow-sm shadow-zinc-200/50" : "bg-zinc-700"
                    }`}
                  />
                  <h3 className="text-sm font-semibold text-white tracking-tight mb-0.5">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-6 bg-zinc-200 shadow-sm shadow-zinc-200/30"
                  : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}