"use client";

import { User, Bot, Hash, ArrowRight } from "lucide-react";
import SaturnLogo from "./SaturnLogo";

interface OrbitalLaunchpadProps {
  handle: string;
  copied: boolean;
  onCopyHandle: () => void;
  onStartDirectChat?: () => void;
  onTestAiBot?: () => void;
  onCreateSharedRoom?: () => void;
}

export default function OrbitalLaunchpad({
  handle,
  copied,
  onCopyHandle,
  onStartDirectChat,
  onTestAiBot,
  onCreateSharedRoom,
}: OrbitalLaunchpadProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-lg mx-auto text-center">
      {/* Saturn Glow Icon */}
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-2xl">
        <SaturnLogo className="w-6 h-6 text-white" />
      </div>

      {/* Shareable Vanity Tag */}
      <div className="inline-flex items-center gap-2 p-1 pl-3 bg-white/[0.04] border border-white/10 rounded-full text-xs font-mono text-neutral-300 mb-6">
        <span>Your Interspace tag:</span>
        <span className="font-bold text-white">{handle}</span>
        <button
          onClick={onCopyHandle}
          className="px-2.5 py-1 bg-white/10 rounded-full text-neutral-200 hover:text-white hover:bg-white/20 transition-colors"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <h2 className="text-3xl font-serif tracking-tight text-white mb-2">
        Orbital Launchpad
      </h2>
      <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mb-8 leading-relaxed font-sans">
        Zero noise, instant isolation. Initialize a cryptographic direct tunnel or ping an automated assistant.
      </p>

      {/* Action Cards */}
      <div className="grid grid-cols-1 w-full gap-2.5 text-left font-sans">
        <button
          onClick={onStartDirectChat}
          className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <User className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Start a 1-on-1 Chat</h4>
              <p className="text-[11px] text-neutral-400">Enter a friend&apos;s cryptographic tag or alias</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
        </button>

        <button
          onClick={onTestAiBot}
          className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Test with AI Bot</h4>
              <p className="text-[11px] text-neutral-400">1-click test ping to verify low-latency socket streaming</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
        </button>

        <button
          onClick={onCreateSharedRoom}
          className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Hash className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Create a Shared Room</h4>
              <p className="text-[11px] text-neutral-400">Generate an ephemeral invite payload for a team</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}