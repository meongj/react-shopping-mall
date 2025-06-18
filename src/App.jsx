import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bottom from "./pages/Bottom/Bottom";
import "./App.css";
import ProductDetail from "./pages/product-detail/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
