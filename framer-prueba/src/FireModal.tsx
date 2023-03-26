import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Modal } from './components'

const FireModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <div className='w-full h-screen bg-zinc-900' >
      <motion.button 
        className='h-8 w-auto px-4 rounded-sm bg-[#ff9d00] font-semibold text-xl' 
        onClick={() => (modalOpen ? close() : open())}
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        >
        Launch modal
      </motion.button>
      <AnimatePresence 
        initial={false}
        mode="wait"
        onExitComplete={()=>null}>
        {modalOpen && <Modal handleClose={close}/>}
      </AnimatePresence>
    </div>
  )
}

export default FireModal