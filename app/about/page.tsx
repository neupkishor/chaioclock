export default function About() {
  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">About Us</h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Born from a love for the perfect cup of chai, Chai O&apos; Clock is more than a cafe — it&apos;s a pause button in your day. We believe that great tea and good company can turn an ordinary moment into something special.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">To serve the finest chai and snacks in a warm, welcoming space where everyone feels at home.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Our Values</h3>
              <p className="text-foreground/70 leading-relaxed">Quality ingredients, honest preparation, and genuine hospitality guide everything we do.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-accent">Our Promise</h3>
              <p className="text-foreground/70 leading-relaxed">Every cup is brewed with care, and every visit is treated like a guest in our home.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
