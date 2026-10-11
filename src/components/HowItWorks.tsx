"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { UserPlus, Settings, Send } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Register",
    desc: "Generate your cryptographic handle and spin up multiple team or personal aliases in seconds.",
    icon: UserPlus,
    // Unique color: Electric Violet / Indigo
    activeGlow: "shadow-2xl shadow-indigo-500/25 border-indigo-500/60",
    activeBadge: "bg-indigo-500 text-white shadow-lg shadow-indigo-500/35",
    inactiveBadge: "bg-neutral-900 text-indigo-400 border border-neutral-800 group-hover:border-indigo-500/40",
    stepPill: "text-indigo-300 border-indigo-500/40 bg-neutral-900/90",
  },
  {
    step: 2,
    title: "Complete Setup",
    desc: "Configure multi-session isolation, link notification channels, and customize in-browser chat preferences.",
    icon: Settings,
    // Unique color: Cyan / Sky
    activeGlow: "shadow-2xl shadow-cyan-500/25 border-cyan-500/60",
    activeBadge: "bg-cyan-400 text-neutral-950 shadow-lg shadow-cyan-500/35",
    inactiveBadge: "bg-neutral-900 text-cyan-400 border border-neutral-800 group-hover:border-cyan-500/40",
    stepPill: "text-cyan-300 border-cyan-500/40 bg-neutral-900/90",
  },
  {
    step: 3,
    title: "Utilize App",
    desc: "Invite teammates, dispatch instant messages, launch video calls, and seamlessly switch workspaces.",
    icon: Send,
    // Unique color: Emerald / Neon Green
    activeGlow: "shadow-2xl shadow-emerald-500/25 border-emerald-500/60",
    activeBadge: "bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/35",
    inactiveBadge: "bg-neutral-900 text-emerald-400 border border-neutral-800 group-hover:border-emerald-500/40",
    stepPill: "text-emerald-300 border-emerald-500/40 bg-neutral-900/90",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#0A0A0A] py-28 px-6 text-white border-b border-neutral-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Header Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-xl mb-24"
        >
          {/* Spark Emblem */}
          <div className="mb-4 flex justify-center">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-7 h-7 text-neutral-400"
            >
              <path
                d="M16 4l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3zM23 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM9 17l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM16 21l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white mb-3">
            Learn More About Process
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            Everything you need to initiate live conversations and orchestrate multiple sessions with zero setup friction.
          </p>
        </motion.div>

        {/* 3-Step Process Track */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start"
        >
          {/* Connector 1 -> 2: Downward curve (Silver / Pure White Dashed) */}
          <div className="hidden md:block absolute top-[64px] left-[26%] w-[18%] -translate-y-1/2 pointer-events-none z-0">
            <svg viewBox="0 0 100 35" fill="none" className="w-full h-10 overflow-visible">
              <motion.path
                d="M 5,5 Q 50,38 95,5"
                stroke="#E2E8F0"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.85"
                fill="none"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 1.2,
                }}
              />
            </svg>
          </div>

          {/* Connector 2 -> 3: Upward curve (Silver / Pure White Dashed) */}
          <div className="hidden md:block absolute top-[64px] left-[59%] w-[18%] -translate-y-1/2 pointer-events-none z-0">
            <svg viewBox="0 0 100 35" fill="none" className="w-full h-10 overflow-visible">
              <motion.path
                d="M 5,28 Q 50,-5 95,28"
                stroke="#E2E8F0"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.85"
                fill="none"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 1.2,
                }}
              />
            </svg>
          </div>

          {steps.map((item) => {
            const Icon = item.icon;
            const isSelected = activeStep === item.step;

            return (
              <motion.div
                key={item.step}
                variants={cardVariants}
                onClick={() => setActiveStep(item.step)}
                className="relative z-10 flex flex-col items-center text-center cursor-pointer group"
              >
                {/* Node Outer Container */}
                <div className="relative mb-8">
                  {/* Step Pill */}
                  <span
                    className={`absolute -top-2 left-2 z-20 text-[11px] font-mono font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-colors duration-300 ${
                      isSelected
                        ? item.stepPill
                        : "text-neutral-400 bg-neutral-900 border border-neutral-700"
                    }`}
                  >
                    {item.step}
                  </span>

                  {/* Circular Node */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-all duration-300 bg-neutral-950 ${
                      isSelected
                        ? `border-2 ${item.activeGlow}`
                        : "border border-dashed border-neutral-800 hover:border-neutral-600 shadow-sm"
                    }`}
                  >
                    {/* Inner Icon Badge */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected ? item.activeBadge : item.inactiveBadge
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                    </div>
                  </motion.div>
                </div>

                {/* Step Headline */}
                <h3 className="text-lg font-medium text-white mb-2 transition-colors group-hover:text-neutral-200">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-neutral-400 max-w-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}