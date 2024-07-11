import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import CataloguePage from "./pages/CataloguePage";
import CataloguePageNew from "./pages/CataloguePageNew";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import QuotationPage from "./pages/QuotationPage";
import CataloguePageRenovated from "./pages/CataloguePageRenovated";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/servicios" element={<ServicePage />} />
        <Route path="/llantas" element={<CataloguePage />} />
        <Route path="/cotizacion" element={<QuotationPage/>} />
        <Route path="/catalogo-nuevo" element={<CataloguePageNew />} />
        <Route path="/catalogo-renovado" element={<CataloguePageRenovated/>} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
