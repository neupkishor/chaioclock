
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

export default function Home() {
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

      {/* About Section */}
      <section className="py-24 px-6 bg-cream/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Born from a love for the perfect cup of chai, Chai O&apos; Clock is more than a cafe — it&apos;s a pause button in your day. We believe that great tea and good company can turn an ordinary moment into something special.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">Our Menu</h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Teas */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-accent">Teas</h3>
              <div className="space-y-8">
                {menuItems.map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-foreground/10 pb-6">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <span className="font-serif text-lg font-semibold text-accent whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Snacks */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-accent">Snacks</h3>
              <div className="space-y-8">
                {snacks.map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-foreground/10 pb-6">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <span className="font-serif text-lg font-semibold text-accent whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-24 px-6 bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Location</h3>
              <p className="text-foreground/70 leading-relaxed">42, Tea Garden Lane<br />Koramangala, Bengaluru<br />Karnataka 560034</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Hours</h3>
              <p className="text-foreground/70 leading-relaxed">Mon - Fri: 8am - 10pm<br />Sat - Sun: 9am - 11pm</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Contact</h3>
              <p className="text-foreground/70 leading-relaxed">hello@chaioclock.in<br />+91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-xl font-semibold">Chai O&apos; Clock</p>
          <p className="text-foreground/50 text-sm">© 2026 Chai O&apos; Clock. Made with love and lots of chai.</p>
        </div>
      </footer>
    </main>
  );
}
