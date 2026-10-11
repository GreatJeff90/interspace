import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center pb-20 border-b border-neutral-900">
        <h2 className="text-5xl sm:text-7xl font-serif tracking-tight mb-6">
          Enter Interspace.
        </h2>
        <p className="text-neutral-400 text-base max-w-md mb-8">
          Step into a live, multi-session communications architecture designed for speed.
        </p>
        <Link
          href="/login"
          className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all hover:scale-105"
        >
          Launch Free Workspace
        </Link>
      </div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
            <circle cx="12" cy="12" r="5" fill="#fff" />
            <ellipse cx="12" cy="12" rx="9" ry="3.2" stroke="#fff" strokeWidth="1.6" transform="rotate(-22 12 12)" />
          </svg>
          <span>Interspace Protocol © 2026</span>
        </div>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-white transition-colors">Privacy</a>
          <a href="#docs" className="hover:text-white transition-colors">API Docs</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}