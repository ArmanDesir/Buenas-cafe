import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 font-sans selection:bg-amber-400 selection:text-black pb-20">
      <NavBar />
      <main className="max-w-7xl mx-auto pt-20">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg mb-8">
          Have a question or want to place an order? Reach out and we’ll respond
          as soon as your coffee finishes brewing.
        </p>
        <div className="space-y-4 text-white/80">
          <p>Email: hello@buenascafe.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: 123 Roast St, Coffee City</p>
        </div>
      </main>
    </div>
  );
}
