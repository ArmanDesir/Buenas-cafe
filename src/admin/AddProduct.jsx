import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", price: "", desc: "" });

  useEffect(() => {
    if (id) {
      const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");
      const productToEdit = saved.find((p) => p.id === id);
      if (productToEdit) setFormData(productToEdit);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");

    if (id) {
      // Edit logic
      const updated = saved.map((p) => (p.id === id ? { ...formData, id } : p));
      localStorage.setItem("coffee_products", JSON.stringify(updated));
    } else {
      // Add logic
      const newProduct = { ...formData, id: Date.now().toString() };
      localStorage.setItem(
        "coffee_products",
        JSON.stringify([...saved, newProduct]),
      );
    }
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">
          {id ? "Edit Product" : "Add New Product"}
        </h2>
        <input
          type="text"
          placeholder="Bean Name"
          className="w-full bg-black/50 border border-white/10 p-4 rounded-xl mb-4 focus:border-amber-500 outline-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price (e.g. 18)"
          className="w-full bg-black/50 border border-white/10 p-4 rounded-xl mb-4 focus:border-amber-500 outline-none"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full bg-black/50 border border-white/10 p-4 rounded-xl mb-6 focus:border-amber-500 outline-none"
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        />
        <button className="w-full py-4 bg-amber-500 text-black font-black rounded-xl">
          SAVE PRODUCT
        </button>
      </form>
    </div>
  );
}
