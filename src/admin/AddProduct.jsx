import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    category: "",
    images: [""], // Array to hold 1-5 image data URIs from local uploads
  });

  useEffect(() => {
    if (id) {
      const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");
      const productToEdit = saved.find((p) => p.id === id);
      if (productToEdit) setFormData(productToEdit);
    }
  }, [id]);

  const handleImageChange = (index, file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const newImages = [...formData.images];
      newImages[index] = reader.result;
      setFormData({ ...formData, images: newImages });
    };
    reader.readAsDataURL(file);
  };

  const addImageField = () => {
    if (formData.images.length < 5) {
      setFormData({ ...formData, images: [...formData.images, ""] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.images[0])
      return alert("At least one image URL is required!");

    const saved = JSON.parse(localStorage.getItem("coffee_products") || "[]");

    if (id) {
      const updated = saved.map((p) => (p.id === id ? { ...formData, id } : p));
      localStorage.setItem("coffee_products", JSON.stringify(updated));
    } else {
      const newProduct = { ...formData, id: Date.now().toString() };
      localStorage.setItem(
        "coffee_products",
        JSON.stringify([...saved, newProduct]),
      );
    }
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 w-full max-w-2xl"
      >
        <h2 className="text-3xl font-black mb-8">
          {id ? "Edit Product" : "New Collection Item"}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Details
            </label>
            <input
              required
              type="text"
              placeholder="Bean Name"
              className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-amber-500 outline-none transition-colors"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              required
              type="text"
              placeholder="Price (e.g. 24.00)"
              className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-amber-500 outline-none transition-colors"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <textarea
              required
              placeholder="Describe the roast profile..."
              className="w-full bg-black/50 border border-white/10 p-4 rounded-xl h-32 focus:border-amber-500 outline-none transition-colors"
              value={formData.desc}
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
            />
            <select
              required
              className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-amber-500 outline-none transition-colors"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <optgroup label="Drinks">
                <option value="coffee">Coffee</option>
                <option value="non-coffee">Non-Coffee</option>
                <option value="soda">Soda</option>
                <option value="matcha series">Matcha Series</option>
              </optgroup>
              <option value="street foods">Street Foods</option>
              <option value="snack corner">Snack Corner</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Upload Images (Max 5)
            </label>
            {formData.images.map((image, index) => (
              <div key={index} className="space-y-2">
                <input
                  required={index === 0}
                  type="file"
                  accept="image/*"
                  className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-sm focus:border-amber-500 outline-none"
                  onChange={(e) =>
                    handleImageChange(index, e.target.files?.[0])
                  }
                />
                {image && (
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="h-24 w-full object-cover rounded-xl border border-white/10"
                  />
                )}
              </div>
            ))}
            {formData.images.length < 5 && (
              <button
                type="button"
                onClick={addImageField}
                className="text-xs font-bold text-white/40 hover:text-amber-500 transition-colors"
              >
                + Add another image slot
              </button>
            )}
          </div>
        </div>

        <button className="w-full mt-10 py-4 bg-amber-500 text-black font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all">
          SAVE TO COLLECTION
        </button>
      </form>
    </div>
  );
}
