import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import CarDetail from "./pages/CarDetail";
import Dealers from "./pages/Dealers";
import DealerDetail from "./pages/DealerDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="main-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:slug" element={<CarDetail />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/dealers/:slug" element={<DealerDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
