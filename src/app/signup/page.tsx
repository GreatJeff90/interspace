"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function DarkSignUpCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
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

          {/* Decorative overlapping shapes matching the reference */}
          <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-[#d4af37]/40 blur-sm pointer-events-none" />
          <div className="absolute -right-8 -bottom-6 w-36 h-36 rounded-full bg-[#20b2aa]/40 blur-sm pointer-events-none" />
          <div className="absolute top-0 right-10 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
          
          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" 
          />

          {/* Heading */}
          <h1 className="relative z-10 text-white text-3xl font-bold tracking-tight text-center drop-shadow-md">
            Create an<br />account
          </h1>
        </div>

        {/* Floating Content Body */}
        <div className="relative -mt-6 rounded-t-[36px] bg-[#121319] border-t border-white/10 px-6 pt-7 pb-8">
          
          {/* Google Sign In Button */}
          <button
            type="button"
            className="w-full h-12 py-3 px-4 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.99] transition-all flex items-center justify-center gap-3 text-sm font-medium text-white/90 shadow-sm"
          >
            {/* Google G Icon */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-5">
            <span className="text-xs text-zinc-500 font-medium tracking-wide">or</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* First & Last Name side-by-side */}
            <div className="grid grid-cols-2 gap-2.5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-2xl bg-[#1d1f27] border border-white/5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-2xl bg-[#1d1f27] border border-white/5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 rounded-2xl bg-[#1d1f27] border border-white/5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
            />

            {/* Password with Separate Eye Toggle Box */}
            <div className="flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="flex-1 h-12 px-4 rounded-2xl bg-[#1d1f27] border border-white/5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
              />
              
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="h-12 w-12 shrink-0 rounded-2xl bg-[#1d1f27] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Primary Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-lg shadow-white/5"
              >
                Create account
              </button>
            </div>
          </form>

          {/* Legal / Terms */}
          <p className="mt-6 text-center text-xs leading-relaxed text-zinc-400">
            Signing up for an account means you agree to the{" "}
            <Link href="/terms" className="text-zinc-200 underline underline-offset-2 hover:text-white transition-colors">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-zinc-200 underline underline-offset-2 hover:text-white transition-colors">
              Terms of Service
            </Link>
            .
          </p>

          {/* Footer Link */}
          <p className="mt-5 text-center text-xs text-zinc-400 font-medium">
            Have an account?{" "}
            <Link href="/login" className="text-white underline underline-offset-2 hover:text-zinc-200 transition-colors">
              Log in here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}