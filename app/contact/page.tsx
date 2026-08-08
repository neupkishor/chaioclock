"use client";

export default function Contact() {
  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            We&apos;d love to hear from you. Drop by for a chai or send us a message.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6 text-accent">Get in Touch</h2>
              <div className="space-y-6 text-foreground/70">
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p>Bijulibazar Marg<br />Kathmandu, Nepal</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p>+91 98765 43210</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>hello@chaioclock.in</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p>Open Daily: 8:30am - 8:30pm</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6 text-accent">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:border-accent transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:border-accent transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:border-accent transition-colors resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
