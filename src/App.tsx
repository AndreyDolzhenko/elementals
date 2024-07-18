import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Enter from "./components/Enter";
import "./App.css";

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  
  return (
    <div style={{display: "flex",
      flexDirection: "column",
      alignItems: "center"}}>
      {isModalOpen ? (
        <Enter modalClose={() => setModalOpen(false)} />
      ) : (
        ""
      )}
      <Header modalOpen={() => setModalOpen(true)}/>
      <AppRouter />
      
    </div>
  );
}

export default App;
