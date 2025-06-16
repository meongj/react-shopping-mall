import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bottom from "./pages/Bottom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bottom" element={<Bottom />} />
      </Routes>
    </BrowserRouter>
  );
}
