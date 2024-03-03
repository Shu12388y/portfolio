import React from "react";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { Avatar } from "./components/Avatar";
function App() {
  return (
    <>
      <NavBar />
      <section id="about">
        <HeroSection />
      </section>
      <section >
        <Skills />
      </section>
      <section>
        <Avatar/>
      </section>
    </>
  );
}

export default App;
