import React, { useState, useRef } from 'react'
import Todos from './Todos'

function Index() {
  const newest = useRef();
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const adding = () => {
    setTodos((todo)=>[...todo, newest.current.value])
  }

  const increment =  () => {
    setCount(c=>c+1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        count: {count}
        <button onClick={increment}>+</button>
        <input type='text' ref={newest} />
        <button onClick={adding}>adding</button>
      </div>
    </>
  )
}

export default Index