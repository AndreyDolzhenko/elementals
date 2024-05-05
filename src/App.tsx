import React, { useState } from "react";

import Main from "./components/Main";
import "./App.css";

// const URL = "http://89.111.172.208:5000/api/v1";
// const response = await fetch(`${URL}/employees`);
// const result = await response.json();

function App() {

  const texts = ["Маша", "Лена", "Даша"];
  
  return (
    <div>
      <Main texts={texts} />    
    </div>
  );
}

export default App;
