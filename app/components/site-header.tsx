"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 shadow-md border-b border-foreground/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">Chai O&apos; Clock</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/shop" className="text-foreground/70 hover:text-accent transition-colors">Shop</Link>
          <Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">About</Link>
          <Link href="/contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</Link>
          <Link href="/order" className="px-4 py-2 bg-foreground text-background rounded-full text-xs hover:bg-accent transition-colors">
            Order
          </Link>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 text-foreground/70 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-foreground/5 bg-background/95 backdrop-blur-md">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm font-medium">
              <Link href="/shop" onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-accent transition-colors py-2">Shop</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-accent transition-colors py-2">About</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-accent transition-colors py-2">Contact</Link>
              <Link href="/order" onClick={() => setMenuOpen(false)} className="px-4 py-3 bg-foreground text-background rounded-full text-xs text-center hover:bg-accent transition-colors">
                Order
              </Link>
            </nav>
        </div>
      )}
    </header>
  );
}
