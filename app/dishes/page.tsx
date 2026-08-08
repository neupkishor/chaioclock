export default function Dishes() {
  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Our Dishes</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            From crispy samosas to warm banana bread, every dish is made fresh to pair perfectly with your chai.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-accent">Savory</h2>
              <div className="space-y-8">
                {[
                  { name: "Samosa", description: "Crispy golden pastry filled with spiced potatoes", price: "₹25" },
                  { name: "Kachori", description: "Flaky deep-fried snack with dal stuffing", price: "₹20" },
                  { name: "Paneer Pakora", description: "Cottage cheese fritters with mint chutney", price: "₹70" },
                  { name: "Medu Vada", description: "Crispy savory donuts with sambar and coconut chutney", price: "₹60" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-foreground/10 pb-6">
                    <div className="flex-1 pr-4">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <span className="font-serif text-lg font-semibold text-accent whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-accent">Sweet</h2>
              <div className="space-y-8">
                {[
                  { name: "Banana Bread", description: "Freshly baked, moist and aromatic", price: "₹90" },
                  { name: "Chocolate Muffin", description: "Warm, gooey center with dark chocolate chips", price: "₹75" },
                  { name: "Gulab Jamun", description: "Soft milk-solid dumplings soaked in rose syrup", price: "₹40" },
                  { name: "Jalebi", description: "Crispy, syrupy spirals served warm", price: "₹35" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-foreground/10 pb-6">
                    <div className="flex-1 pr-4">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
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
    </main>
  );
}
