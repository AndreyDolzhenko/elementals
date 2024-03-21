import { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');  
  const [listItems, setListItems] = useState<string[]>([]);

  let getCo;
  function getContent(content: any) {
    return (
      <li>{content}</li>      
    );
  }
 
console.log(text);
  return (    
    <>    
      
      <input type="text" value={text} onChange={(e: any) => (
        setText(e.target.value)
        )}/>
      <button onClick={() => (
        // setListItems([...listItems, text])
        getCo = getContent(text)
        // console.log(getContent(text))
        )}>Отправить</button>
        
      <ol>   
        {getCo}     
        {/* {listItems.map((el) => (
          <li>{el}</li>
        ))} */}
      </ol>
    </>
  );
}

export default App
