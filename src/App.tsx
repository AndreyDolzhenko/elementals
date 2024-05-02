import React, { useState } from "react";

import Main from "./components/Main";
import Authorization from "./components/Authorization";
import "./App.css";

// const URL = "http://89.111.172.208:5000/api/v1";
// const response = await fetch(`${URL}/employees`);
// const result = await response.json();

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState("1");
  const [password, setPassword] = useState("2");

  const forgotPassword = () => {
    console.log(
      `login: ${login}
       password: ${password}`)
  }
  
  return (
    <>         
      <Main setModalOpen={setModalOpen} />       
      {isModalOpen ? (
        <Authorization 
          modalClose={() => setModalOpen(false)}           
          setLogin={setLogin}          
          setPassword={setPassword}
          forgotPassword={forgotPassword}
        />
      ) : (
        ""
      )}
      {/* {console.log(result)} */}
    </>
  );
}

export default App;
