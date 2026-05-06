import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentImages, setCurrentImages] = useState({});
  const [touchStart, setTouchStart] = useState(null);

  const categories = [
    { name: "Drinks", subs: ["coffee", "non-coffee", "soda", "matcha series"] },
    { name: "Street Foods", subs: ["street foods"] },
    { name: "Snack Corner", subs: ["snack corner"] },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");
    setProducts(saved);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-0 px-6 pb-20">
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">
            Our <span className="text-amber-500">Menu</span>
          </h2>
          <p className="text-white/30 tracking-widest uppercase text-xs">
            Small batches • Big personality
          </p>
        </div>

        {categories.map((cat) => {
          const catProducts = products.filter((p) => cat.subs.includes(p.category));
          if (catProducts.length === 0) return null;

          return (
            <div key={cat.name} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-amber-500 uppercase tracking-wider">
                {cat.name}
              </h3>

              <div className="grid md:grid-cols-4 gap-6">
                {catProducts.map((item) => {
                  const images = Array.isArray(item.images) ? item.images : [];
                  const currentIndex = currentImages[item.id] || 0;

                  return (
                    <div key={item.id} className="group cursor-pointer">
                      <div
                        className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/5 mb-6"
                        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                        onTouchEnd={(e) => {
                          if (!touchStart) return;
                          const end = e.changedTouches[0].clientX;
                          const diff = touchStart - end;
                          if (Math.abs(diff) > 50) {
                            if (diff > 0) {
                              setCurrentImages((prev) => ({
                                ...prev,
                                [item.id]: Math.min(
                                  images.length - 1,
                                  (prev[item.id] || 0) + 1,
                                ),
                              }));
                            } else {
                              setCurrentImages((prev) => ({
                                ...prev,
                                [item.id]: Math.max(
                                  0,
                                  (prev[item.id] || 0) - 1,
                                ),
                              }));
                            }
                          }
                          setTouchStart(null);
                        }}
                      >
                        <img
                          src={
                            images[currentIndex] ||
                            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000"
                          }
                          alt={item.name || "Product image"}
                          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        <span className="absolute bottom-6 right-6 px-4 py-1 bg-amber-500 text-black font-black rounded-full text-sm">
                          ₱{item.price}
                        </span>

                        {images.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentImages((prev) => ({
                                  ...prev,
                                  [item.id]: Math.max(0, (prev[item.id] || 0) - 1),
                                }))
                              }
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition"
                            >
                              ‹
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentImages((prev) => ({
                                  ...prev,
                                  [item.id]: Math.min(
                                    images.length - 1,
                                    (prev[item.id] || 0) + 1,
                                  ),
                                }))
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition"
                            >
                              ›
                            </button>
                          </>
                        )}
                      </div>

                      <h4 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>

                      {images.length > 1 && (
                        <div className="flex gap-1 mt-4">
                          {images.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all ${
                                i === currentIndex ? "w-4 bg-amber-500" : "w-1 bg-white/20"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
