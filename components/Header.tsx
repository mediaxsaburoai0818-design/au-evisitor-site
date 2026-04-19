"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/evisitor-info/what-is-evisitor/", label: "Czym jest eVisitor" },
  { href: "/evisitor-info/application/", label: "Wniosek" },
  { href: "/evisitor-info/fee/", label: "Opłaty" },
  { href: "/evisitor-info/required-documents/", label: "Dokumenty" },
  { href: "/evisitor-info/eta-vs-evisitor/", label: "ETA vs eVisitor" },
  { href: "/faq/", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ backgroundColor: "#00008B" }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white no-underline">
          <span className="text-2xl font-bold font-[Merriweather]">
            <span style={{ color: "#FFD700" }}>AU</span> eVisitor
          </span>
          <span className="text-xs opacity-70 hidden sm:inline">Polska</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/90 hover:text-[#FFD700] px-3 py-2 rounded text-sm font-medium transition-colors no-underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/20 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-white/90 hover:text-[#FFD700] px-6 py-3 text-sm no-underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
