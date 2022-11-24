import React, { useState, useCallback, useEffect, useRef } from "react";

export const Json = () => {
  const num = useRef();
  const [numDep, setNumDep] = useState(1);
  const [content, setContent] = useState("");

  const handleChange = () => {
    setNumDep(num.current.value);
  };

  const handleSet = useCallback((props) => {
    setContent((c) => [
      ...c,
      props.map((obj) => {
        return <div key={obj.id}>
          <span>id:{obj.id}</span>
          <p>user: {obj.userId}</p>
          <p>titulo: {obj.title}</p>
          <p>descripcion: {obj.body}</p>
        </div>;
      }),
    ]);
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        handleSet(res);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("rendered correctly"));
  }, [numDep]);

  return (
    <>
      <input type="number" onChange={handleChange} ref={num} />
      <div>{content}</div>
    </>
  );
};
