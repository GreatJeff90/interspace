"use client";

import { useState } from "react";
import PersonaRail from "./PersonaRail";
import ChannelSidebar from "./ChannelSidebar";
import ChatStage from "./ChatStage";
import MobileBottomNav from "./MobileBottomNav";
import { Persona, Thread, Message } from "./types";
import { MessageSquareDashed } from "lucide-react";

const PERSONAS: Persona[] = [
  { id: "p1", name: "Work Dev", handle: "space.link/@great_dev", badge: "WD", color: "bg-blue-600", unreadCount: 3 },
  { id: "p2", name: "Burner Alias", handle: "space.link/@cryptic_mind", badge: "CM", color: "bg-amber-600" },
  { id: "p3", name: "Client Support", handle: "space.link/@ops_orbit", badge: "CS", color: "bg-emerald-600" },
];

const THREADS: Thread[] = [
  {
    id: "t1",
    personaId: "p1",
    name: "General Orbit",
    type: "channel",
    avatarText: "#",
    lastMessage: "Alex deployed edge release v0.9.4 to staging.",
    timestamp: "2m",
    unread: 2,
  },
  {
    id: "t2",
    personaId: "p1",
    name: "Engineering Feed",
    type: "channel",
    avatarText: "#",
    lastMessage: "Pushed migration: schema v2 complete.",
    timestamp: "14m",
    unread: 0,
  },
  {
    id: "t3",
    personaId: "p1",
    name: "Sarah Chen",
    type: "direct",
    avatarText: "SC",
    lastMessage: "Shared the AES-256 session token key.",
    timestamp: "1h",
    unread: 1,
    online: true,
  },
  {
    id: "t4",
    personaId: "p1",
    name: "Bot Triage",
    type: "ai",
    avatarText: "AI",
    lastMessage: "Ready to test latency or run multi-session mock?",
    timestamp: "Yesterday",
    unread: 0,
  },
];

const SAMPLE_MESSAGES: Record<string, Message[]> = {
  t1: [
    {
      id: "m1",
      sender: "peer",
      senderName: "Alex R.",
      text: "Can you review the connection pool limits for multi-session isolates?",
      time: "3:42 PM",
    },
    {
      id: "m2",
      sender: "me",
      senderName: "You",
      text: "Looking now. The isolate boundary is working properly without cross-tenant memory leakage.",
      time: "3:44 PM",
    },
    {
      id: "m3",
      sender: "peer",
      senderName: "Alex R.",
      text: "export const isolateSession = (id: string) => {\n  return crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt']);\n};",
      time: "3:45 PM",
      isCode: true,
      codeLanguage: "typescript",
    },
  ],
  t3: [
    {
      id: "m3_1",
      sender: "peer",
      senderName: "Sarah Chen",
      text: "Shared the AES-256 session token key. Check your vault.",
      time: "1:15 PM",
    },
  ],
};

export default function WorkspaceApp() {
  const [activePersona, setActivePersona] = useState<Persona>(PERSONAS[0]);
  // Default to null so the initial view is the regular conversation list
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "direct" | "ai">("all");
  const [copied, setCopied] = useState(false);
  const [messagesMap, setMessagesMap] = useState<Record<string, Message[]>>(SAMPLE_MESSAGES);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const activeThread = THREADS.find((t) => t.id === activeThreadId);
  const activeMessages = activeThreadId ? messagesMap[activeThreadId] || [] : [];

  const handleCopyTag = () => {
    navigator.clipboard.writeText(activePersona.handle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectPersona = (persona: Persona) => {
    setActivePersona(persona);
    setActiveThreadId(null); // Reset back to inbox list on persona switch
  };

  const handleSendMessage = (text: string) => {
    if (!activeThreadId) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "me",
      senderName: "You",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessagesMap((prev) => ({
      ...prev,
      [activeThreadId]: [...(prev[activeThreadId] || []), newMsg],
    }));
  };

  const personaThreads = THREADS.filter((t) => t.personaId === activePersona.id);
  const visibleThreads = personaThreads.filter((t) => {
    if (filter === "unread") return t.unread > 0;
    if (filter === "direct") return t.type === "direct";
    if (filter === "ai") return t.type === "ai";
    return true;
  });

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0a0b0e] text-neutral-100 flex font-sans antialiased relative">
      {/* Column 1: Persona Switcher Rail (Desktop / Tablet) */}
      <div className="hidden md:flex shrink-0">
        <PersonaRail
          personas={PERSONAS}
          activePersona={activePersona}
          onSelectPersona={handleSelectPersona}
          onNewPersona={() => alert("Spin up new persona modal")}
        />
      </div>

      {/* Column 2: Default Chats / Inboxes List */}
      <ChannelSidebar
        activePersona={activePersona}
        threads={visibleThreads}
        activeThreadId={activeThreadId}
        onSelectThread={(id) => {
          setActiveThreadId(id);
          setIsMobileSidebarOpen(false);
        }}
        filter={filter}
        onFilterChange={setFilter}
        copied={copied}
        onCopyHandle={handleCopyTag}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Column 3: Active Chat Stage (or Desktop Empty Stage Placeholder) */}
      <main
        className={`
          flex-1 bg-[#0a0b0e] flex flex-col min-w-0 overflow-hidden relative
          ${activeThreadId ? "flex w-full" : "hidden md:flex"}
        `}
      >
        {activeThread ? (
          <ChatStage
            thread={activeThread}
            messages={activeMessages}
            onSendMessage={handleSendMessage}
            onBack={() => setActiveThreadId(null)}
          />
        ) : (
          /* Desktop default state: sleek placeholder prompting user to pick a chat */
          <div className="flex-1 hidden md:flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-neutral-500 mb-4">
              <MessageSquareDashed className="w-6 h-6 text-neutral-400" />
            </div>
            <h3 className="text-base font-medium text-white mb-1">
              Select a conversation
            </h3>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Choose a contact or channel from the list on the left to review messages and begin dispatching encrypted payloads.
            </p>
          </div>
        )}
      </main>

      {/* Floating 3-Icon Bottom Capsule (Visible on Mobile only when at the root inbox list) */}
      {!activeThreadId && (
        <MobileBottomNav
          activeThreadId={activeThreadId}
          onOpenSidebar={() => setIsMobileSidebarOpen(true)}
          onGoToLaunchpad={() => setActiveThreadId(null)}
        />
      )}
    </div>
  );
}