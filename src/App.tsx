
import './App.css'

function App() {  
  function newText(event: any) {
    event.target.textContent = 'New text';
    console.log(event);
  }
  return (
    <div onClick={newText}>New Project</div>
  )
}

export default App
