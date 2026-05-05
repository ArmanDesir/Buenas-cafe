import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 font-sans selection:bg-amber-400 selection:text-black">
      <NavBar />

      {/* GLOW EFFECT BEYOND THE CONTENT */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-900/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 flex flex-col justify-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 rounded-full text-amber-500">
              Est. 2024 • Premium Roastery
            </span>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              WAKE UP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">
                YOUR SOUL.
              </span>
            </h2>
            <p className="max-w-md text-lg text-white/40 leading-relaxed mb-10">
              Beyond the bean. We source rare micro-lots to bring you a coffee
              experience that hits different. Every cup is a masterpiece.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-white text-black font-black rounded-xl hover:bg-amber-400 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                VIEW COLLECTIONS
              </button>
              <button className="px-10 py-4 border border-white/10 font-bold rounded-xl hover:bg-white/5 transition-all">
                OUR PROCESS
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop"
              alt="Coffee"
              className="relative z-10 w-full max-w-[520px] aspect-[4/5] object-cover rounded-[2rem] grayscale-[0.2] contrast-[1.1] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BENTO FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex flex-col justify-end min-h-[300px] group hover:bg-white/[0.04] transition-all">
            <div className="w-12 h-12 mb-6 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-500 text-2xl group-hover:scale-110 transition-transform">
              ☕
            </div>
            <h3 className="text-3xl font-bold mb-4">Ethically Sourced</h3>
            <p className="text-white/40 max-w-sm">
              Direct trade relationships ensuring the highest quality and fair
              pay for our farmers.
            </p>
          </div>

          <div className="p-10 bg-amber-500 border border-amber-400 rounded-[2.5rem] flex flex-col justify-end text-black group hover:-rotate-2 transition-all">
            <h3 className="text-3xl font-black mb-4">
              24h <br />
              Roast
            </h3>
            <p className="font-medium opacity-80">
              Freshness you can smell from the street.
            </p>
          </div>

          <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:col-span-1 group hover:bg-white/[0.04] transition-all">
            <h3 className="text-xl font-bold mb-2">Artisan Vibe</h3>
            <p className="text-white/40">
              Custom interiors designed for your creative flow.
            </p>
          </div>

          <div className="md:col-span-2 p-10 bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-[2.5rem] flex items-center justify-between group overflow-hidden">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join the Club</h3>
              <p className="text-white/40">
                Subscribers get 20% off every order.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm">
              JOIN NOW
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 text-white/20 text-xs tracking-widest font-bold uppercase">
        <p>© {new Date().getFullYear()} BUENAS CAFÉ CO.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <Link
            to="/admin/login"
            className="hover:text-white transition-colors"
          >
            Admin Login
          </Link>
        </div>
      </footer>
    </div>
  );
}
