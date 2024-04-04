import React, { useState } from "react";

import BaseContent from "./components/BaseBackground";
import Header from "./components/Header";
import Authorization from "./components/Authorization/Authorization";
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header isModalOpen={isModalOpen} modalOpen={() => setModalOpen(true)} />
      <BaseContent />
      {isModalOpen ? (
        <Authorization
          isModalOpen={isModalOpen}
          modalClose={() => setModalOpen(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
