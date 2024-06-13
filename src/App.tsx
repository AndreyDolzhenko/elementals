import { useState } from "react";

import AppRouter from "./components/AppRouter";
import Main from "./components/Main";
import PersonalPage from "./components/PersonalPage";
import "./App.css";

function App() {
  
  return (
    <div>
      <AppRouter />
      {/* {isPersonalPage === false ? <Main /> : <PersonalPage />}    */}
    </div>
  );
}

export default App;
