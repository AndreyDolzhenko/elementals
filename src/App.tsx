import { useState } from "react";

import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Enter from "./components/Enter";
import "./App.css";

function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <div>
      {isModalOpen ? (
        <Enter modalClose={() => setModalOpen(false)} />
      ) : (
        ""
      )}
      <Header setModalOpen={setModalOpen}/>
      <AppRouter />
      
    </div>
  );
}

export default App;
