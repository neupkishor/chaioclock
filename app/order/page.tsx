"use client";

import { useState } from "react";

const menuItems = [
  { name: "Masala Chai", description: "Traditional spiced tea with cardamom, cinnamon, and ginger", price: "₹60" },
  { name: "Adrak Chai", description: "Strong ginger tea with a hint of black pepper", price: "₹50" },
  { name: "Elaichi Chai", description: "Fragrant cardamom-infused milk tea", price: "₹55" },
  { name: "Cutting Chai", description: "The classic Mumbai-style strong tea, served in a glass", price: "₹30" },
  { name: "Herbal Infusion", description: "Caffeine-free blend of mint, lemongrass, and tulsi", price: "₹80" },
  { name: "Chocolate Chai", description: "Rich chocolate with a twist of masala chai", price: "₹90" },
];

const snacks = [
  { name: "Samosa", description: "Crispy golden pastry filled with spiced potatoes", price: "₹25" },
  { name: "Kachori", description: "Flaky deep-fried snack with dal stuffing", price: "₹20" },
  { name: "Paneer Pakora", description: "Cottage cheese fritters with mint chutney", price: "₹70" },
  { name: "Medu Vada", description: "Crispy savory donuts with sambar and coconut chutney", price: "₹60" },
  { name: "Banana Bread", description: "Freshly baked, moist and aromatic", price: "₹90" },
  { name: "Chocolate Muffin", description: "Warm, gooey center with dark chocolate chips", price: "₹75" },
];

export default function Order() {
  const [order, setOrder] = useState<{ name: string; price: string; qty: number }[]>([]);

  const toggleItem = (item: { name: string; price: string }) => {
    setOrder((prev) => {
      const existing = prev.find((o) => o.name === item.name);
      if (existing) {
        if (existing.qty === 1) return prev.filter((o) => o.name !== item.name);
        return prev.map((o) => (o.name === item.name ? { ...o, qty: o.qty - 1 } : o));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const total = order.reduce((sum, item) => sum + parseInt(item.price.replace("₹", "")) * item.qty, 0);

  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Order Online</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            Build your order below and we&apos;ll have it ready for you.
          </p>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold mb-6 text-accent">Menu</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Teas</h3>
                  <div className="space-y-4">
                    {menuItems.map((item) => {
                      const inOrder = order.find((o) => o.name === item.name);
                      return (
                        <div key={item.name} className="flex justify-between items-center border-b border-foreground/10 pb-4">
                          <div className="flex-1 pr-4">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-foreground/60 text-sm">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-serif text-accent">{item.price}</span>
                            <button onClick={() => toggleItem(item)} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${inOrder ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                              {inOrder ? inOrder.qty : "+"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Snacks</h3>
                  <div className="space-y-4">
                    {snacks.map((item) => {
                      const inOrder = order.find((o) => o.name === item.name);
                      return (
                        <div key={item.name} className="flex justify-between items-center border-b border-foreground/10 pb-4">
                          <div className="flex-1 pr-4">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-foreground/60 text-sm">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-serif text-accent">{item.price}</span>
                            <button onClick={() => toggleItem(item)} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${inOrder ? "bg-foreground text-background" : "border border-foreground/20 hover:border-foreground/40"}`}>
                              {inOrder ? inOrder.qty : "+"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6 text-accent">Your Order</h2>
              <div className="border border-foreground/10 rounded-2xl p-6">
                {order.length === 0 ? (
                  <p className="text-foreground/60 text-center py-8">No items added yet</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {order.map((item) => (
                        <div key={item.name} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-foreground/60">Qty: {item.qty}</p>
                          </div>
                          <span className="font-serif text-accent">₹{parseInt(item.price.replace("₹", "")) * item.qty}</span>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
