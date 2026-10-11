"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const plans = [
  {
    name: "Starter",
    badge: "STARTER",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "/month",
    subtitle: "Perfect For Small Teams & Individuals",
    cta: "Launch Workspace",
    href: "/login",
    popular: false,
    // Accent: Electric Violet / Indigo
    accentBorder: "hover:border-indigo-500/40",
    headerBg: "bg-zinc-900/70 border-zinc-800/80",
    badgeStyle: "bg-indigo-950/40 text-indigo-300 border-indigo-500/30",
    checkBg: "bg-indigo-950/50 text-indigo-400 border-indigo-500/40",
    btnStyle:
      "bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-850 border-zinc-700/80 hover:border-indigo-500/50",
  },
  {
    name: "Professional",
    badge: "PROFESSIONAL",
    monthlyPrice: "$99",
    annualPrice: "$79",
    period: "/month",
    subtitle: "Perfect For Growing Engineering Teams",
    cta: "Start 14-Day Free Trial",
    href: "/login",
    popular: true,
    // Accent: Cyan / Sky (Hero Card)
    accentBorder: "border-cyan-500/50 shadow-2xl shadow-cyan-500/10",
    headerBg:
      "bg-gradient-to-br from-cyan-950/40 via-zinc-900/80 to-zinc-950 border-cyan-500/40 shadow-inner",
    badgeStyle: "bg-cyan-950/60 text-cyan-300 border-cyan-500/40 shadow-sm",
    checkBg: "bg-cyan-950/50 text-cyan-400 border-cyan-500/40",
    btnStyle:
      "bg-white text-zinc-950 hover:bg-zinc-200 border-white hover:shadow-lg shadow-cyan-500/10 font-bold",
  },
  {
    name: "Enterprise",
    badge: "ENTERPRISE",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "",
    subtitle: "For Large Organizations & Scale",
    cta: "Contact Architecture",
    href: "#contact",
    popular: false,
    // Accent: Emerald / Mint
    accentBorder: "hover:border-emerald-500/40",
    headerBg: "bg-zinc-900/70 border-zinc-800/80",
    badgeStyle: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30",
    checkBg: "bg-emerald-950/50 text-emerald-400 border-emerald-500/40",
    btnStyle:
      "bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-850 border-zinc-700/80 hover:border-emerald-500/50",
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

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const starterFeatures = [
    "Up to 3 Active In-Browser Personas",
    "Sub-15ms Live Peer Messaging",
    "Ephemeral RAM Session Storage",
    "Community & WebRTC Support",
  ];

  const proFeatures = [
    "Unlimited Concurrent Multi-Accounts",
    "E2EE Group Video Calls (Mesh Relay)",
    "Autonomous In-App AI Triage Agent",
    "Custom Vanity Handles (space.link/@team)",
    "Risk-Free 30-Day Money-Back Guarantee",
  ];

  const enterpriseFeatures = [
    "Dedicated WebSocket & STUN/TURN Clusters",
    "Unlimited Autonomous AI Bots Fleet",
    "Custom Domain & Identity SSO (SAML/OAuth)",
    "Self-Hosted Node / Private Cloud Deploy",
    "24/7 Dedicated Priority Engineering SLA",
  ];

  const planFeatures = [starterFeatures, proFeatures, enterpriseFeatures];

  return (
    <section
      id="pricing"
      className="relative w-full bg-zinc-950 py-28 px-6 text-zinc-100 border-b border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-zinc-800/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          

          <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-white mb-3">
            Pricing plans
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-md mb-8">
            Choose the right plan for your team and scale with zero friction.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-inner backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                !annual
                  ? "bg-white text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                annual
                  ? "bg-white text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Annual (save 20%)
            </button>
          </div>
        </motion.div>

        {/* 3-Card Animated Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {plans.map((plan, i) => {
            const displayPrice = annual ? plan.annualPrice : plan.monthlyPrice;
            const features = planFeatures[i];

            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`relative rounded-[32px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 border bg-zinc-900/40 backdrop-blur-md ${
                  plan.popular
                    ? `bg-zinc-900/60 ${plan.accentBorder}`
                    : `border-zinc-800/80 ${plan.accentBorder}`
                }`}
              >
                {/* Top Inset Header Container */}
                <div
                  className={`relative rounded-[24px] p-6 sm:p-7 flex flex-col justify-between min-h-[260px] border transition-all ${plan.headerBg}`}
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block text-[11px] font-mono font-semibold tracking-wider px-3 py-1 rounded-full border ${plan.badgeStyle}`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price Display with AnimatePresence effect */}
                  <div className="my-2">
                    <div className="flex items-baseline gap-1">
                      <motion.span
                        key={displayPrice}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white"
                      >
                        {displayPrice}
                      </motion.span>
                      {plan.period && (
                        <span className="text-xs sm:text-sm font-mono text-zinc-400">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 font-normal">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Action Button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={plan.href}
                      className={`mt-4 w-full py-3 rounded-full text-xs tracking-wide text-center transition-all duration-200 border flex items-center justify-center shadow-md ${plan.btnStyle}`}
                    >
                      {plan.cta}
                    </Link>
                  </motion.div>
                </div>

                {/* Bottom Feature Checklist */}
                <div className="pt-8 pb-4 px-3 flex-1 flex flex-col justify-start">
                  <ul className="space-y-3.5">
                    {features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed"
                      >
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${plan.checkBg}`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}