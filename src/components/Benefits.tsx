"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { 
  ShieldCheck, 
  Monitor, 
  Video, 
  Bot, 
  Send, 
  Sparkles 
} from "lucide-react";

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Benefits() {
  const [, setActiveStep] = useState<number | null>(null);
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState(
    "Interspace agent active: sub-10ms ephemeral peer routing ready."
  );
  const [isTyping, setIsTyping] = useState(false);

  const simulateAiQuery = () => {
    if (!aiPrompt.trim()) return;
    setIsTyping(true);
    setTimeout(() => {
      setAiResponse(
        `Synthesized "${aiPrompt}": cryptographic handshake established across isolated sessions.`
      );
      setIsTyping(false);
      setAiPrompt("");
    }, 600);
  };

  return (
    <section
      id="benefits"
      className="w-full bg-zinc-950 py-28 px-6 text-zinc-100 border-b border-zinc-900 relative overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-zinc-800/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <div>

            <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-white max-w-2xl leading-[1.1]">
              Building a Seamless Realtime Experience
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-4 leading-relaxed">
              Beyond standard webchat, Interspace delivers in-browser multi-tenant isolation, 
              ephemeral zero-trace relays, and autonomous intelligence straight out of the box.
            </p>
          </div>

          {/* Minimalist Date / Milestone Metric Badge */}
          <div className="flex items-center rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-1 font-mono text-xs self-start lg:self-end backdrop-blur-sm">
            <span className="px-4 py-2.5 text-zinc-400">P2P v2.4</span>
            <span className="px-4 py-2.5 bg-white text-zinc-950 font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
              Live Protocol
            </span>
          </div>
        </motion.div>

        {/* ================= STAGGERED STEP LADDER ================= */}
        <div className="relative flex flex-col space-y-12 md:space-y-16">
          
          {/* STEP 1: Private & Zero-Trace (Electric Violet / Indigo) */}
          <motion.div
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex flex-col md:flex-row md:justify-start"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => setActiveStep(1)}
              className="relative w-full md:w-[480px] bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-500/50 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-md group cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Vertical Side Pill Tag */}
                <div className="w-8 h-24 rounded-full bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/25">
                  <span className="text-[11px] font-mono font-bold -rotate-90 whitespace-nowrap tracking-wider">
                    E2EE
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      1. Private & Zero-Trace
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Cryptographic keys reside strictly in local RAM. Zero server logs, no telemetry scraping, and ephemeral channel lifecycles.
                  </p>
                  <div className="mt-3 text-[11px] font-mono text-zinc-500">
                    AES-256-GCM • Ephemeral RAM
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Silver / White Dashed Connector Step 1 -> 2 */}
            <div className="hidden md:block absolute left-[440px] top-[70%] w-[180px] h-[90px] pointer-events-none z-0">
              <svg viewBox="0 0 180 90" fill="none" className="w-full h-full overflow-visible">
                <motion.path
                  d="M 10,10 H 130 Q 150,10 150,30 V 80"
                  stroke="#E2E8F0"
                  strokeOpacity="0.8"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.4 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* STEP 2: In-Browser Core & Isolation (Cyan / Sky) */}
          <motion.div
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex flex-col md:flex-row md:justify-end"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => setActiveStep(2)}
              className="relative w-full md:w-[480px] bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-500/50 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-md group cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Vertical Side Pill Tag */}
                <div className="w-8 h-24 rounded-full bg-cyan-400 text-zinc-950 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/25">
                  <span className="text-[11px] font-mono font-bold -rotate-90 whitespace-nowrap tracking-wider">
                    Sandbox
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      2. In-Browser Core & Isolation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Zero installations or desktop daemons. Spin up and switch across 5+ team accounts concurrently in independent browser tabs.
                  </p>
                  <div className="mt-3 text-[11px] font-mono text-zinc-500">
                    BroadcastChannel API • Sub-5ms Sync
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Silver / White Dashed Connector Step 2 -> 3 */}
            <div className="hidden md:block absolute right-[430px] top-[75%] w-[180px] h-[90px] pointer-events-none z-0">
              <svg viewBox="0 0 180 90" fill="none" className="w-full h-full overflow-visible">
                <motion.path
                  d="M 170,10 H 50 Q 30,10 30,30 V 80"
                  stroke="#E2E8F0"
                  strokeOpacity="0.8"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                  animate={{ strokeDashoffset: [0, 20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.4 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* STEP 3: Custom Links & Video Relays (Emerald / Mint) */}
          <motion.div
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex flex-col md:flex-row md:justify-start"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => setActiveStep(3)}
              className="relative w-full md:w-[480px] bg-zinc-900/50 border border-zinc-800/80 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-md group cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Vertical Side Pill Tag */}
                <div className="w-8 h-24 rounded-full bg-emerald-400 text-zinc-950 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/25">
                  <span className="text-[11px] font-mono font-bold -rotate-90 whitespace-nowrap tracking-wider">
                    P2P Call
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      3. Custom Links & Video Relays
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Share your vanity link <span className="font-mono text-zinc-200">space.link/@alias</span> for 1-click end-to-end encrypted video and file dispatch.
                  </p>
                  <div className="mt-3 text-[11px] font-mono text-zinc-500">
                    WebRTC Mesh • SRTP Transport
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Silver / White Dashed Connector Step 3 -> 4 */}
            <div className="hidden md:block absolute left-[440px] top-[70%] w-[180px] h-[90px] pointer-events-none z-0">
              <svg viewBox="0 0 180 90" fill="none" className="w-full h-full overflow-visible">
                <motion.path
                  d="M 10,10 H 130 Q 150,10 150,30 V 80"
                  stroke="#E2E8F0"
                  strokeOpacity="0.8"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1.4 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* STEP 4: AI Automated Agents (Silver / White Brand Accent) */}
          <motion.div
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex flex-col md:flex-row md:justify-end"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full md:w-[540px] bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-500/50 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Vertical Side Pill Tag */}
                <div className="w-8 h-24 rounded-full bg-white text-zinc-950 flex items-center justify-center shrink-0 shadow-lg shadow-white/10">
                  <span className="text-[11px] font-mono font-bold -rotate-90 whitespace-nowrap tracking-wider">
                    AI AGENT
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-zinc-100" />
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        4. AI Automated Agents
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                      Interactive
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    Automate lead triage, customer queries, and chat auto-replies with context-aware, in-memory AI bots.
                  </p>

                  {/* Micro Terminal Demo */}
                  <div className="rounded-xl bg-black/80 border border-zinc-800 p-3 font-mono">
                    <div className="text-[11px] text-zinc-400 mb-2.5 min-h-[28px] leading-relaxed">
                      {isTyping ? (
                        <span className="text-zinc-200 animate-pulse">
                          Computing semantic response...
                        </span>
                      ) : (
                        aiResponse
                      )}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && simulateAiQuery()}
                        placeholder="Test command (e.g. summarize conversation)..."
                        className="flex-1 bg-zinc-900 text-xs text-white px-3 py-1.5 rounded-lg border border-zinc-800 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                      <button
                        type="button"
                        onClick={simulateAiQuery}
                        className="px-3 py-1.5 rounded-lg bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors"
                        aria-label="Send test command"
                      >
                        <Send className="w-3 h-3 text-zinc-950" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}