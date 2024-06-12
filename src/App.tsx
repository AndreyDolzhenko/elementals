import { useState } from "react";

import AppRouter from "./components/AppRouter";
import Main from "./components/Main";
import PersonalPage from "./components/PersonalPage";
import "./App.css";

// const URL = "http://89.111.172.208:5000/api/v1";
// const response = await fetch(`${URL}/employees`);
// const result = await response.json();

// const [isPersonalPage, setPersonalPage] = useState(true);

function App() {
  
  return (
    <div>
      <AppRouter />
      {/* {isPersonalPage === false ? <Main /> : <PersonalPage />}    */}
    </div>
  );
}

export default App;
