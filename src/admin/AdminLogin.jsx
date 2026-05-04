import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/admin");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-black text-center mb-8">
          BUENAS<span className="text-amber-500">CAFÉ</span> Admin
        </h1>
        <form
          onSubmit={handleLogin}
          className="bg-white/5 border border-white/10 rounded-xl p-8"
        >
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-500"
              placeholder="admin@buenascafe.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="mb-6 text-red-400 text-sm">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
