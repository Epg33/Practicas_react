import { motion } from 'framer-motion'

const FireModal = () => {
  return (
    <div className='w-full h-screen bg-zinc-900' >
      <motion.button 
        className='h-8 w-auto px-4 rounded-sm bg-[#ff9d00] font-semibold text-xl' 
        onClick={() => null}
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}>
        Launch modal
      </motion.button>
    </div>
  )
}

export default FireModal