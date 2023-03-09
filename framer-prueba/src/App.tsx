import {motion} from 'framer-motion'

const variants = {
  odd: {
    backgroundColor: '#333',
    color: '#aaa'
  },
  even: {
    backgroundColor: '#999',
    color: '#000'
  }
}
function App() {
  return (
    <>
      <main className='w-full h-[200vh] flex justify-center pt-[120vh] bg-cyan-500'>
        <motion.div 
          initial={{scale: 1}} 
          transition={{duration: 2}} 
          whileInView={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }} 
          className='h-28 w-28 rounded-md bg-slate-100'></motion.div>
        {/* <motion.h1 initial={{color: '#000'}} transition={{duration: 1.5}} animate={{y: 100, color: '#eee'}} className='text-slate-100 font-bold text-2xl h-fit'>Hello world</motion.h1> */}
      </main>
    </>
  )
}

export default App
