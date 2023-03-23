import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, TaskT } from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'

const TaskForm = () => {
  const navigate = useNavigate()
  const tasks: TaskT[] = useSelector( state => state.tasks)
  const[task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<any>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id: tasks[tasks.length-1].id+1
    }))
    navigate('/')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" id="" placeholder='title' onChange={handleChange}/>
      <textarea name="description" placeholder='description' id="" onChange={handleChange}></textarea>
      <input type="submit" value="save" />
    </form>
  )
}

export default TaskForm