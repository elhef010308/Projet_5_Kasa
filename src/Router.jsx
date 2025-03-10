import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout.jsx";  // structure principale (Header/Footer)

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/logement/:id" element={<Layout><Logement /></Layout>} />
      
      {/* Nouvelle route explicite pour NotFound */}
      <Route path="/404" element={<Layout><NotFound /></Layout>} />

      {/* Cette route gère toutes les URLs inconnues et redirige vers /404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
