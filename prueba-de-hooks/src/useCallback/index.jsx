import React, { useCallback, useRef, useState } from "react";

function Index() {
  const [count, setCount] = useState([]);
  const num = useRef();
  const add = () => {
    console.log(num.current.value);
    setCount((c) => [...c, num.current.value]);
  };
  return (
    <>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div>{count.map(c=>{
          return <div>{c}</div>
        })}</div>
        <input type="number" ref={num} />
        <button onClick={add}>+</button>
      </div>
    </>
  );
}

export default Index;
