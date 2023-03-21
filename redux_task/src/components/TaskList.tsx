import { useSelector } from 'react-redux'
import { TaskT } from '../features/tasks/taskSlice';

const TaskList = () => {
  const tasks: TaskT[] = useSelector( state => state.tasks)
  console.log(tasks);
  
  return (
    <>
      {
        tasks.map( task => {
          return <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        })
      }
    </>
  )
}

export default TaskList