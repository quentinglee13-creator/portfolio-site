import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import GraphicDesign from "./pages/GraphicDesign";
import BrandMarketing from "./pages/BrandMarketing";
import ActingModeling from "./pages/ActingModeling";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/brand-marketing" element={<BrandMarketing />} />
        <Route path="/acting-modeling" element={<ActingModeling />} />
      </Routes>
    </Router>
  );
}
