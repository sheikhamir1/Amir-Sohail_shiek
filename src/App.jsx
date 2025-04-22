// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DemoProjects from "./components/DemoProjects";
import Services from "./components/Services";
import ClientReq from "./components/ClientReq";
// ok update

const App = () => {
  return (
    <div
      className=" antialiased text-gray-800 min-h-screen flex flex-col scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <DemoProjects />
        <Services />
        <ClientReq />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
