import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FirstSection from "./components/FirstSection";
import FaqSection from "./components/FaqSection";

const App = () => {
   return (
      <div>
         <NavBar />
         <HeroSection />
         <FirstSection />
         <FaqSection />
      </div>
   );
};

export default App;
