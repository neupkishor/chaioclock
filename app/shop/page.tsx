export default function Shop() {
  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Shop</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            Take a piece of Chai O&apos; Clock home with you. Our curated selection of teas, blends, and merchandise.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Masala Chai Blend", description: "Our signature spiced tea mix, enough for 15 cups", price: "₹250" },
              { name: "Chai O&apos; Clock Mug", description: "Handcrafted ceramic mug with our logo", price: "₹450" },
              { name: "Elaichi Chai Box", description: "Premium cardamom-infused loose leaf tea", price: "₹320" },
              { name: "Chai Gift Hamper", description: "Assorted teas, snacks, and a mug — perfect for gifting", price: "₹1,200" },
              { name: "Reusable Tote Bag", description: "Cotton canvas tote with Chai O&apos; Clock print", price: "₹350" },
              { name: "Stainless Steel Flask", description: "Keep your chai hot on the go", price: "₹890" },
            ].map((item) => (
              <div key={item.name} className="border border-foreground/10 rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <h3 className="font-serif text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="font-serif text-lg font-semibold text-accent">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
