// App.jsx
import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Contact,
  Footer,
  Navbar,
  Hero,
  Facilities,
  LearnMore,
  Activities,
  Gallery,
  Reviews,
  Loader,
} from "./components/index.js";
import Pranayama from "./components/Pranayama/Pranayama.jsx";
import PaypalSuccess from "./pages/PaypalSuccess";
import PaypalCancel from "./pages/PaypalCancel";

function HomePage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize once

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
      <Navbar />

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="astrology">
        <Facilities />
      </Element>

      <Element name="about">
        <LearnMore />
      </Element>

      <Element name="horoscopes">
        <Gallery />
      </Element>
      
      <Element name="services">
        <Activities />
      </Element>


      <Element name="contact us">
        <Contact />
      </Element>

      {/* <Element name="daily panchang">
        <Reviews />
      </Element> */}

      {/* <Element name="pranayama new">
        <Pranayama />
      </Element> */}

      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // Initial splash loader (once)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paypal-success" element={<PaypalSuccess />} />
          <Route path="/paypal-cancel" element={<PaypalCancel />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
