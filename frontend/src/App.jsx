
import { useState } from 'react';
import{CreateTodo} from './components/CreateTodo';
import { Todos } from './components/todos';

function App() {
  const[todos,setTodo]=useState([]);
  fetch("http://localhost:3000/todos").then(async function(res) {
    const finalArray=await res.json();
    setTodo(finalArray.alltodos);
  })
  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
