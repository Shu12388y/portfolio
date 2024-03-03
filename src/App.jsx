import React from "react";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { Avatar } from "./components/Avatar";
import Works from "./components/Works";
import { Footer } from "./components/Footer";
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
