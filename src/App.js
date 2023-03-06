import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDoArray, setToDoArray] = useState([
    {name: "Buy Shopping", priority: "high"},
    {name: "Clean Bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"},
  ]);
  const [newToDoName, setNewToDoName] = useState("");
  const [newHighLowValue, setNewHighLowValue] = useState("low");

  function handleInputChange(event){
    setNewToDoName(event.target.value);
  };

  function handleValueChange(event){
    console.log(toDoArray);
    setNewHighLowValue(event.target.value);
  };

  function saveNewToDo(event){
    event.preventDefault();
    console.log(newHighLowValue);
    const newToDo = {
      name: newToDoName,
      priority: newHighLowValue,
    };
    const newToDoArray = [...toDoArray, newToDo];
    setToDoArray(newToDoArray);
    setNewToDoName("");
  };

  function deleteAll(){
    const list = document.querySelector('#test');
    list.innerHTML = '';
  };

  const toDoNodes = toDoArray.map((toDo, index)=>{
    return <div key={index}>
    {toDo.priority ==="high" ? <li className="high"><span>{toDo.name}</span></li> : <li className="low"><span>{toDo.name}</span></li> }
    </div>});

  return (
    <div id="app">
      <h1>ToDo's</h1>
      <nav>
        <form onSubmit={saveNewToDo}>
          <input className="text-box" type="text" value={newToDoName} onChange={handleInputChange}/>
          High<input type="radio" value="high" name="high/low" onChange={handleValueChange}/>
          Low<input type="radio" value="low" name="high/low" onChange={handleValueChange} defaultChecked/>
          <input className="button" type="submit" value="Save Item"/>      
        </form>
        <button className = "button" type='submit' onClick={deleteAll}>Delete All</button>
      </nav>
      <ul id="test">
        {toDoNodes}
      </ul>       
    </div>
  );
}

export default App;
