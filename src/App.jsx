import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ProductSection from "./components/ProductSection";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import CaseStudies from "./pages/Case";
import Logistics from "./pages/Logistics";
import Testimonials from "./components/Testemonials";
import CustomerSupport from "./components/CustomerSupport";
import Faq from "./components/Faq";
import Help from "./components/Help";
import About from "./components/AboutUs";
import FleetManagement from "./components/FleetManagement";
import TruckRental from "./components/TruckRental";
import Accessories from "./pages/Accessories";
import MediumTrucks from "./pages/MediumTrucks";
import LargeTrucks from "./pages/LargeTrucks";

function App() {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Case" element={<CaseStudies />} />
            <Route path="/Logistics" element={<Logistics />} />
            <Route path="/Testemonials" element={<Testimonials />} />
            <Route path="/CustomerSupport" element={<CustomerSupport />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/FleetManagement" element={<FleetManagement />} />
            <Route path="/TruckRental" element={<TruckRental />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/medium-trucks" element={<MediumTrucks />} />
            <Route path="/large-trucks" element={<LargeTrucks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
