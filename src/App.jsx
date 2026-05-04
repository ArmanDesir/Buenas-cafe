import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import AdminLogin from "./admin/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Side */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/edit/:id" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
