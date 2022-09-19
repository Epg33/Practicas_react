import React, { useState, useEffect } from "react";

function Actividad2() {
    const [chistes, setChistes] = useState([]);

    useEffect(() =>{
        const url = 'http://api.icndb.com/jokes'
        const peticion = fetch(url)
        peticion.then(data => data.json())
        .then(lecture=> {
            lecture.value.map(joke => {
                setChistes((e)=>
                [...e,
                    <div key={joke.id} className='jokeBox'>{joke.id}. {joke.joke}</div>
                ])
            });
        })
    }, [])

    return (
    <div className="jokes">
        {chistes}
    </div>
  )
}

export default Actividad2;