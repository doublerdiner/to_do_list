import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDoArray, setToDoArray] = useState([
    {name: "Buy Shopping", priority: true},
    {name: "Clean Bathroom", priority: false},
    {name: "Car's MOT", priority: true},
  ]);
  const [newToDoName, setNewToDoName] = useState("");

  function handleInputChange(event){
    setNewToDoName(event.target.value);
  };

  function handleValueChange(event){
    console.log(event.target.value);
  };



  function saveNewToDo(event){
    event.preventDefault();
    const newToDo = {
      name: newToDoName,
      priority: false,
    };
    const newToDoArray = [...toDoArray, newToDo];
    setToDoArray(newToDoArray);
    setNewToDoName("");
  };






  const toDoNodes = toDoArray.map((toDo, index)=>{
    return <div key={index}>
    {toDo.priority ? <li className="high"><span>{toDo.name}</span></li> : <li className="low"><span>{toDo.name}</span></li> }
    </div>});

  return (
    <div id="app">
      <h1>ToDo's</h1>
      <form onSubmit={saveNewToDo}>
        <input className="text-box" type="text" value={newToDoName} onChange={handleInputChange}/>
        High<input type="radio" value="true" name="high/low" onChange={handleValueChange}/>
        Low<input type="radio" value="false" name="high/low" onChange={handleValueChange}/>
        <input className="button" type="submit" value="Save Item"/>      
      </form>
      <ul>
        {toDoNodes}
      </ul>       
    </div>
  );
}

export default App;
