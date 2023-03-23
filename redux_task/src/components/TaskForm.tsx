import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask, TaskT } from '../features/tasks/taskSlice'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {
  const navigate = useNavigate()
  const tasks: TaskT[] = useSelector( (state: {tasks: TaskT[]}) => state.tasks)
  const[task, setTask] = useState({
    id: 0,
    title: '',
    description: '',
    completed: false
  })
  const params = useParams()
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<any>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(params.id){
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: tasks.length>0 ? tasks[tasks.length-1].id+1 : 1
      }))
    }
    navigate('/')
  }

  useEffect(()=> {
    if(params.id) {
      const taskFound = tasks.find( tsk => tsk.id === Number(params.id))
      setTask(taskFound ? taskFound : task )
    }
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" id="" placeholder='title' onChange={handleChange} value={task.title}/>
      <textarea name="description" placeholder='description' id="" onChange={handleChange} value={task.description}></textarea>
      <input type="submit" value="save" />
    </form>
  )
}

export default TaskForm