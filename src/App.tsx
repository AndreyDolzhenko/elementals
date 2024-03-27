import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  // const [text, setText] = useState('');
  // const [listItems, setListItems] = useState<string[]>([]);
  // const divRef = useRef(null);
  const logo = 'LEMENTALS'.split('');
  const [logoLetter, setLogoLetter] = useState('');
  
   function Logo() {    
    return (
      <div style={{ width: 200 }}>
        <div id="logo">
          <div id="logoText" style={{color: 'green'}}>{logoLetter}</div>          
        </div>
      </div>
    );
  }

  function Header() {
    return (
      <div id="header">
        {Logo()}
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

  // function completionOfInput(content: any) {
  //   if (content.key == 'Enter' || content.target.value == 'button') {
  //     setListItems([...listItems, text]);
  //     // divRef.current.innerHTML += `<br>${text}`;
  //     setText('');
  //   }
  // }

  // function deleteTask(index: number) {
  //   setListItems((prev) => (
  //     prev.filter((el, i) => index !== i)
  //   ));
  // }

  return (
    <>
    {
      
        
         
        
          
        logo.forEach((el, i) => (
          
          setInterval(() => {
         
          setLogoLetter(logo[i]);
          console.log([...logoLetter, logo[i]]);
        }, 2000)
          ))   
        // setLogoLetter(logo);
        // console.log([...logoLetter, logo]);

     
    }
      <div>{Header()}</div>




      {/* <div>{logoLetter}</div> */}

      {/* 
      <input type="text" value={text}
      onKeyUp={(e: any) => (completionOfInput(e))}
      onChange={(e: any) => (setText(e.target.value))}
      />
      <button value="button"
        onClick={(e: any) => completionOfInput(e)}        
      >Отправить</button>
      
      <ol >              
        {listItems.map((el, index) => (      
          <li key={index}>
            {el}           
            <span className='deleteLi' onClick={() => deleteTask(index)}>X</span>
          </li>
        ))}
      </ol>
      <div ref = {divRef} />
 */}
    </>
  );
}

export default App;
