import "./styles/style.css";
import React from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Realisations from "./components/Realisations";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Timeline />
      <Realisations />
      <Skills />
      <About />
      <Footer />
    </>
  );
};

export default App;
