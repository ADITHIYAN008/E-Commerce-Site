import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import BrowseStyle from "./components/BrowseStyle";
import Testimonials from "./components/Testimonials";

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
    </div>
  );
};

export default App;
