import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { LoadingScreen } from "./components/LoadingScreen";
import "./styles/animations.css";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-white">
        <Analytics />
        <LoadingScreen />
        <NavBar />
        <main>
          <RevealOnScroll>
            <Home />
          </RevealOnScroll>
          <RevealOnScroll>
            <About />
          </RevealOnScroll>
          <RevealOnScroll>
            <Experience />
          </RevealOnScroll>
          <RevealOnScroll>
            <Projects />
          </RevealOnScroll>
          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>
          <RevealOnScroll>
            <Footer />
          </RevealOnScroll>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
