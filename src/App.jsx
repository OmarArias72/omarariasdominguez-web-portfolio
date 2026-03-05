import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
    </>
  );
}

export default App;
