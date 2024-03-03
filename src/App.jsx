import React from "react";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { Footer } from "./components/Footer";
import Works from "./components/works";
function App() {
  return (
    <>
      <NavBar />
      <section id="about">
        <HeroSection />
      </section>
      <section>
        <Skills />
      </section>

      <section>
        <Works />
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}

export default App;
