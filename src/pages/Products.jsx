import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");
    setProducts(saved);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 px-6 pb-20">
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black tracking-tighter uppercase mb-4">
            The <span className="text-amber-500">Roasts</span>
          </h2>
          <p className="text-white/30 tracking-widest uppercase text-xs">
            Small batches • Big personality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 mb-6">
                <img
                  src={
                    item.images?.[0] ||
                    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000"
                  }
                  alt={item.name || "Product image"}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-6 right-6 px-4 py-1 bg-amber-500 text-black font-black rounded-full text-sm">
                  ${item.price}
                </span>
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                {item.desc}
              </p>

              {/* GALLERY DOTS (Visual indicator of multiple images) */}
              {item.images.length > 1 && (
                <div className="flex gap-1 mt-4">
                  {item.images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all ${i === 0 ? "w-4 bg-amber-500" : "w-1 bg-white/20"}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
