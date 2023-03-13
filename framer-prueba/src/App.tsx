import { motion, useTransform, useMotionValue } from 'framer-motion'
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
  // const y = useMotionValue<number>(0)
  // const bgColor = useTransform(y, [-100, 0, 100], ['#fff', '#999', '#000']);
  const [align, setAlign] = useState<string>('flex-start');
  return (
    <>
      <main className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-cyan-500'>
        <div className='w-28 flex' style={{justifyContent: align}}>
          <motion.h1 layout transition={{duration: 1}}>Hola</motion.h1>
        </div>
        <button onClick={()=>setAlign(align==='flex-start' ? 'flex-end' : 'flex-start')} className='w-28 bg-slate-100 rounded-md'>change align text</button>
        {/*<motion.div 
          drag='y'
          style={{backgroundColor: bgColor, y}}
          dragConstraints={{top: -100, bottom: 100}}
          className='h-28 w-28 rounded-md bg-slate-100 grid place-content-center text-2xl'></motion.div>
         <motion.div 
          animate={counter%2===0 ? 'even' : 'odd'}
          variants={variants}
          className='h-28 w-28 rounded-md bg-slate-100 grid place-content-center text-2xl'>{counter}</motion.div>
        <button onClick={()=>setCounter(counter+1)} className='w-28 bg-slate-100 rounded-md '>Dale!</button> */}
      </main>
    </>
  )
}

export default App
