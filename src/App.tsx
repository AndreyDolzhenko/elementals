import { useState } from 'react';
import { useRef } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');  
  const [listItems, setListItems] = useState<string[]>([]);
  const divRef = useRef(null);

  function Logo() {
    return (
      <div id='logo'>
        <div id='logoText'>LEMENTALS</div>
      </div>
    );
  }

  function Header() {

    return (
      <>
      {Logo()} 
        <div>
          <span>Episodes</span>
          <span>About</span>
          <span>More</span>
        </div>
      </>
    );
  }
  
  function completionOfInput(content: any) {   
    if (content.key == 'Enter' || content.target.value == 'button') {           
      setListItems([...listItems, text]);
      // divRef.current.innerHTML += `<br>${text}`;           
      setText('');   
    }
  }
 
  function deleteTask(index: number) {
    setListItems((prev) => (
      prev.filter((el, i) => index !== i)
    ));
  }
  
  return (    
    <>     
      <div>{Header()}</div>
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
      {/* <div ref = {divRef} /> */}
    </>
  );
}

export default App
