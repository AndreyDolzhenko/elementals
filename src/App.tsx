import React, { useState } from "react";

import BaseContent from "./components/BaseBackground";
import Header from "./components/Header";
import Authorization from "./components/Authorization";
import SecondPage from "./components/SecondPage";
import ThirdyPage from "./components/ThirdyPage";
import "./App.css";

// const URL = "http://89.111.172.208:5000/api/v1";
// const response = await fetch(`${URL}/employees`);
// const result = await response.json();

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState({login: "", password: ""});

  const getContentForm = (password: {}) => {
    setContent(password);
  }
  
  return (
    <>                
      {console.log(content)}
      <Header modalOpen={() => setModalOpen(true)} />
      <BaseContent />      
      <SecondPage />
      <ThirdyPage />
      {isModalOpen ? (
        <Authorization modalClose={() => setModalOpen(false)} getContentForm={getContentForm({login: "3", password: "4"})}/>
      ) : (
        ""
      )}
      {/* {console.log(result)} */}
    </>
  );
}

export default App;
