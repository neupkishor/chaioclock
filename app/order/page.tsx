"use client";

import { useState, useEffect } from "react";
import { menuData } from "@/menu";

const CART_KEY = "chaioclock-cart";

const tagColors: Record<string, string> = {
  "tea": "bg-foreground/10 text-foreground/80",
  "milk-base": "bg-accent/10 text-accent",
  "water-base": "bg-blue-100 text-blue-800",
  "vegetarian": "bg-green-100 text-green-800",
  "non-vegetarian": "bg-red-100 text-red-800",
  "sugar-free": "bg-purple-100 text-purple-800",
};

export default function Order() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
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

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const filteredItems = activeCategory === "all"
    ? menuData
    : menuData.filter((item) => item.tags.includes(activeCategory));

  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Order Online</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            Build your order below and we&apos;ll have it ready for you.
          </p>

          <h2 className="font-serif text-2xl font-semibold mb-6 text-accent">Your Order</h2>
          <div className="border border-foreground/10 rounded-2xl p-6 mb-8">
            {cart.length === 0 ? (
              <p className="text-foreground/60 text-center py-8">No items added yet</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.name} className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-foreground/60">{item.description}</p>
                        <p className="text-sm text-foreground/60">Qty: {item.qty}</p>
                      </div>
                      <span className="font-serif text-accent">₹{item.price * item.qty}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-foreground/10 pt-4 flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="font-serif text-xl font-semibold text-accent">₹{total}</span>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-colors">
                  Place Order
                </button>
              </>
            )}
          </div>

          <h2 className="font-serif text-2xl font-semibold mb-4 text-accent">Menu</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setActiveCategory("all")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "all" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
              All
            </button>
            <button onClick={() => setActiveCategory("milk-base")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "milk-base" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
              Milk Base
            </button>
            <button onClick={() => setActiveCategory("water-base")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "water-base" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
              Water Base
            </button>
            <button onClick={() => setActiveCategory("vegetarian")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "vegetarian" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
              Vegetarian
            </button>
            <button onClick={() => setActiveCategory("non-vegetarian")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "non-vegetarian" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
              Non-Veg
            </button>
            <button onClick={() => setActiveCategory("sugar-free")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "sugar-free" ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
              Sugar-Free
            </button>
          </div>

          <div className="space-y-4">
            {filteredItems.map((item) => {
              const inCart = cart.find((o) => o.name === item.name);
              const qty = inCart?.qty || 0;
              return (
                <div key={item.name} className="flex justify-between items-center border-b border-foreground/10 pb-4">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold">{item.name}</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${tagColors[tag] || "bg-foreground/10 text-foreground/70"}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/60 mt-1">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {mounted && qty > 0 && (
                      <button onClick={() => removeItem(item.name)} className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-sm font-medium hover:border-foreground/40 transition-colors">
                        -
                      </button>
                    )}
                    <button onClick={() => addItem(item)} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${mounted && qty > 0 ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                      {mounted && qty > 0 ? qty : "+"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
