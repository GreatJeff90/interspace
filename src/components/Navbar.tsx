"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  actionLabel?: string;
  actionHref?: string;
}

export default function Navbar({
  actionLabel = "Launch App",
  actionHref = "/login",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Exact section IDs configured across your landing page
  const navLinks = [
    { label: "Process", href: "#how-it-works" },
    { label: "Architecture", href: "#benefits" },
    { label: "Docs", href: "#docs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
      {/* Floating Pill Container */}
      <nav
        aria-label="Main Navigation"
        className="w-full max-w-fit flex items-center justify-between sm:justify-start gap-1 sm:gap-2 p-1.5 pl-2 bg-[#171717]/90 text-white rounded-full border border-neutral-800 shadow-2xl backdrop-blur-md"
      >
        {/* Saturn Brand Badge */}
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-transform duration-200 hover:scale-105 shrink-0"
          aria-label="Interspace Home"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <circle cx="12" cy="12" r="5" fill="#000" />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.2"
              stroke="#000"
              strokeWidth="1.6"
              transform="rotate(-22 12 12)"
            />
          </svg>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2 text-xs lg:text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-3 py-1.5 rounded-full transition-colors duration-150 hover:text-white hover:bg-neutral-800/80 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <Link
          href={actionHref}
          className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-black bg-white rounded-full transition-all duration-200 hover:bg-neutral-200 hover:shadow-md shrink-0 ml-1"
        >
          {actionLabel}
        </Link>

        {/* Mobile Hamburger / Close Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-colors focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden w-full max-w-xs mt-2 p-2 bg-[#171717]/95 border border-neutral-800 shadow-2xl backdrop-blur-xl rounded-2xl flex flex-col gap-1 transition-all duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/70 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}