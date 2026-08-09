"use client";

import { useState, useEffect } from "react";
import { menuData } from "@/menu";

const CART_KEY = "chaioclock-cart";

export default function Home() {
  const [teaFilter, setTeaFilter] = useState<string>("all");
  const [snackFilter, setSnackFilter] = useState<string>("all");
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState<{ name: string; description: string; price: number; qty: number }[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart, mounted]);

  const teaItems = menuData.filter((item) => item.tags.includes("tea") || item.tags.includes("coffee") || item.tags.includes("milk-base") || item.tags.includes("water-base"));
  const snackItems = menuData.filter((item) => item.tags.includes("vegetarian") || item.tags.includes("non-vegetarian"));

  const filteredTea = teaFilter === "all" ? teaItems : teaItems.filter((item) => item.tags.includes(teaFilter));
  const filteredSnacks = snackFilter === "all" ? snackItems : snackItems.filter((item) => item.tags.includes(snackFilter));

  const addItem = (item: { name: string; description: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((o) => o.name === item.name);
      if (existing) {
        return prev.map((o) => (o.name === item.name ? { ...o, qty: o.qty + 1 } : o));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (name: string) => {
    setCart((prev) => {
      const existing = prev.find((o) => o.name === name);
      if (existing) {
        if (existing.qty === 1) return prev.filter((o) => o.name !== name);
        return prev.map((o) => (o.name === name ? { ...o, qty: o.qty - 1 } : o));
      }
      return prev;
    });
  };

  const getItemQty = (name: string) => cart.find((o) => o.name === name)?.qty || 0;

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-6 font-medium">Welcome to</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 tracking-tight">
            Chai O&apos; Clock
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-xl mx-auto leading-relaxed">
            A cozy corner for handcrafted chai and warm conversations
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-colors duration-300"
            >
              Explore Menu
            </a>
            <a
              href="#visit"
              className="px-8 py-4 border border-foreground/20 rounded-full text-sm font-medium hover:border-foreground/40 transition-colors duration-300"
            >
              Visit Us
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">Our Menu</h2>

          {/* Tea & Coffee Section */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Tea & Coffee</h3>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
                From classic kadak chai to refreshing iced teas and strong coffee, find your perfect brew.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <button onClick={() => setTeaFilter("all")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${teaFilter === "all" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  All
                </button>
                <button onClick={() => setTeaFilter("tea")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${teaFilter === "tea" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Tea
                </button>
                <button onClick={() => setTeaFilter("coffee")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${teaFilter === "coffee" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Coffee
                </button>
                <button onClick={() => setTeaFilter("water-base")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${teaFilter === "water-base" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Water Base
                </button>
                <button onClick={() => setTeaFilter("milk-base")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${teaFilter === "milk-base" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Milk Base
                </button>
                <button onClick={() => setTeaFilter("sugar-free")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${teaFilter === "sugar-free" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Sugar Free
                </button>
              </div>
            </div>

             {filteredTea.length > 0 && (
               <div className="grid md:grid-cols-2 gap-8">
                 {filteredTea.map((item) => {
                   const qty = getItemQty(item.name);
                   return (
                      <div key={item.name} className={`flex justify-between items-start border-b pb-6 transition-colors ${mounted && qty > 0 ? "border-foreground/40" : "border-foreground/10"}`}>
                        <div className="flex-1 pr-4">
                          <h4 className="font-semibold text-lg mb-1">
                            {item.name}
                            {mounted && qty > 0 && <span className="text-accent ml-2">({qty})</span>}
                          </h4>
                          <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="font-serif text-lg font-semibold text-accent whitespace-nowrap">₹{item.price}</span>
                          <div className="flex items-center gap-2">
                            {mounted && qty > 0 ? (
                              <button onClick={() => removeItem(item.name)} className="w-7 h-7 rounded-full border border-foreground/20 flex items-center justify-center text-sm font-medium hover:border-foreground/40 transition-colors">
                                -
                              </button>
                            ) : null}
                            <button onClick={() => addItem(item)} className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${mounted && qty > 0 ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                   );
                 })}
               </div>
             )}
          </div>

          {/* Snacks Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Snacks</h3>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
                Crispy, savory, and freshly made to pair perfectly with your chai.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <button onClick={() => setSnackFilter("all")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${snackFilter === "all" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  All
                </button>
                <button onClick={() => setSnackFilter("vegetarian")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${snackFilter === "vegetarian" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Vegetarian
                </button>
                <button onClick={() => setSnackFilter("non-vegetarian")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${snackFilter === "non-vegetarian" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Non-Vegetarian
                </button>
                <button onClick={() => setSnackFilter("sugar-free")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${snackFilter === "sugar-free" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                  Sugar-Free
                </button>
              </div>
            </div>

             {filteredSnacks.length > 0 && (
               <div className="grid md:grid-cols-2 gap-8">
                 {filteredSnacks.map((item) => {
                   const qty = getItemQty(item.name);
                   return (
                      <div key={item.name} className={`flex justify-between items-start border-b pb-6 transition-colors ${mounted && qty > 0 ? "border-foreground/40" : "border-foreground/10"}`}>
                        <div className="flex-1 pr-4">
                          <h4 className="font-semibold text-lg mb-1">
                            {item.name}
                            {mounted && qty > 0 && <span className="text-accent ml-2">({qty})</span>}
                          </h4>
                          <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="font-serif text-lg font-semibold text-accent whitespace-nowrap">₹{item.price}</span>
                          <div className="flex items-center gap-2">
                            {mounted && qty > 0 ? (
                              <button onClick={() => removeItem(item.name)} className="w-7 h-7 rounded-full border border-foreground/20 flex items-center justify-center text-sm font-medium hover:border-foreground/40 transition-colors">
                                -
                              </button>
                            ) : null}
                            <button onClick={() => addItem(item)} className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${mounted && qty > 0 ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                   );
                 })}
               </div>
             )}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Born from a love for the perfect cup of chai, Chai O&apos; Clock is more than a cafe — it&apos;s a pause button in your day. We believe that great tea and good company can turn an ordinary moment into something special.
          </p>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Location</h3>
              <a href="https://maps.app.goo.gl/1Vm8e7S9Q4JyDdih8" target="_blank" rel="noopener noreferrer" className="text-foreground/70 leading-relaxed hover:text-accent transition-colors">
                Bijulibazar Marg<br />Kathmandu, Nepal
              </a>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Hours</h3>
              <p className="text-foreground/70 leading-relaxed">Open Daily: 8:30am - 8:30pm</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Contact</h3>
              <p className="text-foreground/70 leading-relaxed">hello@chaioclock.in<br />+91 98765 43210</p>
            </div>
          </div>
          <div className="mt-12 w-full h-[400px] rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8507187784517!2d85.3290574!3d27.6910084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19004a75c86f%3A0x33cfd35d9243aa5a!2sCHAI%20O'Clock%20Bijulibazar!5e0!3m2!1sen!2snp!4v1786217465836!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chai O' Clock Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
