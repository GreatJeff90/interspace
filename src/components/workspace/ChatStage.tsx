"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Timer,
  Video,
  UserPlus,
  Paperclip,
  Sparkles,
  Mic,
  Send,
  Code2,
  ArrowLeft,
} from "lucide-react";
import { Thread, Message } from "./types";

interface ChatStageProps {
  thread: Thread;
  messages: Message[];
  onSendMessage: (text: string) => void;
  onBack?: () => void; // <-- Added this
}

export default function ChatStage({
  thread,
  messages,
  onSendMessage,
  onBack,
}: ChatStageProps) {
  const [inputText, setInputText] = useState("");
  const [ephemeralTimer, setEphemeralTimer] = useState<"Off" | "24h" | "1h">("24h");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText("");
  };

  return (
    <div className="flex-1 bg-[#0a0b0e] flex flex-col min-w-0 overflow-hidden relative">
      {/* Header Bar */}
      <header className="h-14 px-4 sm:px-6 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#0a0b0e]/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Mobile Back Button */}
          {onBack && (
            <button
              onClick={onBack}
              className="md:hidden p-1.5 -ml-1 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="Back to inbox"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div className="font-semibold text-sm text-white truncate flex items-center gap-2">
            <span>{thread.name}</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
              <ShieldCheck className="h-3 w-3" />
              <span>E2EE Verified</span>
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setEphemeralTimer((prev) => (prev === "24h" ? "1h" : prev === "1h" ? "Off" : "24h"))
            }
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white text-xs font-mono transition-colors"
            title="Ephemeral Self-Destruct Timer"
          >
            <Timer className="h-3.5 w-3.5 text-amber-400" />
            <span>{ephemeralTimer}</span>
          </button>

          <button
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            title="Start Encrypted Call"
          >
            <Video className="h-4 w-4" />
          </button>
          <button
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            title="Add Members"
          >
            <UserPlus className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => {
          const isMe = msg.sender === "me";
          return (
            <div
              key={msg.id}
              className={`flex flex-col max-w-xl ${isMe ? "ml-auto items-end" : "mr-auto items-start"}`}
            >
              <span className="text-[10px] font-mono text-neutral-400 mb-1 px-1">
                {msg.senderName} • {msg.time}
              </span>

              {msg.isCode ? (
                <div className="w-full rounded-2xl bg-[#060709] border border-white/10 p-3.5 font-mono text-xs overflow-x-auto text-emerald-400 shadow-xl">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 border-b border-white/10 pb-1.5 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="h-3 w-3" />
                      {msg.codeLanguage}
                    </span>
                    <span>Signed payload</span>
                  </div>
                  <pre>
                    <code>{msg.text}</code>
                  </pre>
                </div>
              ) : (
                <div
                  className={`rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    isMe
                      ? "bg-white text-black rounded-br-xs font-medium shadow-md"
                      : "bg-white/[0.06] text-neutral-200 border border-white/5 rounded-bl-xs"
                  }`}
                >
                  {msg.text}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Composer Input Bar */}
      <div className="p-3 sm:p-5 shrink-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e] to-transparent">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 rounded-2xl bg-[#121318] border border-white/10 p-2 focus-within:border-white/20 focus-within:ring-1 focus-within:ring-white/15 transition-all shadow-xl"
        >
          <button
            type="button"
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
            title="Upload attachment"
          >
            <Paperclip className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setInputText((prev) => (prev ? prev + " /ai " : "/ai "))}
            className="px-2 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-mono hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            <Sparkles className="h-3 w-3" />
            <span>/ai</span>
          </button>

          <input
            type="text"
            placeholder="Send encrypted payload... (Enter to send)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none px-2"
          />

          <button
            type="button"
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
            title="Hold for Voice Note"
          >
            <Mic className="h-4 w-4" />
          </button>

          <button
            type="submit"
            disabled={!inputText.trim()}
            className="h-8 w-8 rounded-xl bg-white text-black hover:bg-neutral-200 flex items-center justify-center transition-all disabled:opacity-40"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}