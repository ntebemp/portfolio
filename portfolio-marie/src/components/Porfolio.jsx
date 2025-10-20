import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import '../styles/Porfolio.css'
import PortfolioSection from "./PorfolioSection";
import PricingGrid from "./PricingGrid";

const Portfolio = () => {
  return (
    
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Services />
        <PortfolioSection />
        <PricingGrid/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
