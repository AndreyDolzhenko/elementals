import { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');  
  const [listItems, setListItems] = useState<string[]>([]);
  
console.log(text);
  return (    
    <>
      <input type="text" value={text} onChange={(e: any) => setText(e.target.value)}/>
      <button onClick={() => setListItems([...listItems, text])}>Отправить</button>
      <ol>
        {listItems.map((el) => (
          <li>{el}</li>
        ))}
      </ol>
    </>
  );
}

export default App
