import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, TaskT } from '../features/tasks/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks: TaskT[] = useSelector( state => state.tasks)
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
  }
  return (
    <>
      {
        tasks.map( task => {
          return <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={()=>handleDelete(task.id)}>delete</button>
          </div>
        })
      }
    </>
  )
}

export default TaskList