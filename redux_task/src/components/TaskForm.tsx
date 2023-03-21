import {useState} from 'react'

const TaskForm = () => {
  const[task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    
  }
  return (
    <form>
      <input type="text" name="title" id="" placeholder='title' onChange={handleChange}/>
      <textarea name="description" placeholder='description' id="" onChange={handleChange}></textarea>
      <input type="submit" value="save" />
    </form>
  )
}

export default TaskForm