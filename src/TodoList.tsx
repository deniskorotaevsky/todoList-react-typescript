type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  rrr: string
  tasks: Array<TaskType>
  removeTask: Function
}

export function TodoList(props: PropsType) {

    return (
      <div>
        <h3>
          {props.title}
        </h3>
        <div>
          <input />
          <button>+</button>
        </div> 
        <ul>
          {
            props.tasks.map((item) => <li key = {item.id}><input type="checkbox" checked={item.isDone} />
          <span>{item.title}</span>
          <button onClick={ () => {props.removeTask(item.id)}}>x</button>
            </li>
            )
          }
        </ul>

        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
   )
  }