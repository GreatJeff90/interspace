"use client";
import React, { useState } from "react";
import {
  Search,
  Settings,
  Smile,
  Paperclip,
  Send,
  Download,
  ChevronLeft,
} from "lucide-react";

// Dummy dataset matching the screenshot
interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  status?: "Active Now" | "Offline";
  isOnline?: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Jennifer Fritz",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    lastMessage: "I'm looking to work with a designer that...",
    time: "3:15 PM",
    status: "Active Now",
    isOnline: true,
  },
  {
    id: "2",
    name: "Laney Gray",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Individuals and interactions over...",
    time: "3:15 PM",
    isOnline: true,
  },
  {
    id: "3",
    name: "Oscar Thomsen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Responding",
    time: "1:15 PM",
    isOnline: false,
  },
  {
    id: "4",
    name: "Kendra Lord",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    lastMessage: "five short years while I was on campus",
    time: "21 Jan",
    isOnline: false,
  },
  {
    id: "5",
    name: "Gatlin Huber",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Working the way developers work...",
    time: "20 Jan",
    isOnline: true,
  },
  {
    id: "6",
    name: "Fox Mccloud",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    lastMessage: "I saw in this culture optimized for engineers",
    time: "17 Jan",
    isOnline: false,
  },
  {
    id: "7",
    name: "Timothy Gunter",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Designers isolated from other designers...",
    time: "3:15 PM",
    isOnline: false,
  },
  {
    id: "8",
    name: "Jahlil Kyle",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    lastMessage: "Career paths",
    time: "3:15 PM",
    isOnline: false,
  },
];

