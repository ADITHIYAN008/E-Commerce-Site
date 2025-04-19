import React from "react";
import Navbar from "./func-components/Navbar";
import HeroSection from "./func-components/HeroSection";
import Companies from "./func-components/Companies";
import NewArrivals from "./func-components/NewArrivals";
import TopSelling from "./func-components/TopSelling";
import BrowseStyle from "./func-components/BrowseStyle";
import Testimonials from "./func-components/Testimonials";
import Footer from "./func-components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Companies />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
