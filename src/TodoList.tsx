import { ChangeEvent, useState } from "react"
import { FilterValuesType } from "./App"

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  rrr: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void;
  addTask: (title: string) => void
}

export function TodoList(props: PropsType) {

const [newText, setNewText] = useState('');

function handleChange (event: ChangeEvent<HTMLInputElement> ) {
  setNewText(event.currentTarget.value);
}

const onAllClickHandler = () => props.changeFilter('all')
const onActiveClickHandler = () => props.changeFilter('active')
const onCompletedClickHandler = () => props.changeFilter('completed')

function addTask () {
    props.addTask(newText); 
    setNewText('');
  } 
  
    return (
      <div>
        <h3>
          {props.title}
        </h3>
        <div>
          <input value={newText} type='text' onChange={handleChange} />
          <button onClick={addTask}>+</button>
        </div> 
        <div>
          <button onClick={onAllClickHandler}>All</button>
          <button onClick={onActiveClickHandler}>Active</button>
          <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
        <ul>
          {
            props.tasks.map((item) => {

              const onRemoveHandler = () => {
                props.removeTask(item.id)
              }

              return <li key = {item.id}><input type="checkbox" checked={item.isDone} />
                  <span>{item.title}</span>
                  <button onClick={onRemoveHandler}>x</button>
                </li>
            }
            )
          }
        </ul> 

      </div>
   ) 
  }