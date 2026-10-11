"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { 
  BookOpen, 
  ArrowUpRight, 
  Terminal, 
  Layers, 
  Bot, 
  Zap, 
  Copy, 
  Check, 
  Code2 
} from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Sub-15ms Live Messaging",
    desc: "Deploy bidirectional WebSocket & WebRTC pipelines into any React, Vue, or native iOS/Android application.",
    tag: "Realtime Engine",
    color: "text-indigo-400 group-hover:text-indigo-300",
    borderHover: "hover:border-indigo-500/40",
    badgeGlow: "group-hover:border-indigo-500/30 group-hover:bg-indigo-950/20",
    pillTag: "text-indigo-300 border-indigo-500/30 bg-indigo-950/30",
  },
  {
    icon: Layers,
    title: "Multi-Account Session Fabric",
    desc: "Isolate user states programmatically. Allow clients to switch team, enterprise, and burner aliases without re-authenticating.",
    tag: "Session Mesh",
    color: "text-cyan-400 group-hover:text-cyan-300",
    borderHover: "hover:border-cyan-500/40",
    badgeGlow: "group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20",
    pillTag: "text-cyan-300 border-cyan-500/30 bg-cyan-950/30",
  },
  {
    icon: Bot,
    title: "Autonomous In-App AI Bots",
    desc: "Spin up LLM customer triage assistants, auto-summarizers, and instant smart-reply workflows via unified webhooks.",
    tag: "AI Agents",
    color: "text-emerald-400 group-hover:text-emerald-300",
    borderHover: "hover:border-emerald-500/40",
    badgeGlow: "group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20",
    pillTag: "text-emerald-300 border-emerald-500/30 bg-emerald-950/30",
  },
];

const quickstartCode = `// Install Interspace Client SDK
npm install @interspace/client

import { Interspace } from "@interspace/client";

const space = new Interspace({ 
  apiKey: "pk_live_interspace_99" 
});

// Mount live multi-tenant channel listener
const room = space.channel("workspace_alpha");
room.on("message.dispatch", (msg) => {
  console.log("Realtime payload sync:", msg);
});`;

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function DeveloperApi() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(quickstartCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="docs"
      className="relative w-full bg-zinc-950 py-28 px-6 text-zinc-100 border-b border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting matching Hero / HowItWorks */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-zinc-800/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* ================= TOP PROMO / DOCS HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-8 sm:p-12 md:p-16 mb-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-md"
        >
          <div className="max-w-xl z-10">
           

            <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-white mb-5 leading-[1.1]">
              Built for developers. Ready in minutes.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-8">
              Plug robust chat infrastructure, multi-account routing, and automated triage bots directly into your applications with our lightweight SDK.
            </p>

            {/* Read Our Docs CTA & Quick Command */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-zinc-950 text-sm font-semibold tracking-wide hover:bg-zinc-200 transition-colors duration-200 shadow-xl"
                >
                  <BookOpen className="w-4 h-4 text-zinc-950" />
                  <span>Read our docs</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </Link>
              </motion.div>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                <span>npm i @interspace/client</span>
              </div>
            </div>
          </div>

          {/* Frosted Glass Folder Visual */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center shrink-0 z-10 select-none">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src="/docs-folder.png"
                alt="Interspace API Documentation"
                width={240}
                height={240}
                className="object-contain drop-shadow-[0_20px_35px_rgba(255,255,255,0.05)]"
              />
            </motion.div>
          </div>

          {/* Subdued Background Grid lines */}
          <div className="absolute -right-10 -bottom-10 w-96 h-96 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </motion.div>

        {/* ================= CAPABILITIES & CODE SECTION ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left: Key Capabilities List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-6">
              
              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                What the API can do
              </h3>
            </div>

            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  variants={itemVariants}
                  className={`rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex items-start gap-5 transition-all duration-300 group ${cap.borderHover}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 ${cap.color} ${cap.badgeGlow} group-hover:scale-105 transition-all duration-200`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <h4 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                        {cap.title}
                      </h4>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors ${cap.pillTag}`}
                      >
                        {cap.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Quickstart Code Snippet (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/70 border-b border-zinc-800/90 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="ml-2 text-zinc-400 text-[11px]">quickstart.ts</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[11px]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-5 font-mono text-[11px] sm:text-xs text-zinc-300 leading-relaxed overflow-x-auto bg-black/60 selection:bg-zinc-800">
              <code>{quickstartCode}</code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}