import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This pulls whatever the Admin saved
    const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");
    setProducts(saved);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-16 tracking-tighter uppercase text-center">
          The <span className="text-amber-500">Menu</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] transition-all"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-zinc-800 to-black rounded-2xl mb-6" />
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-white/40 text-sm mt-2">{item.desc}</p>
                  </div>
                  <span className="text-amber-500 font-black text-xl">
                    ${item.price}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-white/20">
              No products found. Add some in the Admin side!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
