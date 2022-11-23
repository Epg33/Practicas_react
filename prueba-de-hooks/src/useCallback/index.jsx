import { useState, useCallback, useRef } from "react";
import Todos from "./Todos";

const Index = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const newest = useRef();

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos(() => [...todos, newest.current.value ? newest.current.value :"New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <input type='text' ref={newest} />
        <button onClick={addTodo}>add</button>
      </div>
    </>
  );
};

export default Index;