export default function ChatPage() {
  const [activeConv, setActiveConv] = useState<Conversation>(mockConversations[0]);
  const [messageText, setMessageText] = useState("");
  // On mobile: if true, show chat thread; if false, show conversation list
  const [mobileThreadOpen, setMobileThreadOpen] = useState(false);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] sm:h-[calc(100vh-7rem)] p-4 sm:p-7">
      <h1 className="text-xl font-bold text-slate-800 mb-4 shrink-0">Chat</h1>

      {/* Inner Dual-Panel Container */}
      <div className="flex flex-1 min-h-0 overflow-hidden rounded-2xl border border-slate-100 bg-white">
        
        {/* Left Panel: Conversation Thread List */}
        <div
          className={`w-full flex-col border-r border-slate-100 md:w-80 lg:w-84 xl:w-96 ${
            mobileThreadOpen ? "hidden md:flex" : "flex"
          }`}
        >
          {/* Search Conversations Input */}
          <div className="p-4 border-b border-slate-50 shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-300" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-xl bg-slate-50 py-2.5 pl-9 pr-3 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Conversation Scrollable List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-50/50">
            {mockConversations.map((item) => {
              const isSelected = activeConv.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveConv(item);
                    setMobileThreadOpen(true);
                  }}
                  className={`flex items-center gap-3.5 px-5 py-4 cursor-pointer transition-colors ${
                    isSelected ? "bg-slate-50/80 shadow-xs" : "hover:bg-slate-50/50"
                  }`}
                >
                  {/* Avatar with online pill */}
                  <div className="relative shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    {item.isOnline && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    )}
                  </div>

                  {/* Text Previews */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <h4
                        className={`text-xs font-semibold truncate ${
                          isSelected ? "text-slate-900" : "text-slate-800"
                        }`}
                      >
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">
                      {item.lastMessage}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Active Chat Thread */}
        <div
          className={`flex-1 flex-col bg-white min-h-0 ${
            mobileThreadOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Active Chat Top Header */}
          <div className="flex h-16 items-center justify-between border-b border-slate-100 px-6 shrink-0">
            <div className="flex items-center gap-3">
              {/* Mobile Back Button */}
              <button
                onClick={() => setMobileThreadOpen(false)}
                className="p-1 -ml-2 rounded-lg text-slate-400 hover:bg-slate-50 md:hidden"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="relative">
                <img
                  src={activeConv.avatar}
                  alt={activeConv.name}
                  className="h-9 w-9 rounded-full object-cover"
                />
                {activeConv.isOnline && (
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-900">
                  {activeConv.name}
                </h3>
                <p className="text-[10px] text-emerald-500 font-medium">
                  {activeConv.status ?? "Active Now"}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Body Canvas */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Incoming Bubble 1 */}
            <div className="flex items-start gap-3 max-w-xl">
              <img
                src={activeConv.avatar}
                alt={activeConv.name}
                className="h-8 w-8 rounded-full object-cover shrink-0 mt-1"
              />
              <div>
                <div className="rounded-2xl rounded-tl-sm bg-[#eef4ff] px-4 py-3 text-xs leading-relaxed text-slate-600 shadow-xs">
                  Your story continues on mobile: Build and edit decks. Give and receive feedback. Add content from any other app 😊
                </div>
                <span className="mt-1.5 block text-[10px] text-slate-300">
                  3:15 PM
                </span>
              </div>
            </div>

            {/* Outgoing Bubble 1 */}
            <div className="flex items-start justify-end gap-3 ml-auto max-w-xl">
              <div className="flex flex-col items-end">
                <div className="rounded-2xl rounded-tr-sm bg-[#f6f7fb] px-4 py-3 text-xs leading-relaxed text-slate-700 shadow-xs">
                  I&apos;ve always been on the fringe of people in the design community
                </div>
                <span className="mt-1.5 block text-[10px] text-slate-300">
                  3:18 PM
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
                alt="T'Challa"
                className="h-8 w-8 rounded-full object-cover shrink-0 mt-1"
              />
            </div>

            {/* Incoming Bubble 2 */}
            <div className="flex items-start gap-3 max-w-xl">
              <img
                src={activeConv.avatar}
                alt={activeConv.name}
                className="h-8 w-8 rounded-full object-cover shrink-0 mt-1"
              />
              <div>
                <div className="rounded-2xl rounded-tl-sm bg-[#eef4ff] px-4 py-3 text-xs leading-relaxed text-slate-600 shadow-xs">
                  Can you Send the file of Losra United Group ?
                </div>
                <span className="mt-1.5 block text-[10px] text-slate-300">
                  3:21 PM
                </span>
              </div>
            </div>

            {/* Outgoing Bubble with Attached Vector File */}
            <div className="flex items-start justify-end gap-3 ml-auto max-w-xl">
              <div className="flex flex-col items-end">
                <div className="space-y-2.5 rounded-2xl rounded-tr-sm bg-[#f6f7fb] p-3.5 text-xs text-slate-700 shadow-xs">
                  <p>Yeah Sure. Here it is...</p>
                  
                  {/* File Attachment Card */}
                  <div className="flex items-center gap-3.5 rounded-xl bg-white p-2.5 border border-slate-100 shadow-xs">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff4a4a] text-[11px] font-bold text-white shrink-0">
                      Ai
                    </div>
                    <div className="flex-1 pr-3">
                      <p className="text-xs font-semibold text-slate-800">
                        Losra United logo .Ai
                      </p>
                    </div>
                    <button className="p-1 text-blue-500 hover:text-blue-700">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <span className="mt-1.5 block text-[10px] text-slate-300">
                  3:25 PM
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
                alt="T'Challa"
                className="h-8 w-8 rounded-full object-cover shrink-0 mt-1"
              />
            </div>

          </div>

          {/* Bottom Typing Input Field */}
          <div className="p-4 border-t border-slate-100 shrink-0">
            <div className="flex items-center gap-2 rounded-2xl bg-[#f8f9fd] px-4 py-2 border border-slate-100">
              <input
                type="text"
                placeholder="Type a message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-1 bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
              />

              {/* Emoji & Attachment */}
              <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
                <Smile className="h-4 w-4" />
              </button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
                <Paperclip className="h-4 w-4" />
              </button>

              {/* Send Button */}
              <button className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-xs font-medium text-white shadow-xs hover:bg-blue-600 active:scale-95 transition-all">
                <span>Send</span>
                <Send className="h-3 w-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}