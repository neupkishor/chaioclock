"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="py-16 px-6 bg-foreground text-background/90 border-t border-foreground/80">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-serif text-2xl font-semibold mb-4">Chai O&apos; Clock</p>
          <p className="text-background/60 text-sm leading-relaxed">A cozy corner for handcrafted chai and warm conversations in the heart of Kathmandu.</p>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/shop" className="text-background/60 hover:text-background transition-colors">Shop</Link>
            <Link href="/about" className="text-background/60 hover:text-background transition-colors">About</Link>
            <Link href="/contact" className="text-background/60 hover:text-background transition-colors">Contact</Link>
            <Link href="/order" className="text-background/60 hover:text-background transition-colors">Order</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold mb-4">Visit Us</h3>
          <div className="text-sm text-background/60 leading-relaxed space-y-2">
            <p>Bijulibazar Marg, Kathmandu, Nepal</p>
            <p>Open Daily: 8:30am - 8:30pm</p>
            <p>hello@chaioclock.in</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-background/50">© 2026 Chai O&apos; Clock. Made with love and lots of chai.</p>
        <p className="text-background/50">
          Made using <a href="https://neupgroup.com/site" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background underline underline-offset-2 transition-colors">Neup.Site</a> and Proudly Powered by <a href="https://neupgroup.com/tourio" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background underline underline-offset-2 transition-colors">Neup.Tourio</a>
        </p>
      </div>
    </footer>
  );
}
