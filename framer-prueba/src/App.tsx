import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FireModal from "./FireModal"
import Task from "./Task"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/modal" element={<FireModal />} />
        </Routes>
      </Router>
    </>
  )
}