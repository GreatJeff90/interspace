"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function DarkResetPasswordCard() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#090a0f] flex items-center justify-center p-4 antialiased">
      {/* Mobile Card Container */}
      <div className="w-full max-w-[390px] rounded-[42px] overflow-hidden bg-[#121319] border border-white/10 shadow-2xl relative">
        
        {/* Top Abstract Art Header */}
        <div className="relative h-44 w-full bg-gradient-to-br from-[#e0533c] via-[#a83226] to-[#40120d] overflow-hidden flex items-center justify-center px-6">
          
          {/* Back to Home Button */}
          <Link
            href="/"
            className="absolute top-5 left-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:bg-black/40 transition-all active:scale-95"
            aria-label="Back to home"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Link>

          {/* Decorative overlapping shapes matching the theme */}
          <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-[#d4af37]/40 blur-sm pointer-events-none" />
          <div className="absolute -right-8 -bottom-6 w-36 h-36 rounded-full bg-[#20b2aa]/40 blur-sm pointer-events-none" />
          <div className="absolute top-0 right-10 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
          
          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" 
          />

          {/* Heading */}
          <h1 className="relative z-10 text-white text-3xl font-bold tracking-tight text-center drop-shadow-md">
            Reset<br />Password
          </h1>
        </div>

        {/* Floating Content Body */}
        <div className="relative -mt-6 rounded-t-[36px] bg-[#121319] border-t border-white/10 px-6 pt-7 pb-8">
          
          {/* Subtext description */}
          <p className="text-center text-xs leading-relaxed text-zinc-400 mb-6 px-2">
            Enter your email address and we&apos;ll send you instructions to reset your password.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-2xl bg-[#1d1f27] border border-white/5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
            />

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-lg shadow-white/5"
              >
                Send Reset Link
              </button>
            </div>
          </form>

          {/* Success notice */}
          {isSubmitted && (
            <div className="mt-4 p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <p className="text-xs text-emerald-400 font-medium">
                Reset instructions sent to your email!
              </p>
            </div>
          )}

          {/* Back to Login Link */}
          <p className="mt-6 text-center text-xs text-zinc-400 font-medium">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-white underline underline-offset-2 hover:text-zinc-200 transition-colors"
            >
              Log in here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}