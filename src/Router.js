import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import GraphicDesign from "./pages/GraphicDesign";
import BrandMarketing from "./pages/BrandMarketing";
import BrandMarketingGallery from "./pages/BrandMarketingGallery";
import GraphicDesignGallery from "./pages/GraphicDesignGallery";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/brand-marketing" element={<BrandMarketing />} />
  {/* Removed ActingModeling routes */}
  <Route path="/brand-marketing/gallery" element={<BrandMarketingGallery />} />
  <Route path="/graphic-design/gallery" element={<GraphicDesignGallery />} />
        {/* Removed ModelingActingGallery route */}
      </Routes>
    </Router>
  );
}
