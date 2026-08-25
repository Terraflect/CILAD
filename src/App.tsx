import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ComingSoon } from "./pages/ComingSoon";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-heritage-bg">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

