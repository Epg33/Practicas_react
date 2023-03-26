import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Task from "./Task"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Task />} />
        </Routes>
      </Router>
    </>
  )
}