import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentImages, setCurrentImages] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [activeSection, setActiveSection] = useState("coffee");
  const [showDrinksDropdown, setShowDrinksDropdown] = useState(false);

  const drinksGroups = [
    { label: "Coffee", key: "coffee" },
    { label: "Non-Coffee", key: "non-coffee" },
    { label: "Soda", key: "soda" },
    { label: "Matcha Series", key: "matcha series" },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");
    setProducts(saved);
  }, []);

  const activeSectionLabel =
    drinksGroups.find((group) => group.key === activeSection)?.label ||
    activeSection;

  const activeProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() === activeSection.toLowerCase(),
  );

  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 font-sans selection:bg-amber-400 selection:text-black pb-20">
      <NavBar />
      <main className="max-w-7xl mx-auto pt-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
            Our <span className="text-amber-500">Menu</span>
          </h2>
          <p className="text-white/30 tracking-widest uppercase text-xs">
            Small batches • Big personality
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 ">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowDrinksDropdown((prev) => !prev)}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Drinks
              <span className="rounded-full bg-amber-500 px-3 py-1 text-black">
                {activeSectionLabel}
              </span>
            </button>

            <div
              className={`absolute left-0 top-full z-20 mt-3 w-56 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-xl transition-all ${
                showDrinksDropdown ? "block" : "hidden"
              }`}
            >
              {drinksGroups.map((group) => (
                <button
                  key={group.key}
                  type="button"
                  onClick={() => {
                    setActiveSection(group.key);
                    setShowDrinksDropdown(false);
                  }}
                  className="w-full px-5 py-3 text-left text-sm text-white transition hover:bg-white/5"
                >
                  {group.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveSection("street foods");
              setShowDrinksDropdown(false);
            }}
            className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
              activeSection === "street foods"
                ? "border-amber-500 bg-amber-500 text-black"
                : "border-white/10 bg-black/60 text-white hover:bg-black/80"
            }`}
          >
            Street Foods
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveSection("snack corner");
              setShowDrinksDropdown(false);
            }}
            className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
              activeSection === "snack corner"
                ? "border-amber-500 bg-amber-500 text-black"
                : "border-white/10 bg-black/60 text-white hover:bg-black/80"
            }`}
          >
            Snack Corner
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {activeProducts.map((item) => {
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
                          [item.id]: Math.max(0, (prev[item.id] || 0) - 1),
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
                  <span className="absolute bottom-6 right-6 px-4 py-1 bg-amber-500 text-black font-bold rounded-full text-sm">
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

                <h4 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
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
                          i === currentIndex
                            ? "w-4 bg-amber-500"
                            : "w-1 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
