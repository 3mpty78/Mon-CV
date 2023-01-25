import "./styles/style.css";
import React from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Realisations from "./components/Realisations";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Timeline />
      <Realisations />
      <Skills />
    </>
  );
};

export default App;
