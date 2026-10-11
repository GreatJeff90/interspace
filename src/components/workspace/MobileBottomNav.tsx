"use client";

import Link from "next/link";
import { MessageSquare, Menu } from "lucide-react";
import SaturnLogo from "./SaturnLogo";

interface MobileBottomNavProps {
  activeThreadId: string | null; // <-- Added this
  onOpenSidebar: () => void;
  onGoToLaunchpad: () => void;
}

export default function MobileBottomNav({
  activeThreadId,
  onOpenSidebar,
  onGoToLaunchpad,
}: MobileBottomNavProps) {
  return (
    <div className="md:hidden fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Mobile workspace navigation"
        className="pointer-events-auto flex items-center gap-7 px-6 py-2.5 bg-[#171717]/95 border border-white/15 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.85)] backdrop-blur-xl text-white"
      >
        {/* 1. Saturn Logo (Routes back to /dashboard) */}
        <Link
          href="/dashboard"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black transition-transform active:scale-90"
          title="Go to Dashboard"
        >
          <SaturnLogo className="w-5 h-5 text-black" />
        </Link>

        {/* 2. Launchpad / Clear Thread Trigger */}
        <button
          type="button"
          onClick={onGoToLaunchpad}
          className={`p-2 rounded-full transition-colors active:scale-90 ${
            activeThreadId === null
              ? "text-white bg-white/10"
              : "text-neutral-400 hover:text-white"
          }`}
          title="Orbital Launchpad"
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* 3. Hamburger Menu: Toggles the Channel Sidebar Drawer */}
        <button
          type="button"
          onClick={onOpenSidebar}
          className="p-2 text-neutral-400 hover:text-white rounded-full transition-colors active:scale-90"
          title="Open Channels & DMs"
        >
          <Menu className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
}