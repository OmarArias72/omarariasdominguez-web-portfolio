import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.css";
import LanguageProvider from "./language/LanguageProvider";
import NavBar from "./components/layout/NavBar";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </LanguageProvider>
  );
}

export default App;