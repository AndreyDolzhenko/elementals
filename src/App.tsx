import React, { useState } from "react";

import BaseContent from "./components/BaseBackground";
import Header from "./components/Header";
import Authorization from "./components/Authorization";
import Decorates from "./components/DecorativeElements";
import Gallery from "./components/Carousel";
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  let names = [
    {id: 1},
    {id: 2}
  ];

  return (
    <>
      <Header elements={names} modalOpen={() => setModalOpen(true)} />
      <BaseContent />

      <Gallery />
      <Decorates />
      {isModalOpen ? (
        <Authorization          
          modalClose={() => setModalOpen(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
