import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  // const [text, setText] = useState('');
  // const [listItems, setListItems] = useState<string[]>([]);
  // const divRef = useRef(null);
  
  const [logoLetter, setLogoLetter] = useState("LEMENTALS");
  const [count, setCount] = useState(0)

  function Logo() {
    return (
      <div style={{ width: 200 }}>
        <div id="logo">
          <div id="logoText" style={{ color: "green" }}>
            {logoLetter}
          </div>
        </div>
      </div>
    );
  }

  function Header() {
    return (
      <div id="header">
        <Logo />
        <div id="headerMenu">
          <span>Episodes</span>
          <span>About</span>
          <span>More</span>
        </div>
        <div id="headerButton">
          <button>Subscribe</button>
          <button>Registration</button>
        </div>
      </div>
    );
  }

 

  return (
    <>
      
      <div>{Header()}</div>
      <div>
        <input type="text"  onClick={(e) => console.log(e.target.value)}/>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      
    </>
  );
}

export default App;
