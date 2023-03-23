import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, TaskT } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom'

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks: TaskT[] = useSelector( state => state.tasks)
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
  }
  return (
    <>
    <div>
      <header>
        <h1>Tasks {tasks.length}</h1>
        <Link to='/create-task'>Crear Tarea</Link>
      </header>
      {
        tasks.map( task => {
          return <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={()=>handleDelete(task.id)}>delete</button>
            <Link to={`/edit-task/${task.id}`}>Editar</Link>
          </div>
        })
      }
      </div>
    </>
  )
}

export default TaskList
