import {motion} from 'framer-motion'
import { useState } from 'react'

const variants = {
  odd: {
    backgroundColor: '#ff0000',
    color: '#000',
    scale: 0.8,
    transition: {
      duration: 2
    }
  },
  even: {
    backgroundColor: '#003333',
    color: '#fff',
    scale: 1.1,
    transition: {
      duration: 1
    }
  }
}
function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <main className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-cyan-500'>
        <motion.div 
          drag dragConstraints={{top: -50, left: -50, right: 50, bottom: 50}}
          className='h-28 w-28 rounded-md bg-slate-100 grid place-content-center text-2xl'></motion.div>
        {/* <motion.div 
          animate={counter%2===0 ? 'even' : 'odd'}
          variants={variants}
          className='h-28 w-28 rounded-md bg-slate-100 grid place-content-center text-2xl'>{counter}</motion.div>
        <button onClick={()=>setCounter(counter+1)} className='w-28 bg-slate-100 rounded-md '>Dale!</button> */}
      </main>
    </>
  )
}

export default App
