import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {  
  return (
    <> 
      <h1 className='text-9xl'>HOME</h1>
      <TaskList />
      <TaskForm />
    </>
  )
}

export default App
