"use client";

import { Plus, Settings } from "lucide-react";
import SaturnLogo from "./SaturnLogo";
import { Persona } from "./types";

interface PersonaRailProps {
  personas: Persona[];
  activePersona: Persona;
  onSelectPersona: (persona: Persona) => void;
  onNewPersona?: () => void;
}

export default function PersonaRail({
  personas,
  activePersona,
  onSelectPersona,
  onNewPersona,
}: PersonaRailProps) {
  return (
    <aside className="w-14 sm:w-16 bg-[#060709] border-r border-white/5 flex flex-col items-center py-3.5 justify-between shrink-0 select-none z-20">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-3 w-full">
        {/* Saturn Emblem Badge */}
        <div className="h-10 w-10 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg transition-transform hover:scale-105">
          <SaturnLogo className="w-5 h-5 text-black" />
        </div>

        <div className="w-6 h-[1px] bg-white/10 my-0.5" />

        {/* Persona Switcher Avatars */}
        {personas.map((persona) => {
          const isActive = activePersona.id === persona.id;
          return (
            <div key={persona.id} className="relative group flex items-center justify-center">
              {isActive && (
                <span className="absolute -left-3.5 sm:-left-4.5 w-1 h-5 rounded-r-full bg-white transition-all shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
              <button
                onClick={() => onSelectPersona(persona)}
                className={`relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold text-white transition-all transform active:scale-95 ${
                  persona.color
                } ${
                  isActive
                    ? "ring-2 ring-white/50 ring-offset-2 ring-offset-[#060709]"
                    : "opacity-75 hover:opacity-100"
                }`}
                title={persona.name}
              >
                {persona.badge}
                {persona.unreadCount && persona.unreadCount > 0 ? (
                  <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-rose-500 text-[9px] font-mono font-bold flex items-center justify-center border-2 border-[#060709]">
                    {persona.unreadCount}
                  </span>
                ) : null}
              </button>
            </div>
          );
        })}

        {/* Create Persona */}
        <button
          onClick={onNewPersona}
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-dashed border-white/20 hover:border-white/50 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
          title="Spin up new Persona / Alias"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-3.5">
        <button
          className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          title="Settings"
        >
          <Settings className="h-4 w-4" />
        </button>
        {/* Socket Mesh Status */}
        <div
          className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"
          title="Socket Mesh: Connected (Zero Leakage)"
        />
      </div>
    </aside>
  );
}