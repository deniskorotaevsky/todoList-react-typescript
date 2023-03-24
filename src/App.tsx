import { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { TodoList } from './TodoList';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {

  let initTasks = [
    {id: v1(), title:'css', isDone: true},
    {id: v1(), title:'JS', isDone: true},
    {id: v1(), title:'React', isDone: true},
    {id: v1(), title:'Redux', isDone: false},
  ]

  const [tasks, setTasks] = useState(initTasks);
  const [filter, setFilter] = useState<FilterValuesType>('all');

  function removeTask(id: string) {
    let resultTasks = tasks.filter(item => item.id !== id);
    setTasks(resultTasks)
  }

  function addTask(title: string) {
    if (title.trim().length !== 0) {
      let newTask = {
        id: v1(), 
        title: title, 
        isDone: false
      }
        setTasks([...tasks, newTask]);
      }
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }
  
  let tasksForTodoList = tasks;
  if (filter === 'completed') {
    tasksForTodoList = tasks.filter(t => t.isDone === true);
  }
  if (filter === 'active') {
    tasksForTodoList = tasks.filter(t => t.isDone === false);
  }
  
  function handleToggle(id: string){
    setTasks([
      ...tasks.map(todo => 
        todo.id === id ? {...todo, isDone: !todo.isDone} : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <TodoList 
      changeFilter={changeFilter}
      tasks={tasksForTodoList}
      removeTask={removeTask}  
      title='TodoList'
      addTask={addTask}
      toggleTask={handleToggle}
       />
    </div>
  );
}
 
export default App;
