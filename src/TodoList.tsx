import { ChangeEvent, useState } from "react"
import { FilterValuesType } from "./App"

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
  toggleTask: (id: string) => void
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
      <div className="todolist">
        <div className="inp">
            <h3>
              {props.title}
            </h3>
          <div>
            <input value={newText} type='text' onChange={handleChange} />
            <button onClick={addTask}>+</button>
          </div>
          <div className="btnFilter">
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
          </div>
        </div>
        <ul>
          {
            props.tasks.map((item) => {

              const onRemoveHandler = () => {
                props.removeTask(item.id)
              }
              const handleToggleClick = () => {
                props.toggleTask(item.id)
              }

              return <li key = {item.id} >
                    <span onClick={handleToggleClick} style={{textDecoration: item.isDone ? 'line-through' : 'none'}} className="spans">{item.title}</span>
                    <button className="removeHandler" onClick={onRemoveHandler}>X</button>
                </li>
            }
            )
          }
        </ul> 

      </div>
   ) 
  }