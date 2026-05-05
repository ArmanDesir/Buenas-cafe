import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <NavBar />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black mb-6">About Us</h1>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
          Welcome to Buenas Café — where every roast is crafted with intention,
          care, and a deep love for the bean. We believe in building lasting
          connections with our coffee community through quality, transparency,
          and unforgettable flavor.
        </p>
      </main>
    </div>
  );
}
