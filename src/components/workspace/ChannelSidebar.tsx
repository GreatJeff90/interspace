"use client";

import { Search, Copy, Check, Hash, Bot } from "lucide-react";
import { Persona, Thread } from "./types";

interface ChannelSidebarProps {
  activePersona: Persona;
  threads: Thread[];
  activeThreadId: string | null;
  onSelectThread: (threadId: string | null) => void;
  filter: "all" | "unread" | "direct" | "ai";
  onFilterChange: (filter: "all" | "unread" | "direct" | "ai") => void;
  copied: boolean;
  onCopyHandle: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function ChannelSidebar({
  activePersona,
  threads,
  activeThreadId,
  onSelectThread,
  filter,
  onFilterChange,
  copied,
  onCopyHandle,
}: ChannelSidebarProps) {
  return (
    <nav
      className={`
        bg-[#0d0e12] border-r border-white/5 flex flex-col shrink-0 h-full
        /* Mobile: Takes 100% of the screen if no chat is open, hides when chat is active */
        ${activeThreadId ? "hidden md:flex md:w-72 lg:w-80" : "flex w-full md:w-72 lg:w-80"}
      `}
    >
      {/* Top Identity Header */}
      <div className="p-3.5 border-b border-white/5">
        <div className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2">
          <div className="min-w-0 pr-2">
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono font-medium block leading-none mb-1">
              Active Identity
            </span>
            <p className="text-xs font-mono font-medium text-white truncate">
              {activePersona.handle}
            </p>
          </div>
          <button
            onClick={onCopyHandle}
            className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors shrink-0"
            title="Copy link"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>

        {/* Universal Search Bar */}
        <div className="mt-2.5 relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-1.5 pl-8 pr-12 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10"
          />
          <kbd className="hidden sm:inline-block absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-white/10 px-1 py-0.5 rounded text-neutral-400 border border-white/5">
            ⌘K
          </kbd>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-1 mt-2.5 overflow-x-auto no-scrollbar text-[11px] pb-0.5">
          {(["all", "unread", "direct", "ai"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => onFilterChange(tab)}
              className={`px-3 py-1 rounded-lg capitalize font-mono shrink-0 transition-colors ${
                filter === tab
                  ? "bg-white/10 text-white font-medium"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Conversation / Contact List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 pb-20 md:pb-2">
        {threads.length === 0 ? (
          <div className="p-8 text-center text-xs text-neutral-500 font-mono">
            No conversations found.
          </div>
        ) : (
          threads.map((thread) => {
            const isSelected = activeThreadId === thread.id;
            return (
              <div
                key={thread.id}
                onClick={() => onSelectThread(thread.id)}
                className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? "bg-white/[0.08] text-white shadow-xs"
                    : "text-neutral-400 hover:bg-white/[0.03] hover:text-neutral-200"
                }`}
              >
                {/* Contact Avatar / Badge */}
                <div className="relative shrink-0">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                      thread.type === "channel"
                        ? "bg-white/5 text-neutral-400 border border-white/10"
                        : thread.type === "ai"
                        ? "bg-purple-950/40 text-purple-400 border border-purple-500/20"
                        : "bg-blue-950/40 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {thread.type === "channel" && <Hash className="h-4 w-4" />}
                    {thread.type === "ai" && <Bot className="h-4 w-4" />}
                    {thread.type === "direct" && thread.avatarText}
                  </div>
                  {thread.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0d0e12]" />
                  )}
                </div>

                {/* Name & Latest Message Preview */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm font-semibold truncate text-neutral-200 group-hover:text-white">
                      {thread.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 shrink-0 ml-1">
                      {thread.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 truncate leading-tight">
                    {thread.lastMessage}
                  </p>
                </div>

                {/* Unread Pill */}
                {thread.unread > 0 && (
                  <span className="h-4 min-w-[16px] px-1.5 rounded-full bg-white text-black font-mono font-bold text-[9px] flex items-center justify-center shrink-0">
                    {thread.unread}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </nav>
  );
}