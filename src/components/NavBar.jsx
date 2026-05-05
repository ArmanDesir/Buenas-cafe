import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl tracking-tighter font-black italic">
          BUENAS<span className="text-amber-500">CAFÉ</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[13px] font-medium uppercase tracking-widest text-white/50">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-amber-400 transition-colors">
            Products
          </Link>
          <Link to="/about" className="hover:text-amber-400 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </nav>

        <Link
          to="/products"
          className="group relative px-6 py-2 overflow-hidden rounded-full bg-amber-500 font-bold text-black transition-all hover:pr-10"
        >
          <span className="relative z-10">Order Now</span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-xl">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
