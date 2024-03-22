import { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');  
  const [listItems, setListItems] = useState<string[]>([]);
  
  function completionOfInput(content: any) {   
    if (content.key == 'Enter' || content.target.value == 'button') {           
      setListItems([...listItems, text]);       
      setText('');   
    }
  }

  function createLi(arr: []) {
    return (
    arr.map((el, index) => (<li id={String (index)} key={index}>{el}{deleteLi(index)}</li>))
    )
  }

  function deleteLi(idText: any){
    return(
      <><div className='deleteLi' onClick={() => document.getElementById(`${idText}`).remove()}>X</div></>
    )
  }
  
  return (    
    <>     
      <input type="text" value={text}
      onKeyUp={(e: any) => (completionOfInput(e))}
      onChange={(e: any) => (setText(e.target.value))}
      />
      <button value="button"
        onClick={(e: any) => completionOfInput(e)}        
      >Отправить</button>
      
      <ol >              
        {createLi(listItems)}
      </ol>
    </>
  );
}

export default App
