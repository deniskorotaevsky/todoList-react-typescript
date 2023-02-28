import { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';

function App() {

  let initTasks = [
    {id: 1, title:'css', isDone: true},
    {id: 2, title:'JS', isDone: true},
    {id: 3, title:'React', isDone: true},
    {id: 4, title:'Redux', isDone: false},
  ]

  const [tasks, setTasks] = useState(initTasks)

  function removeTask(id: number) {
    let resultTasks = tasks.filter(item => item.id !== id);
    setTasks(resultTasks)
  }

  return (
    <div className="App">
      <TodoList tasks={tasks} removeTask={removeTask} title='What to...' rrr='барабулька'/>
    </div>
  );
}
 
export default App;
