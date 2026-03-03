import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Projects></Projects>
      <About></About>
    </>
  );
}

export default App;
