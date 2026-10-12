"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Terminal, Rocket } from "lucide-react";

const STACKS = [
  {
    icon: ShieldCheck,
    tag: "Privacy & Security",
    title: "People Who Want Secure Chatrooms",
    description:
      "Users and teams who need genuinely private communication without data harvesting, invasive tracking, or leaked conversation logs.",
    points: [
      "End-to-end encrypted rooms",
      "Ephemeral, self-destructing messages",
      "Zero phone number or identity requirements",
    ],
  },
  {
    icon: Terminal,
    tag: "Plug & Play",
    title: "Devs Adding Chat to Their Platforms",
    description:
      "Engineers who want to drop real-time messaging, threads, and presence into existing apps without maintaining custom WebSocket backends.",
    points: [
      "Lightweight SDKs and clean APIs",
      "Pre-built, modular UI primitives",
      "Instant multi-session isolation",
    ],
  },
  {
    icon: Rocket,
    tag: "Next-Gen Products",
    title: "Founders Building Chat-First Apps",
    description:
      "Teams creating dedicated communication tools, AI agent workspaces, or collaborative networks who need battle-tested infrastructure from day one.",
    points: [
      "Sub-50ms global message delivery",
      "Built-in AI agent integrations",
      "Scales from prototype to production load",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhoIsItFor() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#060709] text-zinc-100 overflow-hidden border-t border-white/5">
      {/* Animated subtle pulsing background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600 blur-[130px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Who is it for?
          </h2>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Engineered to handle private conversations, embedded messaging, and full-scale chat platforms.
          </p>
        </motion.div>

        {/* 3-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {STACKS.map((stack, idx) => {
            const Icon = stack.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl p-7 bg-[#0c0d12] border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-blue-500/5"
              >
                {/* Subtle top border gradient glow on hover */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />

                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600/15 group-hover:border-blue-500/30 group-hover:scale-105">
                      <Icon className="w-5 h-5 text-zinc-200 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors">
                      {stack.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-blue-50 transition-colors">
                    {stack.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {stack.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="border-t border-white/5 pt-4 space-y-2">
                  {stack.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-center gap-2 text-xs text-zinc-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}