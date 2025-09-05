import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import ProductSection from "../components/ProductSection";
import Testemonials from "../components/Testemonials";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  return (
    <div>
      <div>
        <ToastContainer />
        <Hero />
        <StatsSection />
        <ProductSection />
        <Testemonials />
        <Contact />
      </div>
    </div>
  );
}
