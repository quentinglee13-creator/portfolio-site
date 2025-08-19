import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import GraphicDesign from "./pages/GraphicDesign";
import BrandMarketing from "./pages/BrandMarketing";
import ActingModeling from "./pages/ActingModeling";
import ActingModelingGallery from "./pages/ActingModelingGallery";
import BrandMarketingGallery from "./pages/BrandMarketingGallery";
import GraphicDesignGallery from "./pages/GraphicDesignGallery";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/brand-marketing" element={<BrandMarketing />} />
        <Route path="/acting-modeling" element={<ActingModeling />} />
  <Route path="/acting-modeling/gallery" element={<ActingModelingGallery />} />
  <Route path="/brand-marketing/gallery" element={<BrandMarketingGallery />} />
  <Route path="/graphic-design/gallery" element={<GraphicDesignGallery />} />
      </Routes>
    </Router>
  );
}
