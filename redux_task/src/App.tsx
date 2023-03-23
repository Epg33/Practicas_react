import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {  
  return (
    <> 
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<TaskList /> }/>
            <Route path='/create-task' element={<TaskForm /> }/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
