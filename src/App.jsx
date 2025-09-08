import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/Case";
import Logistics from "./pages/Logistics";
import Testimonials from "./components/Testemonials";
import CustomerSupport from "./components/CustomerSupport";
import Faq from "./components/Faq";
import Help from "./components/Help";
import About from "./components/AboutUs";
import FleetManagement from "./components/FleetManagement";
import TruckRental from "./components/TruckRental";
import PrivateRoute from "./components/PrivateRoute";
import Accessories from "./pages/Accessories";
import MediumTrucks from "./pages/MediumTrucks";
import LargeTrucks from "./pages/LargeTrucks";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import AuthPage from "./pages/AuthPage";
import "./App.css";
import Cout from "./pages/Cout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* ✅ Protected checkout route */}
          <Route
            path="/checkout/:id"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/cout/:id"
            element={
              <PrivateRoute>
                <Cout />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
