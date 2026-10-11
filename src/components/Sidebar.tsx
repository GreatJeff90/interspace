"use client";
import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  CheckSquare,
  Users,
  MessageSquare,
  Calendar,
  Activity,
  HelpCircle,
  Settings,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeRoute?: string;
}

const navItems = [
  { name: "Dashboard", href: "#", icon: LayoutDashboard },
  { name: "Invoice", href: "#", icon: FileText },
  { name: "Projects", href: "#", icon: Briefcase },
  { name: "Task", href: "#", icon: CheckSquare },
  { name: "Clients", href: "#", icon: Users },
  { name: "Chat", href: "#", icon: MessageSquare, badge: 1 },
  { name: "Calendar", href: "#", icon: Calendar },
  { name: "Activity", href: "#", icon: Activity },
  { name: "Support", href: "#", icon: HelpCircle },
  { name: "Setting", href: "#", icon: Settings },
];

export function Sidebar({ isOpen, onClose, activeRoute = "Chat" }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-60 flex-col bg-white border-r border-slate-100 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Logo & Mobile Close */}
        <div className="flex h-20 items-center justify-between px-7">
          <Link href="/" className="flex items-center gap-3">
            {/* Custom Blue Cloud Logo */}
            <div className="h-7 w-9 rounded-2xl bg-blue-500 rounded-tr-[18px] rounded-bl-[14px] flex items-center justify-center text-white">
              <span className="w-3 h-3 bg-white rounded-full opacity-80" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Negstat
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1.5 px-4 pt-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeRoute === item.name;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-50/70"
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute -left-4 h-6 w-1 rounded-r-full bg-blue-500" />
                )}

                <Icon className={`h-4 w-4 ${isActive ? "text-blue-500" : "text-slate-400"}`} />
                <span>{item.name}</span>

                {item.badge && (
                  <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white shadow-xs">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}