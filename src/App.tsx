import React from "react";

import { Header } from "./ui/header/Header";
import { Projects, Contact, Hero, Skills } from "./components";
import { Footer } from "./ui/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="h-line"></div>
        <Skills />
        <div className="h-line"></div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
