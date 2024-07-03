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
        <Route path="/home" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/quotation" element={<QuotationPage/>} />
        <Route path="/catalogueNew" element={<CataloguePageNew />} />
        <Route path="/catalogueRenovated" element={<CataloguePageRenovated/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
